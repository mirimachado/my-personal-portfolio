// src/pages/About.jsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/about-module.css";
import { Plane, Gem, Users } from "lucide-react";
import ProfilePic from "/woman.png";

function About() {
  return (
    <div>
      <Header />

      {/* Hero com shapes e texto destacado */}
      <section className="about-hero">
        <div className="about-shapes"></div>
        <div className="about-content">
          <div className="about-text">
            <h1>Sobre</h1>
            <div className="divider"></div>
            <p>
              Serviços focados em desenvolvimento de <span className="highlight">MVPs</span>, <span className="highlight">landing pages</span> e soluções sob medida.
            </p>
            <p>
              Combinando <span className="highlight">qualidade</span>, <span className="highlight">agilidade</span> e foco em <span className="highlight">UX</span>, cada projeto é conduzido de forma colaborativa — da ideia à entrega final.
            </p>
          </div>

          {/* Blob + foto */}
          <div className="about-image">
           
            <img
              src={ProfilePic}
              alt="Perfil"
              className="blob-photo"
            />
          </div>
        </div>
      </section>

      {/* Valores / serviços */}
<section className="about-cards-header">
  <h2 className="cards-title">Nossos Diferenciais</h2>
  <p className="cards-subtitle">O que torna nossos serviços únicos: agilidade, qualidade e experiência voltada ao sucesso do seu projeto</p>
  </section>

<section className="about-cards">
  {/* ...cards existentes */}
</section>


      {/* Valores / serviços */}
      <section className="about-cards">
        <div className="card">
          <div className="card-icon"><Plane size={40} /></div>
          <h3>Entrega Rápida</h3>
          <ul>
            <li>Protótipos em 48h</li>
            <li>Feedback contínuo</li>
          </ul>
        </div>
        <div className="card">
          <div className="card-icon"><Gem size={40} /></div>
          <h3>Qualidade Premium</h3>
          <ul>
            <li>Código limpo</li>
            <li>Design impecável</li>
          </ul>
        </div>
        <div className="card">
          <div className="card-icon"><Users size={40} /></div>
          <h3>Parceria Próxima</h3>
          <ul>
            <li>Comunicação constante</li>
            <li>Alinhamento estratégico</li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
