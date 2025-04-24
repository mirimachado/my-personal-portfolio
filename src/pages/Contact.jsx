import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/contact-module.css";

function Contact() {
  return (
    <div>
      <Header />
       {/* Nova seção visual inspirada no template */}
       <section className="contact-highlight">
        <div className="highlight-content">
          <div className="highlight-text">
            <h2>Junte-se a milhares de pessoas conectadas</h2>
            <p>Envie sua mensagem e comece a transformar ideias em ação.</p>

<button className="cta-submit">
  <span>Fale com a gente</span>
  <span className="icon-circle">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
</button>          </div>
          <div className="highlight-shapes"></div>
        </div>
      </section>
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Entre em contato</h1>
          <p>Nos envie uma mensagem ou fale com a gente pelas redes sociais.</p>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-form-wrapper">
          <form className="contact-form">
          <div className="field-with-icon">
              <svg
                className="field-icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A13.937 13.937 0 0112 15c2.262 0 4.392.518 6.251 1.442M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <input type="text" placeholder="Nome completo" required />
            </div>

            <div className="field-with-icon">
            <svg
    className="field-icon"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 8H3V8h18v8z"
    />
  </svg>
              <input type="email" placeholder="Seu e-mail" required />
            </div>

            <div className="field-with-icon textarea-with-icon">
              <svg
                className="field-icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16h6"
                />
              </svg>
              <textarea placeholder="Sua mensagem" rows="5" required />
            </div>
          </form>
          <div className="socials-section">
            <p>Também me encontre nas redes:</p>
            <div className="socials-icons">
              <a href="https://instagram.com/seuPerfil" target="_blank" rel="noopener noreferrer">
                <img src="src/assets/icons/instagram.png" alt="Instagram" />
              </a>
              <a href="https://linkedin.com/in/seuPerfil" target="_blank" rel="noopener noreferrer">
                <img src="src/assets/icons/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="https://github.com/seuPerfil" target="_blank" rel="noopener noreferrer">
                <img src="src/assets/icons/github.png" alt="GitHub" />
              </a>
              {/* adicione mais ícones conforme precisar */}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default Contact;
