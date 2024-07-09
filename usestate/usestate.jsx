import React,{useState} from  'react'
export function Usestate(){
    const [name]=useState("hello welcome shop");
    const [categories]=useState(["electronics","footwear","fashion"]);
    const [products]=useState([{name:"tv",price:68000},{name:"nike",price:90000}]);
    
    
    return (
        <div>
            
            <h2>USing react useState</h2>
            <p>{name}</p>
            <ol>
                {
                    categories.map((cat)=>
                       <li key={cat}>{cat}</li> 
                    )
                }
            </ol>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>price</th>
                    </tr>
                </thead>
               
            
            <tbody>
                    {
                        products.map((product)=>
                        <tr key={product.name}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                        )
                    }
                </tbody>
                </table>
        </div>
    )
}