import { useState } from "react";


export function Stylebinding(){
    const [username,setusername]=useState('');
    const [styleobj,setstyleobj]=useState({'border':' ','boxShadow':''});
    function verfiyname(e){
        setusername(e.target.value);
        if(username===''){
            setstyleobj({
                border:'2px solid red',
                boxShadow:'2px 2px 2px red'
            })
        }
        else{
            setstyleobj({
                border:'2px solid green',
                boxShadow:'2px 2px 2px green'
            })
        }
    }
    return(
        <div className="container-fluid">
            <dl>
                <dt>User name</dt>
                <dd><input type="textbox" style={styleobj} onBlur={verfiyname}></input></dd>
            </dl>
            
        </div>
    )
}