import React from 'react';
import '../styles/services.css';

function Services() {
  return (
    <div className="services">
      <h2 className="services-title">O que oferecemos</h2>
      <p className="services-subtitle">Soluções digitais que transformam ideias em resultados.</p>

      <div className="container-services-blocks">

        <div className="block-service">
          <div className="icon-service">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16v16H4z" />
              <path d="M4 9h16" />
              <path d="M9 4v16" />
            </svg>
          </div>
          <h3>Landing Pages Personalizadas</h3>
          <p>
            Desenvolvemos landing pages sob medida com foco total em conversão. Com design moderno, responsivo e otimizado para performance, 
            essas páginas são ideais para campanhas de marketing, lançamentos de produtos ou captura de leads.
          </p>
        </div>

        <div className="block-service">
          <div className="icon-service">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
          <h3>Sistemas Sob Medida</h3>
          <p>
            Automatize seus processos e otimize a gestão com sistemas feitos exatamente para o seu contexto. Criamos aplicações web personalizadas,
            garantindo mais eficiência, controle e segurança.
          </p>
        </div>

        <div className="block-service">
          <div className="icon-service">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 19l-1 4 4-1 9-9-3-3L5 19z" />
              <path d="M15 6l3 3" />
              <path d="M18 3a2.828 2.828 0 1 1 4 4l-1 1-4-4 1-1z" />
            </svg>
          </div>
          <h3>Micro SaaS e MVPs</h3>
          <p>
            Ideal para lançar um novo produto digital com agilidade. Desenvolvemos MVPs e Micro SaaS completos, com foco em validar sua ideia no mercado real.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Services;
