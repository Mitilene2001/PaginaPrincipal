import React from 'react';
import { Row, Col } from 'antd';

// Importa las imágenes con rutas válidas
import Prom1 from '../assets/Iconos/Imagenes/Prom1.jpg';
import Prom2 from '../assets/Iconos/Imagenes/prom2.jpg';
import Prom3 from '../assets/Iconos/Imagenes/prom3.jpg';
import Prom4 from '../assets/Iconos/Imagenes/prom4.jpg';
import Prom5 from '../assets/Iconos/Imagenes/prom5.jpg';
import Prom6 from '../assets/Iconos/Imagenes/prom6.jpg';

function Promociones() {
    const imageStyles = {
      width: '350px', // Establece un tamaño fijo para todas las imágenes
      height: 'auto', // Ajusta la altura automáticamente para mantener la proporción
      margin: '10px', // Añade un pequeño espacio entre las imágenes
    };

    const PromStyles = {
      height: 'auto', // Ajusta la altura automáticamente para mantener la proporción
      margin: '10px', // Añade un pequeño espacio entre las imágenes
    };

  const promocionImages = [
    Prom6,
    Prom2,
    Prom3,
    Prom4,
    Prom5,
    Prom6,
  ];

  return (
    <div>
      <h2 style={{  textAlign: 'center',
  fontSize: 40,
  color: '#ffff',
  backgroundColor: '#6392bf',
  padding: '10px',  // Ajusta el relleno según tus preferencias
  borderRadius: '8px'}}>Promociones</h2>
      <Row gutter={[16, 16]} justify="center">
        {promocionImages.map((image, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6} xl={7}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={image} alt={`Promoción ${index + 1}`} style={imageStyles} />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Promociones;
