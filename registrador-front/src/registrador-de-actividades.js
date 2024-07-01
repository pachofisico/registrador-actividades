import React, { useState } from 'react';

function RegistradorDeActividades() {
  const [activityName, setActivityName] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = localStorage.getItem('userEmail'); // Obtener el correo del localStorage

    if (!email) {
      setMessage('No se encontró el correo del usuario. Inicie sesión primero.');
      return;
    }

    const activityData = {
      activityName,
      email,
      time,
    };

    try {
      const response = await fetch('http://localhost:8080/registrador/actividades', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(activityData),
      });

      if (response.ok) {
        const result = await response.text(); 
        setMessage(result);
        // Limpiar el formulario
        setActivityName('');
        setTime('');
      } else {
        const errorMessage = await response.text();
        setMessage(errorMessage);
      }
    } catch (error) {
      setMessage('Ocurrió un error. Por favor, inténtelo de nuevo.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="Sesion">
      <h2>Registrar Actividad</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="Texto_sesion"
          placeholder="Nombre de la actividad"
          value={activityName}
          onChange={(e) => setActivityName(e.target.value)}
          required
        />
        <input
          type="text"
          className="Texto_sesion"
          placeholder="Tiempo (horas)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <button type="submit" className="Boton_sesion">Registrar actividad</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default RegistradorDeActividades;
