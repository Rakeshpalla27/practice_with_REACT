import {useState,useEffect} from 'react';
import $ from 'jquery';
import "./fakestoreapi.css";
import axios from "axios";

export function Fakestore(){
    const [categories,setcategories]=useState([]);
    const [products,setproducts]=useState([{}]);
    const [cartitems,setcartitems]=useState([]);
    const [cartcount,setcartcount]=useState(0);
    
    function handlehomebtn(){
        loadproducts("https://fakestoreapi.com/products");
    }
    function handleaddtocartclick(e){
        fetch(`http://fakestoreapi.com/products/${e.target.id}`)
        .then(response=>response.json())
        .then(data=>{
            cartitems.push(data);
            getcartcount( );
            alert(`${data.title}`);
    })}
    function getcartcount(){
        setcartcount(cartitems.length);
    }
    
    function handlecategorychange(e){
        if(e.target.value==='all') {
            loadproducts("https://fakestoreapi.com/products");
        }
        else{
        loadproducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
        }
    }

    function loadproducts(url){
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            setproducts(data);
        })
    }

    function loadcategories(){
        
        axios.get("https://fakestoreapi.com/products/categories")
        .then((response)=>{
            response.data.unshift("all");
            setcategories(response.data);
        })

        // $.ajax({
        //     method:'get',
        //     url:"https://fakestoreapi.com/products/categories",
        //     success:(response)=>{
        //         response.unshift("all")
        //         setcategories(response);
        //     },
        //     error:(response)=>
        //     {
        //         console.log(response.statusText)
        //     }
        // })



       /* fetch("https://fakestoreapi.com/products/categories")
        .then((response)=>response.json())
        .then((data)=>{
            data.unshift('all');
            setcategories(data);
        })*/
            }

    useEffect(()=>{
        loadcategories();
        loadproducts("https://fakestoreapi.com/products");
        getcartcount();
    },[])
    return (
        <div className='container-fluid'>
            <header className='d-flex justify-content-between  p-3 bg-black text-white  '>
                <div><h2>Fakestore</h2></div>
                <div> 
                <span className='me-4'><button className='btn text-white' onClick={handlehomebtn}>Home</button> </span>
                <span className='me-4'>Electronics</span>
                <span className='me-4'>Jewelery</span>
                <span className='me-4'>Men's fashion</span>
                <span className='me-4'>Women's fashion</span>
                </div>
                <div>
                <span className='bi bi-search me-3'></span>
                <span className='bi bi-heart me-3'></span>
                <span className='bi bi-person me-3'></span>
                <button data-bs-target="#cart" data-bs-toggle="modal" className='btn btn-light position-relative'>
                    <span className='bi bi-cart me-3'></span>
                    <span className='badge rounded-circle bg-danger position-absolute '>{cartcount}</span>
                    </button>
                    <div className='modal fade' id="cart">
                        <div className='modal-dailog'>
                            <div className='modal-content'>
                                <div className='modal-header'>
                                <h2 className='text-primary'>Your Cart Items</h2> 
                                <button data-bs-dismiss="modal" className='btn-close'></button>
                                </div>
                                <div className='modal-body'>
                                    <table className='table table-hover'>
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>preview</th>
                                                <th>price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cartitems.map((item)=>
                                                    <tr key={item.id} >
                                                        <th>{item.title}</th>
                                                        <th><img src={item.image} height={50} width={50} alt="notloaded"></img></th>
                                                        <th>{item.price}</th>
                                                    </tr>
                                                
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                   
                            </div>
                        </div>

                    </div>
                </div>
            </header>
            
            <section className='mt-4 row' >
                <nav className="col-2">
                <div>
                     <label className='form-label'>Select Catergory</label>
                     <div>
                        <select className='form-select ' onChange={handlecategorychange} >
                            {
                                categories.map((category)=>
                                    <option key={category} value={category}>{category.toUpperCase()}</option>
                                )
                            }
                            
                        </select>
                     </div>
                </div>
                </nav>
                <main className="col-10 d-flex flex-wrap">
                        {
                            products.map((product)=>
                                <div key={product.id} className="card m-2 p-2 ">
                                    <img src={product.image} height='150'  className='card-img-top' alt="imgnotload" />
                                    <div className='card-header'> 
                                        <p className='card-title'>{product.title}</p>
                                    </div>
                                    <div className='card-body'>
                                        <dl>
                                            <dt>Price</dt>
                                            <dd>{product.price}</dd>
                                            <dt>Rating</dt>
                                           
                                        </dl>

                                    </div>
                                    <div className='card-footer'>
                                            <button id={product.id} onClick={handleaddtocartclick} className='btn btn-danger w-100'>
                                                <span className='bi bi-cart4 '> </span>Add to cart
                                                  </button>
                                    </div>
                                    
                                </div>
                            
                            )
                        }
                </main>
            </section>
        </div>


    )
}