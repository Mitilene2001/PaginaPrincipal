import React from "react";
import { Row, Col } from "antd";
import direccionIcon from "../assets/Iconos/icons8-maps.svg";
import horarioIcon from "../assets/Iconos/icons8-hora.svg";
import telefonoIcon from "../assets/Iconos/call_FILL0_wght400_GRAD0_opsz24.svg";
import facebookIcon from "../assets/Iconos/icons8-facebook.svg";

const Ubicación = () => {
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const contentStyle = {
    position: "absolute",
    top: "50%", // Centra verticalmente
    left: "50%", // Centra horizontalmente
    transform: "translate(-50%, -50%)", // Centra el contenido en el centro del contenedor
    background: "rgba(255, 255, 255, 0.5)",
    padding: "20px", // Aumenta el padding horizontal para hacerlo más ancho
    borderRadius: "50px", // Borde redondeado
    textAlign: "center", // Alinea el texto al centro
    whiteSpace: "nowrap", // Evita el salto de línea
    overflow: "hidden", // Evita el desbordamiento del texto
  };

  return (
    <Row gutter={20} justify="center" align="middle">
      <Col xs={24} sm={12}>
        <div style={{ width: "100%", height: "650px", position: "relative" }}>
          <img src="Contacto.png" alt="Hand with flower" style={imageStyle} />
          <div style={contentStyle}>
            <p
              style={{ fontSize: "24px", color: "#6392BF", fontWeight: "bold" }}
            >
              Visítanos en:
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center", // Alinea horizontalmente al centro
                marginBottom: "10px",
              }}
            >
              <img
                src={facebookIcon}
                alt="Facebook"
                style={{ width: "42px", marginRight: "10px", color: "#3495DD" }}
              />
              <a
                href="https://www.facebook.com/Clinicadebellezalily"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <h1 style={{ color: "#3495DD" }}>Clínica de belleza Lily</h1>
              </a>
            </div>
          </div>
        </div>
      </Col>
      <Col xs={24} sm={12}>
        <div>
          <p style={{ fontSize: "24px", fontWeight: "bold", color: "#6392BF" }}>
            Información general
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <img
              src={direccionIcon}
              alt="Ubicación"
              style={{ width: "24px", marginRight: "10px" }}
            />
            <p>
              Thomas Alva Edison 335, Col. Electricistas, Morelia, Michoacán,
              Morelia, Mexico, 58290
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <img
              src={horarioIcon}
              alt="Horario"
              style={{ width: "24px", marginRight: "10px" }}
            />
            <p>Lunes a Sábado 8:00 am - 2:00 pm</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={telefonoIcon}
              alt="Teléfono"
              style={{ width: "24px", marginRight: "10px" }}
            />
            <p>Tel: (443) 587 6057</p>
          </div>
          <iframe
  width="100%"
  height="300"
  frameBorder="0"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.641126398075!2d-101.18014682599438!3d19.685310332564306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d0de5cb12b165%3A0x8739a8d512335c89!2sThomas%20Alva%20Edison%20335%2C%20Electricistas%2C%2058290%20Morelia%2C%20Mich.!5e0!3m2!1ses-419!2smx!4v1700110081836!5m2!1ses-419!2smx"
  width="720"
  height="300"
  style={{ border: "0" }}
  allowFullScreen
  title="Mapa de Clínica de belleza Lily"
></iframe>;
                  </div>
      </Col>
    </Row>
  );
};

export default Ubicación;
