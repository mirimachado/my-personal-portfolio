import React, { useState } from 'react';
import '../styles/scope-example.css';



function ScopeExample() {
    return (
      <div className="project-section">
        <div className="phone-container">
          <div className="phone-frame">
            <div className="phone-screen">
              {/* Conteúdo do celular */}
              <img src="public/phone-img.jpeg" alt="App screenshot" className="phone-content" />
            </div>
          </div>
        </div>
        
        <div className="project-info">
          <h2 className="project-title">Project scope</h2>
          <p className="project-description">
            Com o mercado de TI em alta, nossa empresa escolheu <strong>otimizar seu processo de desenvolvimento</strong> e entrega de software.
          </p>
          <p className="project-details">
            Isso foi possível ao expandir nossas capacidades tecnológicas com o apoio da Premiersoft - especializada em soluções de tecnologia e projetos personalizados.
          </p>
          
          <div className="project-highlights">
            <h3>HIGHLIGHTS</h3>
            
            <div className="highlight-item">
              <h4>Planejamento</h4>
              <p>Criação de um roadmap identificando recursos essenciais para cada perfil de entrega.</p>
            </div>
            
            <div className="highlight-item">
              <h4>Otimização</h4>
              <p>Impacto direto na otimização de processos e desenvolvimento de software para atender às necessidades do mercado.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  

export default ScopeExample;
