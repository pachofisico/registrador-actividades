
function RegistradorDeActividades() {
    return(
        <div className="RegistradorDeActividades">
                <div className="container">
                    <div className="Titulo_Sesion">Registrar Actividades</div>
                    <br></br>
                    <table className="TablaActividades">
                        <thead>
                        <tr>
                            <th>Tarea realizada</th>
                            <th>Horas trabajadas</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><input type="text" className="Texto_actividad" /></td>
                            <td><input type="text" className="Texto_actividad" /></td>
                        </tr>
                        </tbody>
                    </table>
                    <button className="button">Registrar actividad</button>
                    </div>
                    </div>
    )
}


export default RegistradorDeActividades;