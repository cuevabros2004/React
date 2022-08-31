import Saludo from './components/Saludo';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';


function App(props) {
  //Edit <code>src/App.js</code> and save to reload.
  let mensaje = 'Bienvenido a Quinta "La Mary" - RUTA 14 KM 257 ';
  
  return (

     <div className="App">
      <header className="App-header"> 
         <NavBar></NavBar>  
      </header>

      <main className="App-main"> 
      <br></br>  
          <ItemListContainer/>
     </main>

    </div>
    
  );
}

export default App;
