import React from 'react';
import './styles.css';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <MainContent />
    </div>
  );
};

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li><a href="#me">Me</a></li>
        <li><a href="#ml-ai">ML/AI</a></li>
        <li><a href="#data-analysis">Data Analysis</a></li>
        <li><a href="#webdev">Web Development</a></li>
        <li><a href="#gamedev">Games (p5 js)</a></li>
      </ul>
    </nav>
  );
};

const MainContent = () => {
  return (
    <main className='main-content'>
      <Me />
      <WebDev />
      <MLAI />
      <GameDev />
      <DataAnalysis />
      <Footer />
    </main>
  );
};

const Footer = () => {
  return (
    <main className='main-content'>
      <div className='footer'>
        <p>Created by Amit Gupta</p>
      </div>
    </main>
  );
};


const Me = () => (

  <section className="full-screen-section" id="me">

    <div className="text-container">
      <h1>Amit Gupta</h1>
      <h2>Software Engineer / Data Scientist</h2>
      <p>Bsc - Computer Science</p>
      <p>Msc - Data Science and Big Data Analytics</p>
      <div className="socials">
        <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/amit-gupta-609306264/">LinkedIn | </a>
        <a target='_blank' rel="noreferrer" href="https://github.com/amitgupta-exe">GitHub</a>
      </div>

    </div>
  </section>
);

const webDevUrls = [
  { url: 'https://raw.githubusercontent.com/amitgupta-exe/amits-portfolio/refs/heads/v1/public/assets/images/cryptonite.png', title: 'Cryptonite', description: 'Encrypt/Decrypt - React, Node Modules', github: 'https://github.com/amitgupta-exe/cryptonite', website: 'https://amitgupta-exe.github.io/lipsumghpage/' },
  { url: '', title: 'LoremIpsum', description: 'Multi typeface Lorem Ipsum - React, NLTK', github: 'https://github.com/amitgupta-exe/loremipsum', website: 'https://amitgupta-exe.github.io/loremipsum/' },
  { url: '', title: '', description: 'Web Dev Project 3', github: 'https://github.com/project3', website: '' },
];

const mlAiUrls = [
  { url: '', title: '', description: 'ML/AI Project 1', github: 'https://github.com/project1', website: 'https://yourwebsite.com/project1' },
  { url: '', title: '', description: 'ML/AI Project 3', github: 'https://github.com/project3', website: 'https://yourwebsite.com/project3' },
  { url: '', title: '', description: 'ML/AI Project 2', github: 'https://github.com/project2', website: 'https://yourwebsite.com/project2' },
];



const gameDevUrls = [
  { url: 'https://raw.githubusercontent.com/amitgupta-exe/amits-portfolio/refs/heads/v1/public/assets/images/snake.jpg', title: 'Snake Game p5', description: '', github: 'https://github.com/amitgupta-exe/snakegamep5', website: 'https://amitgupta-exe.github.io/snake-game-p5' },
  { url: '', title: '', description: 'Game Dev Project 2', github: 'https://github.com/project2', website: 'https://yourwebsite.com/project2' },
  { url: '', title: '', description: 'Game Dev Project 3', github: 'https://github.com/project3', website: 'https://yourwebsite.com/project3' },
];

const dataAnalysisUrls = [
  { url: '', title: '', description: 'Data Analysis Project 1', github: 'https://github.com/project1', website: 'https://yourwebsite.com/project1' },
  { url: '', title: '', description: 'Data Analysis Project 2', github: 'https://github.com/project2', website: 'https://yourwebsite.com/project2' },
  { url: '', title: '', description: 'Data Analysis Project 3', github: 'https://github.com/project3', website: 'https://yourwebsite.com/project3' },
];

const MLAI = () => <Section title="ML/AI" id="ml-ai" cards={mlAiUrls} />;
const WebDev = () => <Section title="Web Development" id="webdev" cards={webDevUrls} />;
const GameDev = () => <Section title="Game Development" id="gamedev" cards={gameDevUrls} />;
const DataAnalysis = () => <Section title="Data Analysis" id="data-analysis" cards={dataAnalysisUrls} />;

const Section = ({ title, id, cards }) => {
  return (
    <div className="section" id={id}>
      <h2>{title}</h2>
      <div className="cards">
        {cards.map((card) => (
          <div className="card" key={card.videoUrl}>
            <img className='card-display' src={card.url} alt="card" srcSet="" />
            <div>
              <p className='card-title'>{card.title}</p>
              <p className='card-description'>{card.description}</p>
            </div>
            <div className="links-card">
              <a href={card.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={card.website} target="_blank" rel="noopener noreferrer">Website</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;