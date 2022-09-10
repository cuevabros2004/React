import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LaMary from './components/LaMary';
import Contacto from './components/Contacto';
import Fotos from './components/Fotos';
import Ubicacion from './components/Ubicacion';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App(props) {
  //Edit <code>src/App.js</code> and save to reload.
  let mensaje = 'Bienvenido a Quinta "La Mary" - RUTA 14 KM 257 ';
  
  return (
     <>
     <BrowserRouter>
     <div className="App">
      <header className="App-header"> 
         <NavBar></NavBar>  
      </header>

      <Routes>
          <Route exact path="/" element={<ItemListContainer/>}/>
          <Route exact path="/LaMary" element={<LaMary/>}/>
          <Route exact path="/Fotos" element={<Fotos/>}/>
          <Route exact path="/Ubicacion" element={<Ubicacion/>}/>
          <Route exact path="/Contacto" element={<Contacto/>}/>
          <Route exact path="/Item/:Slug" element={<ItemDetailContainer/>}/>
          <Route exact path="/Category/:categoryId" element={<ItemListContainer/>}/>
      </Routes>


     <Footer/>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
