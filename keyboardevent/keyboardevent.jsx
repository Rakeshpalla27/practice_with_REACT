import { useState } from "react";
export function Keyboardevent(){

    const [users]=useState([{"username":"raki"},{"username":"liki"},{"username":"vasavi"},{"username":"naveen"}]);
    const[errormsg,seterrormsg]=useState('');
    const[effect,seteffect]=useState('');
    const[passwordwarning,setpasswordwarning]=useState({'display':'none'});
    
    

    function verifyusername(e){
        for(var user of users){
            if(user.username===e.target.value ){
                seterrormsg("user name is already taken");
                seteffect('text-danger');
                break;
            }
            else{
                seterrormsg("user name is available");
                seteffect('text-success');

            }
        }
    }

    function verfiypassword(e){
        if(e.which>=65 && e.which<=90){
            setpasswordwarning({'display':'block'});
        }
        else{
            setpasswordwarning({'display':'none'});
        }
    }
    return (
        <div className="container-fluid">
            <h1>REGISTER USER</h1>
            <dl>
                <dt>user name </dt>
                <dd><input type="text" onKeyUp={verifyusername}></input></dd>
                <dd className={effect}>{errormsg}</dd>
                <dt>password</dt>
                <dd><input type="password" onKeyPress={verfiypassword}></input></dd>
                <dd className="text-warning"  style={passwordwarning}>
                    <span className="bi bi-exclamation-triangle">Warning  : Caps On</span>
                </dd>
            </dl>
        </div>
    )
}