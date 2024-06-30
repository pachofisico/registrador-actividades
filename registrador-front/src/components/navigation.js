import React from "react";

function go_to_home(){
    window.location = "/"
}

function go_to_register() {
    window.location = "/registrar-actividad";
}

function go_to_consult() {
    window.location = "/listar-actividades";
}

function Navigation () {
    return(
        <div className="Navigation">
            <button className="MenuButton" onClick={go_to_home}>Login</button>
            <button className="MenuButton" onClick={go_to_register}>Registrar</button>
            <button className="MenuButton" onClick={go_to_consult}>Consultar</button>
        </div>
    )
}

export default Navigation;
