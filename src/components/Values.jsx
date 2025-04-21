import React from 'react';
import '../styles/values.css';

function Values() {
  return (
    <div className="values-container">
      <h2>Missão, Visão e Valores</h2>
      <div className="values">
        <div className="value-item">
          <h3>Missão</h3>
          <p>Oferecer soluções tecnológicas criativas e eficazes, ajudando nossos clientes a alcançarem seus objetivos de forma ágil e inovadora.</p>
        </div>
        <div className="value-item">
          <h3>Visão</h3>
          <p>Ser reconhecido como referência em desenvolvimento de produtos digitais, criando experiências de valor para nossos clientes e usuários.</p>
        </div>
        <div className="value-item">
          <h3>Valores</h3>
          <ul>
            <li>Comprometimento com a qualidade.</li>
            <li>Inovação constante.</li>
            <li>Empatia com o cliente.</li>
            <li>Colaboração e transparência.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Values;
