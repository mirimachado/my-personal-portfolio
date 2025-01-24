import './App.css';

function App() {
  return (
    <div className="initial-profile">
      <div className="header">
  
      <p className="name-header">Miriã Machado de Camargo</p>
      <div className='float-left'>
      <a href="#to-aboutme" className='message-1'>About me</a>
      <a href="#to-projects" className='message-1'>Projects</a>
      <a href="#to-skills" className='message-1'>Skills</a>
      <a href="#leave-message" className='message-1'>Leave a message!</a>
      </div>
      </div>
      <section id='to-aboutme'>
      <p className="profile-title">Hey there, I'm Miriã!</p>

      <div className='center-lines'>
      <div className="underlined-first"></div>
      </div>
      <div className='center-lines'>
      <div className="underlined-second"></div>
      </div>
      
      <div className="div-profile">
      <div className='center-lines'>
        <div className="shadow-second"></div>
        <div className="shadow-first"></div>
        
        <div className="profile-photo"></div>
        </div>
        <div class="welcome-animation"></div>
        <div className='small-line-1'></div>
      
        <div className='small-line-2'></div>
        <div className='first-line'></div>
        
      </div>
      <p className='bio-text'> 
      <div className='center-lines'>
      I am a Java developer, currently working on real case projects, personal and professional, and studying the second semester of a Software Engineering. Throughout my journey, which started in 2023, I have been able to learn and develop both hard and soft skills to handle the challenges that arise daily. Every day, I strive to improve my knowledge through new challenges.
      </div>
      </p>
      
      </section>
       <div className='icons'>

        <a href="https://github.com/mirimachado">
        <div className='github-icon'></div>
        </a>

        <a href="https://www.instagram.com/miri_starosky/">
        <div className='instagram-icon'></div>
        </a>

        <a href="https://www.linkedin.com/in/miri%C3%A3-machado-de-camargo-4a6a26206/">
        <div className='linkedin-icon'></div>
        </a>

        <a href="https://medium.com/@miria.machado.estudante">
        <div className='medium-icon'></div>
        </a>

      </div>
      <section id='to-projects'>
      <div className='second-line'></div>
      <div className='project-title'>Projects</div>
      <div className='center-lines'>
      <div className='underlined-project'></div>
      </div>
      <div className='text-content-project'>Software</div>
      </section>
      <div className="container-text-center">
    <div className="col-1">
      
      <div className="video-container">
      <video 
        className="small-video"
        src="public/uni-video.webm" 
        autoPlay 
        loop 
        muted
      ></video>
    </div>
    <div className='div-pink'>
    <div className='text-content-project'>Back-end - Uni movimento</div>
    </div>
    <div className='text-content-cards'>This project was developed with the aim of facilitating internal organization for a real church group. This is the first version of the project, which is still undergoing constant improvements.</div>
    </div>
    <div className="col-2">
      
      <div className="video-container">
      <video 
        className="small-video"
        src="public/contalogic-video.webm" 
        autoPlay 
        loop 
        muted
      ></video>
    </div>

      <div className='div-pink'>
      <div className='text-content-project'>Back-end - ContaLogic</div>
      </div>
      <div className='text-content-cards'>This is a real project developed to manage client company data and control the accounting activities to be performed for each company. It also manages the office's financial operations and much more.</div>
    </div>
    <div className="col-3">
    
      <div className="video-container">
      <video 
        className="small-video"
        src="public/telalogin-video.webm" 
        autoPlay 
        loop 
        muted
      ></video>
    </div>
    <div className='div-pink'>
    <div className='text-content-project'>Front-end - Tela de Login</div>
    </div>
    <div className='text-content-cards'>This is a small login screen project I developed using React and JavaScript.</div>
    </div>
</div>

<section id='to-skills'>
<div className='line-3'></div>
<div className='skills-title'> Skills </div>
<div className='center-lines'>
<div className='underlined-skills'></div>
</div>
</section>
<div className="container-text-center">
    <div className="col-4">
    <div className='div-pink'>
    <div className='text-content-project'>Hard Skills</div>
    </div>
    <div className='text-content-cards'>-Java <br />
-Spring boot
<br />
-Database: PostgreSQL, MySQL and MongoDB
<br />
-Migrations: Flyway
<br />
-JUnit and Mockito
<br />
-Docker
<br />
-API Rest
<br />
-HTML, CSS and familiarity with Javascript and React.js
<br />
-Git
<br />
-English: intermediate</div>

    </div>
    <div className="col-5">
    <div className='div-pink'>
    <div className='text-content-project'>Soft Skills</div>
    </div>
    <div className='text-content-cards'>-Analytical Capacity 
      <br />
-Great Writing
<br />
-Interpersonal Communication
<br />
-Adaptability</div>
    </div>
</div>

<div className='icons-skills'>
<img className='java-icon'></img>
<div className='git-icon'></div>
<div className='mysql-icon'></div>
<div className='postgresql-icon'></div>
<div className='mongodb-icon'></div>
<div className='figma-icon'></div>
<div className='docker-icon'></div>
</div>
<div className='center-lines'>
<div className='underlined-skills-icons'></div>
</div>
<div className='line-4'></div>
<section id='leave-message'>
<div className='leave-message-title'>Leave a message!</div>

</section>
<div className='center-lines'>
<div className='underlined-leave-message'></div>
</div>
<div className='text-content-project'>miria.machado.estudante@gmail.com</div>
<div className='icons-skills'>
<div className='message-icon'></div>
</div>
<footer className='footer-div'>
  © 2025 Miriã Machado de Camargo. All Rights Reserved.
</footer>

    </div>
  );
}

export default App;
