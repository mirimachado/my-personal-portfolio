import React from 'react';
import '../styles/how-it-works.css';
import { FaCheckCircle, FaRocket, FaHandsHelping, FaCog } from 'react-icons/fa'; // Mudança para ícones diferentes

function HowItWorks() {
  return (
    <div className="process-steps">
      <div className="steps-container">
        <h2>Como Funciona</h2>
        <p className="step-intro">
          O nosso processo é simples, direto e projetado para garantir que você tenha total controle em cada etapa do projeto. Acompanhe o passo a passo de como transformamos suas ideias em realidade:
        </p>

        <div className="timeline-container">
          <div className="timeline-element">
            <div className="timeline-point" />
            <div className="timeline-text">
              <h3>Briefing Rápido</h3>
              <p>Começamos com uma conversa descontraída, onde buscamos entender as suas necessidades e objetivos. Aqui, nós alinhamos o que é mais importante para o seu projeto.</p>
              <FaCheckCircle className="action-icon" />
            </div>
          </div>

          <div className="timeline-element">
            <div className="timeline-point" />
            <div className="timeline-text">
              <h3>Protótipo Inicial</h3>
              <p>Com base no briefing, criamos um protótipo inicial para que você possa visualizar o design e interagir com ele. É a chance de ajustar os detalhes antes da versão final.</p>
              <FaRocket className="action-icon" />
            </div>
          </div>

          <div className="timeline-element">
            <div className="timeline-point" />
            <div className="timeline-text">
              <h3>Entrega do Projeto</h3>
              <p>Após a aprovação do protótipo, entregamos o projeto final, com todos os recursos testados e funcionando perfeitamente, pronto para ser utilizado.</p>
              <FaCog className="action-icon" />
            </div>
          </div>

          <div className="timeline-element">
            <div className="timeline-point" />
            <div className="timeline-text">
              <h3>Suporte Contínuo</h3>
              <p>Nosso trabalho não termina na entrega. Oferecemos suporte contínuo para garantir que tudo funcione bem, além de estarmos à disposição para qualquer ajuste ou melhoria futura.</p>
              <FaHandsHelping className="action-icon" />
            </div>
          </div>
        </div>




        <div className="creative-showcase-container">
  {/* <div className="creative-left"> */}
    {/* <div className="main-person-image"> */}
      {/* <img src="/public/back.png" alt="Person thinking" /> */}
      
      {/* <img src="/images/element-1.png" alt="UI card 1" className="floating-card card-1" />
      <img src="/images/element-2.png" alt="UI card 2" className="floating-card card-2" />
      <img src="/images/element-3.png" alt="UI chart" className="floating-card card-3" /> */}
    {/* </div> */}
  {/* </div> */}

  <div className="creative-right">
    <span className="creative-label">WHAT WE DO</span>
    <h2 className="creative-title">Where creativity meets productivity</h2>
    <p className="creative-description">
      Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.
    </p>
    <button className="creative-cta-button">
      <span>&rarr;</span>
    </button>
  </div>

  <div className="creative-right">
    <span className="creative-label">WHAT WE DO</span>
    <h2 className="creative-title">Where creativity meets productivity</h2>
    <p className="creative-description">
      Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.
    </p>
    <button className="creative-cta-button">
      <span>&rarr;</span>
    </button>
  </div>
</div>






      </div>
      <div className="floating-blob"></div> {/* Blob ondulado principal */}
      <div className="floating-blob-two"></div> {/* Blob adicional */}
    </div>
  );
}

export default HowItWorks;
