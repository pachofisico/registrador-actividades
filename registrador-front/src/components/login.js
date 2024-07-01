import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      const response = await fetch('http://ec2-3-80-112-198.compute-1.amazonaws.com:8080/registrador/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const result = await response.text(); 
        console.log('Usuario logueado:', result);

        localStorage.setItem('userEmail', email);

        setLoginMessage(result);

        window.location.href = '/registrar-actividad';
      } else {
        const errorMessage = await response.text();
        console.error('Fallo en el login:', errorMessage);
        setLoginMessage(errorMessage);
      }
    } catch (error) {
      console.error('Error:', error);
      setLoginMessage('Por favor intente de nuevo.');
    }
  };

  return (
    <div className="Sesion">
      <div className="Titulo_Sesion">Iniciar sesión</div>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="Texto_sesion"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="Texto_sesion"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="Boton_sesion">Iniciar sesión</button>
      </form>
      {loginMessage && <p>{loginMessage}</p>}
    </div>
  );
}

export default Login;
