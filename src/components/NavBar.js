import '../App.css';
import CartWidget from "./CartWidget"
import logo from '../logo.png';
import logoCarrito from '../logoCarrito.png';
//import 'bootstrap/dist/css/bootstrap.css';


const NavBar = () => {
    
  return (
    
    <main>  


          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <nav className="navbar navbar-expand-lg navbar-light">

                    <ul><img src={logo} className="App-logo" alt="logo" /></ul>
                    <ul>Quinta "La Mary"</ul>
                    <ul><a className="dropdown-item" href="">La Mary</a></ul>
                    <ul><a className="dropdown-item" href="">Servicios</a></ul>
                    <ul><a className="dropdown-item" href="">Fotos</a></ul>
                    <ul><a className="dropdown-item" href="">Ubicación</a></ul>
                    <ul><a className="dropdown-item" href="">Contacto</a></ul>
                    <ul><CartWidget/></ul>

              <form className="d-flex">
              </form>
              </nav>
          </div>
        

      </main>

    
  )
}
export default NavBar