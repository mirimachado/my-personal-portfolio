import React, { useEffect, useState } from 'react';
import '../styles/feedback-space.css';
import techlinkerLogo from '../assets/icons/figma.png';
import miliLogo from '../assets/icons/figma.png'; // Pode trocar se tiver outro logo

const testimonials = [
  {
    quote: '“Ficou muito bom mesmo, gostei bastante das cores e do formato limpo para navegação. Ficou show sim. Gostamos bastante.”',
    name: 'Rafael Caldas',
    company: 'TechLinker',
    logo: techlinkerLogo,
  },
  {
    quote: '“Caraca, que lindo! Você arrasou no design, amei de verdade. Fiquei impressionada!”',
    name: 'Camile Santiago',
    company: 'Mili Fotografias',
    logo: miliLogo,
  },
];

function FeedBackSpace() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000); // troca a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="feedback-section">
      <div className="feedback-container">
        <h2 className="feedback-title">O que dizem sobre meu trabalho</h2>
        <p className="feedback-subtitle">
          Cada projeto é feito com muito cuidado, atenção aos detalhes e foco nos resultados.
        </p>

        <div className="carousel-wrapper">
          {testimonials.map((testimonial, index) => (
            <div
              className={`testimonial-box testimonial-slide ${index === currentIndex ? 'active' : ''}`}
              key={index}
            >
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-footer">
                <img src={testimonial.logo} alt={`Logo da ${testimonial.company}`} className="company-logo" />
                <div>
                  <p className="testimonial-client-name">{testimonial.name}</p>
                  <p className="testimonial-company">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeedBackSpace;
