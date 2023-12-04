import React from "react";
import '../Styles/Footer.css'; // Importa tu archivo CSS de estilos
import Logo from '../assets/Iconos/Imagenes/logo.jpg'; // Reemplaza 'ruta/al/logo.png' con la ruta correcta de tu imagen de logo

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <img src={Logo} alt="Logo de la Clínica Lily" className="logo" />
        <p>&copy; {new Date().getFullYear()} Clínica Lily</p>
      </div>
    </div>
  );
}
