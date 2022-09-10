import '../App.css';
import CartWidget from "./CartWidget"
import logo from '../logo.png';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';


const NavBar = () => {
    
  return (
    
    <main>  
 
          <div className="container-fluid ">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <nav className="navbar navbar-expand-lg navbar-light ">

                    <ul>
                      <Link to="/">
                        <img src={logo} className="App-logo bg-cover mr-10" alt="logo" />
                      </Link>
                    </ul>
                    
                    <ul><Link className="linksNavBar font-sans md:Oswald text-gray-600 ml-8" to='/LaMary'>La Mary</Link></ul>
                    <ul><Link className="linksNavBar font-sans md:Oswald text-gray-600 ml-8" to="/">Servicios</Link></ul>
                    <ul><Link className="linksNavBar font-sans md:Oswald text-gray-600 ml-8" to="/category/Eventos">Eventos</Link></ul>
                    <ul><Link className="linksNavBar font-sans md:Oswald text-gray-600 ml-8" to="/category/CasaQuinta">Casa Quinta</Link></ul>
                    <ul><Link className="linksNavBar font-sans md:Oswald text-gray-600 ml-8" to="/Fotos">Fotos</Link></ul>
                    <ul><Link className="linksNavBar font-sans md:Oswald text-gray-600 ml-8" to="/Ubicacion">Ubicación</Link></ul>
                    <ul><Link className="linksNavBar font-sans md:Oswald text-gray-600 ml-8" to="/Contacto">Contacto</Link></ul>
                    <ul><CartWidget/></ul>

              <form className="d-flex">
              </form>
              </nav>
              <div className="font-sans md:Oswald text-gray-600 text-base text-center mb-2 inline-block">
                  <p>Ruta 14 KM 257 - Concordia - Entre Ríos</p>
                  <a className="inline-block mt-3" href="https://www.facebook.com/QuintaLaMary/"><FaFacebook/></a>
                  <a className="inline-block ml-3" href="https://www.instagram.com/quintalamary2018/"><FaInstagram/></a>
                  <a className="inline-block ml-3" href="mailto:cuevabros@yahoo.com"><MdEmail/></a>                  
              </div>
          </div>
        

      </main>

    
  )
}
export default NavBar