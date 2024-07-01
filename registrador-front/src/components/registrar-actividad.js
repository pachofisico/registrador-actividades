import '../App.css';
import Navigation from './navigation';
import Header from './header';
import Footer from './footer';
import RegistradorDeActividades from '../registrador-de-actividades';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function RegistrarActividad() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <RegistradorDeActividades />
      <Footer />
    </div>
  );
}

export default RegistrarActividad;
