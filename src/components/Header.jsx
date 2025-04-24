import React, { useState } from 'react';
import '../styles/header.css';
import logo from '../assets/icons/medium.png'; // substitua pelo caminho correto da sua logo
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="branding">
          <img src={logo} alt="Logo" className="logo" />
          <div className="brand-text">
            <p className="f-title-home">Bem-vindo ao Meu Serviço</p>
            <p className="f-subtitle">Soluções Tecnológicas</p>
          </div>
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <svg viewBox="0 0 100 80" width="30" height="30" fill="white">
              <rect width="100" height="10" />
              <rect y="30" width="100" height="10" />
              <rect y="60" width="100" height="10" />
            </svg>
          </button>
        </div>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
      
            <Link to="/" className="mx-4 text-gray-700 hover:underline">Início</Link>
            <a href="#service">Serviços</a>
            <Link to="/about" className="mx-4 text-gray-700 hover:underline">Sobre</Link>
            <Link to="/contact" className="mx-4 text-gray-700 hover:underline">Contato</Link>
            <a href="#blog">Blog</a>

        </nav>
      </div>
    </header>
  );
}

export default Header;
