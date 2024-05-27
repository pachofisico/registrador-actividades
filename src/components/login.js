
function Login() {
    return(
        <div className="Sesion">
            <div className="Titulo_Sesion">
                Iniciar sesión
            </div>
            <br></br>
            <input type="text" className="Texto_sesion" placeholder="Usuario" />
            <input type="text" className="Texto_sesion" placeholder="Contraseña" />
            <button className="Boton_sesion"> 
                Iniciar sesión
            </button>
        </div>
    )
}


export default Login;