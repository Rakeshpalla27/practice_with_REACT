import {useState} from "react";
export function Classbinding(){

    const [theme,settheme]=useState('');
    const [buttheme,setbuttheme]=useState('btn btn-dark w-100')

    function handlethemechange(e){
        if (e.target.checked){
            settheme('bg-dark text-white p-3');
            setbuttheme('btn btn-light w-100');
        }
        else{
            settheme('');
            setbuttheme('btn btn-dark w-100');
        }

    }
    function handlenamechange(e){
        if (e.target.value===""){
            settheme('bg-danger text-white p-2')
        }
        else{
            settheme('bg-success text-white p-2')
        
        }
    }
    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center align-items-center" style={{height:500}}>
                <form className={theme}> 
                    <div className="mt-4 mb-4 form-switch"> 
                        <input type="checkbox" onChange={handlethemechange} className="form-check-input"/> Dark Mode
                    </div>
                    <h2><span className="bi bi-person-fill"></span>User Login</h2>
                    <dl>
                        <dt>User name</dt>
                        <dd><input type="text"  onChange={handlenamechange} className="form-control"></input></dd>
                        <dt>password</dt>
                        <dd><input type="password" className="form-control"></input></dd>

                    </dl>
                    <button className={buttheme}>Login</button>
                </form>
            </div>

        </div>

    )
}