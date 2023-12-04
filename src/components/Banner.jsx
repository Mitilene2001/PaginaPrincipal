import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';  // Importa el componente Link desde React Router

export default function Banner() {
  const images = [
    { src: 'banner.jpg', alt: 'Imagen 1' },
    { src: 'banner5.png', alt: 'Imagen 2' },
    { src: 'CARR.jpg', alt: 'Imagen 3' },
  ];

  const bannerStyle = {
    width: '100%',
    height: '100vh',
    position: 'relative', // Añadido para manejar el posicionamiento del botón

  };

  const imageStyle = {
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
  };

  return (
    <div style={bannerStyle}>
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} style={imageStyle} />
            <Link to="/contacto">
              <button className="agendar-cita-button">AGENDA TU CITA AQUÍ</button>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
