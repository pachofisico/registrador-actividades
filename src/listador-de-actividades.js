
function ListadorDeActividades() {
    return(
        <div className="RegistradorDeActividades">
                <div className="container">
                    <div className="Titulo_Sesion">Consultar Actividades</div>
                    <br></br>
                    <table className="TablaActividades">
                        <thead>
                        <tr>
                            <th>Tarea realizada</th>
                            <th>Horas trabajadas</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr><td className="TextoActividadRealizada">Diseño de la solución</td><td className="TextoActividadRealizada">2 horas</td></tr>
                        <tr><td className="TextoActividadRealizada">Codificación de las páginas</td><td className="TextoActividadRealizada">4 horas</td></tr>
                        <tr><td className="TextoActividadRealizada">Envío de la actividad</td><td className="TextoActividadRealizada">1 hora</td></tr>
                        </tbody>
                    </table>

                    </div>
                    </div>
    )
}


export default ListadorDeActividades;