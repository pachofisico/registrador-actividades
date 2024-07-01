import React, { useEffect, useState } from 'react';

function ListadorDeActividades() {
  const [activities, setActivities] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchActivities = async () => {
      const email = localStorage.getItem('userEmail'); 
      if (!email) {
        setMessage('No se encontró el correo del usuario. Inicie sesión primero.');
        return;
      }

      try {
        const response = await fetch(`http://ec2-3-80-112-198.compute-1.amazonaws.com:8080/registrador/actividades/${email}`);
        if (response.ok) {
          const result = await response.json();
          setActivities(result);
        } else {
          setMessage('Error al obtener las actividades');
        }
      } catch (error) {
        console.error('Error:', error);
        setMessage('Ocurrió un error al obtener las actividades.');
      }
    };

    fetchActivities();
  }, []);

  return (
    <div className="RegistradorDeActividades">
      <div className="container">
        <div className="Titulo_Sesion">Consultar Actividades</div>
        <br />
        {message && <p>{message}</p>}
        <table className="TablaActividades">
          <thead>
            <tr>
              <th>Tarea realizada</th>
              <th>Horas trabajadas</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity.id}>
                <td className="TextoActividadRealizada">{activity.activityName}</td>
                <td className="TextoActividadRealizada">{activity.time} horas</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListadorDeActividades;
