import React from 'react';
import '../styles/header.css';

function Header() {
  return (
    
    <header className="header">
      <div className="container">
        <p className='f-title-home'>Bem-vindo ao Meu Serviço</p>
        <nav className="nav">
          <a href="#service">Serviços</a>
          <a href="#about">Sobre</a>
          <a href="#contact">Contato</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
