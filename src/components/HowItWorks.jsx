import React, { useState } from 'react';
import '../styles/how-it-works.css';
import { FaCheckCircle, FaRocket, FaHandsHelping, FaCog } from 'react-icons/fa';

const faqs = [
  {
    label: 'FAQ',
    question: 'Como posso redefinir minha senha?',
    answer:
      'Para redefinir sua senha, clique em “Esqueci minha senha” na página de login e siga as instruções fornecidas.',
  },
  {
    label: 'FAQ',
    question: 'Como editar meu perfil?',
    answer:
      'Vá em Configurações > Perfil e ajuste suas informações pessoais conforme desejar.',
  },
  {
    label: 'FAQ',
    question: 'Posso cancelar minha assinatura?',
    answer:
      'Sim — basta ir em Assinatura e clicar em Cancelar. Você continuará com acesso até o fim do período já pago.',
  },
];

function HowItWorks() {
  const [faqIndex, setFaqIndex] = useState(0);

  const nextFaq = () => {
    setFaqIndex((i) => (i + 1) % faqs.length);
  };

  const { label, question, answer } = faqs[faqIndex];

  return (
    <div className="process-steps">
      <div className="steps-container">
        <h2>Como Funciona</h2>
        <p className="step-intro">
          O nosso processo é simples, direto e projetado para garantir que você
          tenha total controle em cada etapa do projeto. Acompanhe o passo a
          passo de como transformamos suas ideias em realidade:
        </p>

        <div className="timeline-container">
          {/* ... seus elementos de timeline aqui ... */}
          <div className="timeline-element">
            <div className="timeline-point" />
            <div className="timeline-text">
              <h3>Briefing Rápido</h3>
              <p>
                Começamos com uma conversa descontraída, onde buscamos entender
                as suas necessidades e objetivos. Aqui, nós alinhamos o que é
                mais importante para o seu projeto.
              </p>
              <FaCheckCircle className="action-icon" />
            </div>
          </div>
          <div className="timeline-element">
            <div className="timeline-point" />
            <div className="timeline-text">
              <h3>Protótipo Inicial</h3>
              <p>
                Com base no briefing, criamos um protótipo inicial para que você
                possa visualizar o design e interagir com ele. É a chance de
                ajustar os detalhes antes da versão final.
              </p>
              <FaRocket className="action-icon" />
            </div>
          </div>
          <div className="timeline-element">
            <div className="timeline-point" />
            <div className="timeline-text">
              <h3>Entrega do Projeto</h3>
              <p>
                Após a aprovação do protótipo, entregamos o projeto final, com
                todos os recursos testados e funcionando perfeitamente, pronto
                para ser utilizado.
              </p>
              <FaCog className="action-icon" />
            </div>
          </div>
          <div className="timeline-element">
            <div className="timeline-point" />
            <div className="timeline-text">
              <h3>Suporte Contínuo</h3>
              <p>
                Nosso trabalho não termina na entrega. Oferecemos suporte
                contínuo para garantir que tudo funcione bem, além de estarmos
                à disposição para qualquer ajuste ou melhoria futura.
              </p>
              <FaHandsHelping className="action-icon" />
            </div>
          </div>
        </div>

        {/* Wrapper branco com blobs e cards */}
        {/* <div className="creative-showcase-wrapper">
          <div className="inner-blob" />
          <div className="inner-blob" />

          <div className="creative-showcase-container">
            <div className="faq-item">
              <div className="creative-label">{label}</div>
              <h3 className="faq-question">{question}</h3>
              <p className="faq-answer">{answer}</p>
              <div className="card-link" onClick={nextFaq} role="button" tabIndex={0}>
                →
              </div>
            </div>

            <div className="faq-item">
              <div className="creative-label">O QUE FAZEMOS</div>
              <h3 className="faq-question">Onde criatividade encontra produtividade</h3>
              <p className="faq-answer">
                Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                Pellentesque ornare sem lacinia quam venenatis.
              </p>
              <button className="creative-cta-button">
                <span>&rarr;</span>
              </button>
            </div>
          </div>
        </div> */}
      </div>

      <div className="floating-blob" /> {/* Blob ondulado principal */}
      <div className="floating-blob-two" /> {/* Blob adicional */}
    </div>
  );
}

export default HowItWorks;
