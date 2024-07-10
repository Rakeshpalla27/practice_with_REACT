import {useEffect,useState} from 'react'
export function Nasacomponent(){
    const [mars,setmars]=useState({photos:[]});
    useEffect(()=>
    {
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
        .then(respone=>respone.json())
        .then(data=>{
            setmars(data);

    })
    },[])
    return(
    <div className="container-fluid">
        <h2>mars rover photos</h2>
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th>photo id </th>
                    <th>preview</th>
                    <th>camera name</th>
                    <th>rover name</th>
                </tr>
            </thead>
            <tbody>
                {
                    mars.photos.map((item)=>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>
                               <a href={item.img_src} target="_blank"> <img width="200" height="200" src={item.img_src}/></a>
                            </td>
                            <td>{item.camera.full_name}</td>
                            <td>{item.rover.name}</td>
                            
                        </tr>
                    )
                    
                }
            </tbody>
        </table>

    </div>
    
    )
    
}