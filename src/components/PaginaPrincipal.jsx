import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner from "./Banner";
import Promociones from "./Promociones";
import Servicios from "./Servicios";
import Contacto from "./Contacto";
import Ubicacion from "./Ubicación";
import SobreNosotros from "./SobreNosotros";
import Footer from "./Footer";



// Componente de la página principal
function PaginaPrincipal() {
  return (
    <div>
      <Banner />
      <Promociones />
      <Servicios />
      <Ubicacion />
      <Contacto />
      <Footer />
    </div>
  );
}

export default PaginaPrincipal;
