import {useEffect,useState} from 'react';
import "./nasa.component.css";
export function Nasa(){
    const [mars,setmars]=useState({photos:[]});
    useEffect(()=>{
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
        .then(response=>response.json())
        .then( data=>{
            setmars(data);
     })
    },[])
    return (
        <div className='container-fluid'>
           <h2>MARS ROVER PHOTOS</h2>
           <div className='d-flex flex-wrap'>
            {
                mars.photos.map((item)=>
                    <div key={item.id} className='card m-2 p-2'>
                        <img src={item.img_src} height={200} className='card-img-top'/>
                        <div className='card-body'>
                            <dl>
                                <dt>camera name</dt>
                                <dd>{item.camera.full_name}</dd>
                                <dt>rover name</dt>
                                <dd>{item.rover.name}</dd>
                            </dl>
                    </div>
                    </div>
                )
            }
           </div>
        </div>
    )
}
