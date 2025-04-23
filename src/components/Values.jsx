import React from 'react';
import '../styles/values.css';
import { FaBullseye, FaEye, FaHandshake } from 'react-icons/fa';

function Values() {
  return (
   <section className="valores-area">
      <h2 className="valores-heading">Missão, Visão e Valores</h2>
      <div className="valores-conteudo">
        <div className="bloco-info bloco-missao">
          <FaBullseye className="icone-info" />
          <h3>Missão</h3>
          <p>
            Oferecer soluções tecnológicas criativas e eficazes, ajudando nossos clientes a alcançarem seus objetivos de forma ágil e inovadora.
          </p>
          {/* <svg className="svg-blob svg-missao" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#20A07A" d="M47.6,-65.6C60.3,-53.3,68.4,-37.8,70.2,-22.4C72,-6.9,67.5,8.5,61.5,23.3C55.6,38.1,48.1,52.3,35.9,61.4C23.7,70.5,6.9,74.6,-9.7,77.1C-26.4,79.6,-52.7,80.6,-63.2,67.6C-73.7,54.6,-68.4,27.3,-65.6,3.4C-62.8,-20.6,-62.5,-41.2,-52.6,-54.4C-42.7,-67.7,-21.3,-73.7,-1.2,-72.2C18.9,-70.7,37.8,-61.9,47.6,-65.6Z" transform="translate(100 100)" />
          </svg> */}
        </div>

        <div className="bloco-info bloco-visao">
          <FaEye className="icone-info" />
          <h3>Visão</h3>
          <p>
            Ser referência em produtos digitais, criando experiências de valor para nossos clientes e usuários.
          </p>
          {/* <svg className="svg-blob svg-visao" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#983EB5" d="M48.4,-64.9C62.6,-53.5,72.9,-39.1,76.3,-23.6C79.7,-8.1,76.2,8.3,69.6,23.2C63,38.1,53.4,51.5,40.6,61.2C27.8,70.9,11.9,76.8,-2.4,80.2C-16.7,83.6,-33.3,84.5,-46.7,77.1C-60.1,69.8,-70.3,54.2,-74.5,38.2C-78.6,22.1,-76.7,5.6,-71.1,-9.1C-65.6,-23.9,-56.3,-36.9,-45,-49.7C-33.8,-62.5,-21.9,-75.1,-7,-76.8C7.8,-78.5,15.6,-69.3,48.4,-64.9Z" transform="translate(100 100)" />
          </svg> */}
        </div>

        <div className="bloco-info bloco-valores">
          <FaHandshake className="icone-info" />
          <h3>Valores</h3>
          <ul>
            <li>Comprometimento com a qualidade</li>
            <li>Inovação constante</li>
            <li>Empatia com o cliente</li>
            <li>Colaboração e transparência</li>
          </ul>
          {/* <svg className="svg-blob svg-valores" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#5653B6" d="M44.3,-58.4C58.1,-48.4,70.3,-35.6,71.3,-21.9C72.3,-8.2,62.2,6.3,55.3,20.2C48.5,34.1,44.9,47.5,35.4,58.1C25.9,68.7,10.4,76.4,-4.8,82.2C-20,88,-40,92,-50.1,82.6C-60.3,73.1,-60.5,50.3,-63.6,32.2C-66.6,14.1,-72.6,0.8,-68.4,-10.7C-64.2,-22.2,-49.8,-31.9,-37.7,-43.4C-25.6,-55,-15.8,-68.5,-2.3,-66.6C11.2,-64.8,22.5,-47.9,44.3,-58.4Z" transform="translate(100 100)" />
          </svg> */}
        </div>
      </div>
    </section>
  );
}

export default Values;
