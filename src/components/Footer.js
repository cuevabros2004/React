const Footer = () =>{

    return (
        <footer className="FooterImagenes text-center text-white" >
        <div className="container p-6">
          <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-4">
            <div className="lg:mb-0 mb-6">
              <img
                src="../imagenes/01SalonNoche.jpg"
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="lg:mb-0 mb-6">
              <img
                src="../imagenes/02Casa.jpg"
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="lg:mb-0 mb-6">
              <img
                src="../imagenes/03Pileta.jpg"
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="lg:mb-0 mb-6">
              <img
                src="../imagenes/04Pileta.jpg"
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="lg:mb-0 mb-6">
              <img
                src="../imagenes/05SalonDia.jpg"
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div className="lg:mb-0 mb-6">
              <img
                src="../imagenes/06Salon.jpg"
                className="w-full rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
      
        <div className="FooterTexto text-center p-4" >        
          <a className="text-black" href="https://tailwind-elements.com/">© 2022 Copyright: Quinta "La Mary"</a>
        </div>
      </footer>
    )
}

export default Footer