import React from 'react';
import Fondo3 from '../assets/Iconos/Imagenes/fondo3.jpg';
import facebookIcon from "../assets/Iconos/icons8-facebook.svg";
import instaIcon from "../assets/Iconos/icons8-instagram.svg";
import WhatsIcon from '../assets/Iconos/icons8-whatsapp.svg'
import Logo from '../assets/Iconos/Imagenes/logo.jpg';

function Contacto() {
  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '110%',
    height: '110vh', // Usa '100vh' para hacer que la sección ocupe el 100% de la altura de la pantalla
    textAlign: 'center',
    backgroundImage: `url(${Fondo3})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover', // Ajusta para que la imagen cubra completamente el fondo
  };
  

  const textContainerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: '1% 5%', // Ajusta el espaciado interno
    borderRadius: '60px', // Ajusta el radio de borde
    margin: '10px', // Ajusta el margen exterior
  };

  const linkStyle = {
    fontSize: '24px',
    color: '#3495DD',
    textDecoration: 'none',
  };
 
  const iconStyle = {
    width: "42px",
    marginRight: "10px",
    color: "#3495DD",
  };

  const textStyle = {
    fontSize: '30px',
    color: '#6392BF',
  };

  const iconLinkContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const hrStyle = {
    width: '60%',
    borderTop: '1px solid #3495DD',
    margin: '10px auto',
  };

  const logoStyle = {
    paddingTop: '-19.92%',
    width: '150px',
    marginTop: '',
  };

  return (
    <section id="contact" style={sectionStyle}>
      <div className="container" style={textContainerStyle}>
        <img src={Logo} alt="Logo" style={logoStyle} />
        <h2 style={textStyle}>AGENDA TU CITA</h2>
        <div style={iconLinkContainerStyle}>
        <p style={linkStyle}>
          <img
            src={WhatsIcon}
            alt="Whats"
            style={iconStyle}
          />
          Comunícate a WhatsApp:{" "}
          <a
            href="https://wa.me/4435876057"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            (443) 587 6057
          </a>
          </p>

         </div>


        <hr style={hrStyle} />
        <p style={textStyle}>Visita nuestras redes sociales</p>
        <div style={iconLinkContainerStyle}>
          <img
            src={instaIcon}
            alt="Instagram"
            style={iconStyle}
          />
          <a
            href="https://www.instagram.com/clinica_de_belleza_lily"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            clinica_de_belleza_lily
          </a>
        </div>
        <br />
        <div style={iconLinkContainerStyle}>
          <img
            src={facebookIcon}
            alt="Facebook"
            style={iconStyle}
          />
          <a
            href="https://www.facebook.com/Clinicadebellezalily"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            Clínica de belleza lily.
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contacto;