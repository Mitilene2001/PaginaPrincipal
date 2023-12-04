import React from 'react';
import { Row, Col } from 'antd';
import '../components/Servicios';
import '../Styles/ServiciosFacial.css';

// Importa las imágenes con rutas válidas
import Prom1 from '../assets/Iconos/Imagenes/Prom1.jpg';
import Prom2 from '../assets/Iconos/Imagenes/prom2.jpg';
import Prom3 from '../assets/Iconos/Imagenes/prom3.jpg';
import Prom4 from '../assets/Iconos/Imagenes/prom4.jpg';
import Prom5 from '../assets/Iconos/Imagenes/prom5.jpg';
import Prom6 from '../assets/Iconos/Imagenes/prom6.jpg';

function ServiciosBelleza() {

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
  }

  const imageStyles = {
    width: '200px',
    height: 'auto',
    margin: '30px 40px',
  };

  const descriptions = [
    "Maquillaje",
    "Peinado",
    "Manicura",
    "Pestañas",
  ];

  const titles = ['Belleza'];

  const promocionImages = [
    Prom1, Prom2, Prom3, Prom4, Prom5, Prom6,
    Prom1, Prom2, Prom3, Prom4, Prom5, Prom6,
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
    <div sectionStyle>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex}>
          <h3 style={{ textAlign: 'center', fontSize:'30px' }}>{row.title}</h3>
          <Row justify="center">
            {row.images.map((image, index) => (
              <Col key={index}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src={image} alt={`Promoción ${index + 1}`} style={imageStyles} />
                  <p>{row.descriptions[index]}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
}

export default ServiciosBelleza;
