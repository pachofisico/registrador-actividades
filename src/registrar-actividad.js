
import './App.css';
import Navigation from './components/navigation';
import Header from './components/header';
import Login from './components/login';
import Register from './components/registrar';
import Footer from './components/footer';
import RegistradorDeActividades from './registrador-de-actividades';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function RegistrarActividad() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Header></Header>
      <RegistradorDeActividades></RegistradorDeActividades>
      <Footer></Footer>
      
    </div>
  );
}

export default RegistrarActividad;

