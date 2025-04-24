import React, { useEffect, useState } from 'react';
import '../styles/feedback-space.css';
import techlinkerLogo from '../assets/icons/rafael-logo.png';
import miliLogo from '../assets/icons/camile-logo.png';

const testimonials = [
  {
    quote: '“Ficou muito bom mesmo, gostei bastante das cores e do formato limpo para navegação. Ficou show, gostamos bastante.”',
    name: 'Rafael Caldas',
    company: 'TechLinker',
    photo: techlinkerLogo,
  },
  {
    quote: '“Caraca, que lindo! Você arrasou no design, amei de verdade. Fiquei impressionada!”',
    name: 'Camile Santiago',
    company: 'Mili Fotografias',
    photo: miliLogo,
  },
];

export default function FeedBackSpace() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="feedback-section">
      <div className="feedback-container">
        <h2 className="feedback-title">O que dizem sobre meu trabalho</h2>
        <p className="feedback-subtitle">
          Cada projeto é feito com muito cuidado, atenção aos detalhes e foco em resultados reais.
        </p>

        <div className="carousel-wrapper">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`testimonial-box ${idx === currentIndex ? 'active' : ''}`}
            >
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-footer">
                <img src={t.photo} alt={t.name} />
                <p className="testimonial-client-name">{t.name}</p>
                <p className="testimonial-company">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bolinhas flutuantes */}
      <div className="floating-shape shape-1">
        <i className="fa fa-lightbulb"></i>
      </div>
      <div className="floating-shape shape-2">
        <i className="fas fa-laptop"></i>
      </div>
      <div className="floating-shape shape-3">
        <i className="fas fa-star"></i>
      </div>
      <div className="floating-shape shape-4">
        <i className="fas fa-comments"></i>
      </div>
    </section>
  );
}
