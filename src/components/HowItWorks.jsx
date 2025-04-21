import React from 'react';
import '../styles/how-it-works.css';

function HowItWorks() {
  return (
    <div className="how-it-works">
      <div className="container-how-it-works">
        <h2>Como Funciona</h2>
        <p className="intro-text">
          O nosso processo é simples, direto e projetado para garantir que você tenha total controle em cada etapa do projeto. Acompanhe o passo a passo de como transformamos suas ideias em realidade:
        </p>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>Briefing Rápido</h3>
              <p>Começamos com uma conversa descontraída, onde buscamos entender as suas necessidades e objetivos. Aqui, nós alinhamos o que é mais importante para o seu projeto.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>Protótipo Inicial</h3>
              <p>Com base no briefing, criamos um protótipo inicial para que você possa visualizar o design e interagir com ele. É a chance de ajustar os detalhes antes da versão final.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>Entrega do Projeto</h3>
              <p>Após a aprovação do protótipo, entregamos o projeto final, com todos os recursos testados e funcionando perfeitamente, pronto para ser utilizado.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>Suporte Contínuo</h3>
              <p>Nosso trabalho não termina na entrega. Oferecemos suporte contínuo para garantir que tudo funcione bem, além de estarmos à disposição para qualquer ajuste ou melhoria futura.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
