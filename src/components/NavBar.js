import '../App.css';
import CartWidget from "./CartWidget"
import logo from '../logo.png';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const NavBar = () => {
    
  return (
    
    <main>  
 
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <nav className="navbar navbar-expand-lg navbar-light">

                    <ul><img src={logo} className="App-logo bg-cover mr-10" alt="logo" /></ul>
                    
                    <ul><a className="linksNavBar font-sans md:Oswald text-gray-600 ml-8" href="">La Mary</a></ul>
                    <ul><a className="linksNavBar font-sans md:Oswald text-gray-600 ml-8" href="">Servicios</a></ul>
                    <ul><a className="linksNavBar font-sans md:Oswald text-gray-600 ml-8" href="">Fotos</a></ul>
                    <ul><a className="linksNavBar font-sans md:Oswald text-gray-600 ml-8" href="">Ubicación</a></ul>
                    <ul><a className="linksNavBar font-sans md:Oswald text-gray-600 ml-8" href="">Contacto</a></ul>
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