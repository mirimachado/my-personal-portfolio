import React from 'react';
import '../styles/hero.css';

function Hero() {
  return (
    <section className="hero-div">
      <div className="hero-blob blob-1"></div>
      <div className="hero-blob blob-2"></div>
       <svg className="blob blob-purple" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#c084fc" d="M50.6,-66.1C65.3,-55.9,76.9,-43.3,78.7,-29.9C80.4,-16.5,72.4,-2.4,66.3,13.7C60.2,29.9,56.1,47.9,44.7,60.7C33.3,73.5,14.6,81.1,-2.4,84.2C-19.4,87.3,-38.9,86,-50.7,75.3C-62.5,64.7,-66.7,44.7,-69.8,26.4C-73,8.2,-75.2,-8.3,-67.6,-19.1C-60.1,-29.9,-42.7,-34.9,-28.5,-44.9C-14.2,-54.9,-3.1,-69.9,10.8,-74.8C24.7,-79.7,49.4,-74.8,50.6,-66.1Z" transform="translate(100 100)" />
</svg>

<svg className="blob blob-pink" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  {/* <path fill="#f472b6" d="M45.8,-60.4C59.7,-50.4,71.7,-38.3,75.3,-24.3C78.9,-10.2,74,5.8,66.4,20.1C58.8,34.4,48.6,47,35.9,55.3C23.2,63.6,8.1,67.6,-8.2,71.5C-24.5,75.3,-42.1,79,-55.4,71.2C-68.6,63.3,-77.4,44,-76.6,26.3C-75.7,8.6,-65.2,-7.5,-56.1,-22.4C-47,-37.2,-39.3,-50.8,-28.4,-61.6C-17.5,-72.4,-3.3,-80.4,10.8,-82.3C25,-84.3,49.6,-80.4,45.8,-60.4Z" transform="translate(100 100)" /> */}
  <path fill="#90f3f3" d="M45.8,-60.4C59.7,-50.4,71.7,-38.3,75.3,-24.3C78.9,-10.2,74,5.8,66.4,20.1C58.8,34.4,48.6,47,35.9,55.3C23.2,63.6,8.1,67.6,-8.2,71.5C-24.5,75.3,-42.1,79,-55.4,71.2C-68.6,63.3,-77.4,44,-76.6,26.3C-75.7,8.6,-65.2,-7.5,-56.1,-22.4C-47,-37.2,-39.3,-50.8,-28.4,-61.6C-17.5,-72.4,-3.3,-80.4,10.8,-82.3C25,-84.3,49.6,-80.4,45.8,-60.4Z" transform="translate(100 100)" />

</svg>

      <div className="hero-img-laptop"></div>
      <video
          className="video-inside-laptop"
          autoPlay
          muted
          loop
          playsInline
        >
        <source src="/video-h.webm" type="video/webm" />
           Seu navegador não suporta vídeos.
        </video>
      <div className="shadow-ellipse"></div>

      <div className="hero-content">
        <h2>Landing Pages, Sistemas e soluções Digitais sob Medida</h2>
        <p>
          Criação de soluções digitais modernas, desde páginas de alta conversão até pequenos sistemas e micro SaaS.
        </p>
        <a href="#service" className="cta-button">Solicitar Orçamento</a>
      </div>
    </section>
  );
}

export default Hero;
