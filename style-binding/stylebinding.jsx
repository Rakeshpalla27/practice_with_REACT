import { useState } from "react"


export function Stylebind(){
    const [style,setstyle]=useState({'fontSize':'100px','color':'black'})
    function handlefontsizechange(e){
        setstyle({
            fontSize:e.target.value+"px",
            color:style.color
        })
    }
    function handlecolorchange(e){
        setstyle({
            fontSize:style.fontSize,
            color:e.target.value
        })
    }
    return (
        <div className="container-fluid">
            <h2>Style binding</h2>
            <dl>
                <dt> Font size</dt>
                <dd><input type="range" onChange={handlefontsizechange} min='10'   max='100' /></dd>
                <dt>Font color</dt>
                <dd><input type="color" onChange={handlecolorchange}></input></dd>
            </dl>
            <p className="text-center"  style={style}>Sample text</p>

        </div>
    )
}