const Footer = () =>{

    return (
        <footer class="FooterImagenes text-center text-white" >
        <div class="container p-6">
          <div class="grid lg:grid-cols-6 md:grid-cols-3 gap-4">
            <div class="lg:mb-0 mb-6">
              <img
                src="./imagenes/01SalonNoche.jpg"
                class="w-full rounded-md shadow-lg"
              />
            </div>
            <div class="lg:mb-0 mb-6">
              <img
                src="./imagenes/02Casa.jpg"
                class="w-full rounded-md shadow-lg"
              />
            </div>
            <div class="lg:mb-0 mb-6">
              <img
                src="./imagenes/03Pileta.jpg"
                class="w-full rounded-md shadow-lg"
              />
            </div>
            <div class="lg:mb-0 mb-6">
              <img
                src="./imagenes/04Pileta.jpg"
                class="w-full rounded-md shadow-lg"
              />
            </div>
            <div class="lg:mb-0 mb-6">
              <img
                src="./imagenes/05SalonDia.jpg"
                class="w-full rounded-md shadow-lg"
              />
            </div>
            <div class="lg:mb-0 mb-6">
              <img
                src="./imagenes/06Salon.jpg"
                class="w-full rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
      
        <div class="FooterTexto text-center p-4" >        
          <a class="text-black" href="https://tailwind-elements.com/">© 2022 Copyright: Quinta "La Mary"</a>
        </div>
      </footer>
    )
}

export default Footer