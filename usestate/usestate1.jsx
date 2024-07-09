import React,{useState} from  'react'
export function Usestate1(){
    const [product,setproduct]=useState({Name:'',Price:'0',City:'',Stock:false});
    function handlenamechange(e){
        setproduct({
            Name:e.target.value,
            Price:product.Price,
            City:product.City,
            Stock:product.Stock
        })
    }
    function handlepricechange(e){
        setproduct({
            Name:product.Name,
            Price:e.target.value,
            City:product.City,
            Stock:product.Stock
        })
        
    }
    function handlecitychange(e){
        setproduct({
            Name:product.Name,
            Price:product.Price,
            City:e.target.value,
            Stock:product.Stock
        })
    }
    function handlestockchange(e){
        setproduct({
            Name:product.Name,
            Price:product.Price,
            City:product.City,
            Stock:e.target.checked
        })
    }
    
    
    return (
        
        <div className='container-fluid'>
        <div className='row'>
        <nav className='col-3'>
       <dl>
        <h2><b>Registor</b></h2>
        <dt>Name</dt>
        <dd><input type="text" onChange={handlenamechange} className="form-control" ></input></dd>
        <dt>Price</dt>
        <dd><input type="number"  onChange={handlepricechange} className="form-control"/></dd>
        <dt>City</dt>
        <dd><select className="form-select" onChange={handlecitychange}>
            <option >hyd</option>
            <option>rjy</option>
            </select></dd>
        <dt>Stock</dt>
        <dd className="form-switch"><input type="checkbox" onChange={handlestockchange} className="form-check-input" />available</dd>
       </dl>
       </nav>
       <main className='col-9'>
        <dl>
            <dt>name</dt>
            <dd>{product.Name}</dd>
            <dt>price</dt>
            <dd>{product.Price}</dd>
            <dt>city</dt>
            <dd>{product.City}</dd>
            <dt>stock</dt>
            <dd>{product.Stock===true?"available":"out of stock"}</dd>
        </dl>
       </main>
        </div>
        </div>
        
    )
}