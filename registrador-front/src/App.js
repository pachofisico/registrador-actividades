
import './App.css';
import Home from './home';
import RegistrarActividad from './registrar-actividad'
import PaginaListarActividades from './pag-actividades'; 
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/registrar-actividad' element={<RegistrarActividad />} />
            <Route path='/listar-actividades' element={<PaginaListarActividades />} />

            
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;

