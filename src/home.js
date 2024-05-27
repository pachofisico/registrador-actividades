
import './App.css';
import Navigation from './components/navigation';
import Header from './components/header';
import Login from './components/login';
import Register from './components/registrar';
import Footer from './components/footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function Home() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Header></Header>
      <Login></Login>
      <Register></Register>
      <Footer></Footer>
      
    </div>
  );
}

export default Home;

