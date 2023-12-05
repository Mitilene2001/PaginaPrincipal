import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { HomeOutlined, GiftOutlined, AppstoreOutlined, EnvironmentOutlined, PhoneOutlined } from "@ant-design/icons";
import '../Styles/Header.css';
import Logo from "../assets/Iconos/Imagenes/logo.jpg";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const headerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#0FADE9",
    zIndex: 1000,
    padding: "0 0",
  };

  const navLinksStyle = {
    listStyle: "none",
    marginLeft: "0",
    textAlign: "center",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "24px",
  };

  const mobileMenuStyle = {
    display: isMenuOpen ? "block" : "none",
    backgroundColor: "#0FADE9",
    position: "fixed",
    top: "85px",
    left: "0%",
    bottom: "0px",
    width: "100%",
    overflowY: "auto", // Agregando overflowY para permitir el scroll vertical
  };

  const logoStyle = {
    marginLeft: "50px",
    width: "55%",
    borderRadius: "50%",
    overflow: "hidden",
  };

  const linkMarginStyle = {
    marginTop: '60px',
    marginBottom: "60px",
  };

  const iconMarginStyle = {
    marginRight: '10px',
  };

  return (
    <div>
      <nav style={headerStyle} className="navbar">
        <div className="nav-logo">
          <Link to="/" style={{ textDecoration: 'none' }} onClick={closeMenu}>
            <img src={Logo} alt="Logo" style={logoStyle} />
          </Link>
        </div>
        <div style={{ textAlign: 'center', color: 'white', paddingTop: '10px' }}>
        <h1 style={{ fontSize: '30px' }}>Contamos con gran variedad de aparatología.</h1>

        </div>

        {isMenuOpen ? (
          <AiOutlineClose
            size={30}
            className="hamburger-menu"
            style={{ paddingRight: "15px", color: "white" }}
            onClick={closeMenu}
          />
        ) : (
          <GiHamburgerMenu
            size={30}
            className="hamburger-menu"
            style={{ paddingRight: "15px", color: "white" }}
            onClick={toggleMenu}
          />
        )}
        <div style={mobileMenuStyle}>
          <ul style={{ ...navLinksStyle, display: isMenuOpen ? "block" : "none" }} className="nav-links">
            <h1 style={{ color: 'white' }}>Menu</h1>
            <li style={linkMarginStyle}>
              <Link style={linkStyle} to="/" onClick={closeMenu}>
                <HomeOutlined style={iconMarginStyle} /> Inicio
              </Link>
            </li>
            <li style={linkMarginStyle}>
              <Link style={linkStyle} to="/Promociones" onClick={closeMenu}>
                <GiftOutlined style={iconMarginStyle} /> Promociones
              </Link>
            </li>
            <li style={linkMarginStyle}>
              <Link style={linkStyle} to="/Servicios" onClick={closeMenu}>
                <AppstoreOutlined style={iconMarginStyle} /> Servicios
              </Link>
            </li>
            <li style={linkMarginStyle}>
              <Link style={linkStyle} to="/Ubicación" onClick={closeMenu}>
                <EnvironmentOutlined style={iconMarginStyle} /> Ubicación
              </Link>
            </li>
            <li style={linkMarginStyle}>
              <Link style={linkStyle} to="/Contacto" onClick={closeMenu}>
                <PhoneOutlined style={iconMarginStyle} /> Contacto
              </Link>
            </li>
          </ul>
        </div>

      </nav>
    </div>
  );
}
