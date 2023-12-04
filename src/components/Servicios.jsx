import React from "react";
import { Row, Col } from "antd";
import '../Styles/Servicios.css'
import { Link } from "react-router-dom";

import anl from "../assets/Iconos/Imagenes/anl.jpg";
import bbglow from "../assets/Iconos/Imagenes/bbglow.jpg";
import botox from "../assets/Iconos/Imagenes/botox.jpg";
import dermapen from "../assets/Iconos/Imagenes/dermapen.jpg";

import carboxi from "../assets/Iconos/Imagenes/carboxi.jpg";
import desintoxicar from "../assets/Iconos/Imagenes/desintoxicar.jpg";
import eliminacion from "../assets/Iconos/Imagenes/eliminacion.jpg";
import radio from "../assets/Iconos/Imagenes/radio.jpg";

import maquillaje from "../assets/Iconos/Imagenes/maquillaje.jpg";
import peinado from "../assets/Iconos/Imagenes/peinado.jpg";
import manicura from "../assets/Iconos/Imagenes/manicura.jpg";
import pestañas from "../assets/Iconos/Imagenes/pestañas.jpg";

function Servicios() {
  const imageStyles = {
    width: "200px",
    height: "200px",
    margin: "30px 40px",
  };
  
  const titleStyles = {
    textAlign: "center",
    fontSize: 30, // Cambia el tamaño del título según tus preferencias
  };

  const descriptions = [
    'Ácido Labios, nariz y nazogenianos',
    'BB Glow',
    'Bótox',
    'Dermapen',
    "Carboxiterapia",
    "Desintoxicación lónica",
    "Eliminación tatuajes, verrugas y lunares",
    "EMSzero radiofrecuencia",
    "Maquillaje",
    "Peinado",
    "Manicura",
    "Pestañas",
  ];

  const titles = ["Facial", "Corporal", "Belleza"];

  
  const promocionImages = [
    anl,
    bbglow,
    botox,
    dermapen,
    carboxi,
    desintoxicar,
    eliminacion,
    radio,
    maquillaje,
    peinado,
    manicura,
    pestañas,
  ];

  const groupSize = 4;
  const rows = [];
  for (let i = 0; i < promocionImages.length; i += groupSize) {
    const rowImages = promocionImages.slice(i, i + groupSize);
    const rowDescriptions = descriptions.slice(i, i + groupSize);
    const title = titles[i / groupSize];
    rows.push({ title, images: rowImages, descriptions: rowDescriptions });
  }

  return (
    <div>
      <h2 style={{ textAlign: 'center',
  fontSize: 40,
  color: '#ffff',
  backgroundColor: '#6392bf',
  padding: '10px',  // Ajusta el relleno según tus preferencias
  borderRadius: '8px'}}>Servicios</h2>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex}>
        <h3 style={titleStyles}>{row.title}</h3>
          <Row justify="center">
            {row.images.map((image, index) => (
              <Col key={index}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={image}
                    alt={`Promoción ${index + 1}`}
                    style={imageStyles}
                  />
                  <p>{row.descriptions[index]}</p>
                </div>
              </Col>
            ))}
          </Row>
          <div className="container-ver-mas">
            {rowIndex === 0 && <Link to="/ServiciosFacial">Ver más</Link>}
            {rowIndex === 1 && <Link to="/ServiciosCorporal">Ver más</Link>}
            {rowIndex === 2 && <Link to="/ServiciosBelleza">Ver más</Link>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Servicios;
