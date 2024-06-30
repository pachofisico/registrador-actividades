
import './App.css';
import Navigation from './components/navigation';
import Header from './components/header';
import Footer from './components/footer';
import ListadorDeActividades from './components/listador-de-actividades'; 


function PaginaListarActividades() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Header></Header>
      <ListadorDeActividades></ListadorDeActividades>
      <Footer></Footer>
      
    </div>
  );
}

export default PaginaListarActividades;

