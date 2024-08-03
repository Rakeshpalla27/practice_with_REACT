
export function Eventbinding(e){
    function Insertclick(e){
        // for (var property in e){
        //     document.write(property+"<br>")
        // }
        document.write(`
            BUTTON ID:${e.target.id}<br>
            BUTTON NAME:${e.target.name}<br>
            BUTTON VALUE:${e.target.value}<br>
            X POSITION:${e.clientX}<br>
            Y POSITION:${e.clientY}<br>
            CTRL KEY:${e.ctrlKey}

            `);
    }

    return(
        <div className="container-fluid">
        <h2>EVENTS</h2>
        <button id="btnInsert" name="InsertButton" value="Insert" onClick={Insertclick}>click</button>
        </div>
    )
}