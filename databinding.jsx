export function Databind(){
   
    var data=[
        {Catergory:"Electronics",Products:["mobile","television"]},
        {Catergory:"Footwear",Products:["casuals","boots"]}
    ]
    return (
        <div>
        <h2>Menu</h2>
        <ol>
            {
                data.map((item)=>
                    <li key={item.Catergory}>{item.Catergory}
                    <ul>{
                        item.Products.map((products)=>
                            <li key={products}>{products}</li>
                        )
                        }</ul>
                    </li>

                    
            )
            }
        </ol>
        <hr/>
        <select>
            {
                data.map((item)=>
                    <optgroup label={item.Catergory}>
                        {item.Products.map((product)=>
                        <option key={product}>{product}</option>
                        )
                    }

                    </optgroup>
                )
            }
        </select>
        </div>
    )
}