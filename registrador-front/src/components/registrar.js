import React, { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      email,
      userName,
      password,
    };

    try {
      const response = await fetch('http://ec2-3-80-112-198.compute-1.amazonaws.com:8080/registrador/registrar-usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const contentType = response.headers.get('content-type');
        let result;
        if (contentType && contentType.includes('application/json')) {
          result = await response.json();
        } else {
          result = await response.text();
        }
        console.log('User registered:', result);
        setIsRegistered(true); 
      } else {
        console.error('Registration failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="Sesion">
      {isRegistered ? (
        <div className="Mensaje_Exito">Usuario registrado exitosamente!</div>
      ) : (
        <>
          <div className="Titulo_Sesion">Registrarse</div>
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
              type="text"
              className="Texto_sesion"
              placeholder="Usuario"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
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
            <button type="submit" className="Boton_sesion">Registrarse</button>
          </form>
        </>
      )}
    </div>
  );
}

export default Register;
