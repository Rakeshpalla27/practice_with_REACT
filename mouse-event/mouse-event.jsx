import { useState } from "react";
import "./mouse-event.css";
export function Mouseevent(){
    const [img]=useState(["mobile/m1.jpeg","mobile/m2.jpeg","mobile/m3.jpeg","mobile/m4.jpeg","mobile/m5.jpeg"]);
    const [preview,setpreview]=useState("")

    function handlemouseover(e){
            setpreview(e.target.src);
    }
    return(
        <div className="container-fluid">
            <section className="row mt-4">
                <nav className="col-2">
                    {
                        img.map((item)=>
                            <div className="mb-4 p-1 border border-2 border-primary" style={{width:'90px'}} key={item}>
                        <img width="80px" height="80px" src={item} onMouseOver={handlemouseover} alt="unable to load"></img>
                        </div>
                        )

                    }

                </nav>
                <main className="col-10">

                        <img width="400px" height="600px" className="preview-img" src={preview} alt="unable to load"></img>
    
                </main>
            </section>  

        </div>
    )
}