
function Register() {
    return(
        <div className="Sesion">
            <div className="Titulo_Sesion">
                Registrarse
            </div>
            <br></br>
            <input type="text" className="Texto_sesion" placeholder="Correo electrónico" />
            <input type="text" className="Texto_sesion" placeholder="Usuario" />
            <input type="text" className="Texto_sesion" placeholder="Contraseña" />
            <button className="Boton_sesion"> 
                Registrarse
            </button>
        </div>
    )
}


export default Register;