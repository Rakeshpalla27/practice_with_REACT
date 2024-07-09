export function Databinding(){
    var categories =["Electronics","Footwear","Fashion"];
    var data=[
        {Name:"samsung",Price:45000.00,Stock:true},
        {Name:"nike",Price:60000.00,Stock:true},
    ]
    return (
        <div className="container-fuild">
            <h2>Categories</h2>
            <ul>
                {
                    categories.map((cat)=>
                        <li key={cat}><a href="hhh" >{cat}</a></li>
                    )
                }
            </ul>
            <div>
                {
                    categories.map((cat)=>
                        <button className="btn btn danger mb-2 d-block" key={cat}>{cat}</button>
                    )
                }
            </div>
            <ul className="list-unstyled">
                {
                    categories.map((cat)=>
                        <li key={cat}><input type="checkbox" />{cat}</li>
                    )
                }
            </ul>
            <ol>
                {
                    categories.map((category)=>
                    <li key={category}>{category}</li>
                    )
                }
            </ol>
            <select>
                {
                    categories.map((category)=>
                        <option key={category}>
                            {category}
                        </option>
                )
                }
            </select>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>categories</th>
                    </tr>

                </thead>
                <tbody>{
                    categories.map((category)=>
                    <tr key={category}><td>{category}</td></tr>
                    )
                    }</tbody>
            </table>
            <h2>products Table</h2>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    </tr>
            </thead>
            <tbody>
                {
                    data.map((item)=>
                        <tr key={item.Name}>
                           <td>{item.Name}</td>
                           <td>{item.Price}</td>
                           <td>{item.Stock===true?"available":"out of stock"}</td>
                           <td><button className="btn btn danger">
                            <span className="bi bi-trash-fill"></span></button></td>
                        </tr>
                    
                    
                    )
                }
            </tbody>
        </table>

        </div>

    )
}
