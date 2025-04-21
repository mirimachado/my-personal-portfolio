import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Coluna 1: Sobre */}
        <div className="footer-column">
          <h3>Sobre</h3>
          <p>
            Desenvolvedor focado em criar soluções digitais como landing pages, micro SaaS, sistemas pequenos e MVPs personalizados para atender às necessidades específicas de cada cliente.
          </p>
        </div>

        {/* Coluna 2: Navegação */}
        <div className="footer-column">
          <h3>Navegação</h3>
          <ul>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#como-funciona">Como Funciona</a></li>
            <li><a href="#feedbacks">Feedbacks</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        {/* Coluna 3: Contato */}
        <div className="footer-column">
          <h3>Contato</h3>
          <p>Email: <a href="mailto:seuemail@exemplo.com">seuemail@exemplo.com</a></p>
          <p>WhatsApp: <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">(11) 99999-9999</a></p>
        </div>

        {/* Coluna 4: Redes Sociais */}
        <div className="footer-column">
          <h3>Redes Sociais</h3>
          <ul className="social-links">
            <li><a href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://twitter.com/seu-usuario" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>

      {/* Linha de direitos autorais */}
      <div className="footer-bottom">
        <p>&copy; 2025 - Todos os direitos reservados | Desenvolvido por Seu Nome</p>
      </div>
    </footer>
  );
}

export default Footer;
