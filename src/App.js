import React from 'react';
import './styles.css';

import { cardinfo } from './cardinfo';

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



const MLAI = () => <Section title="ML/AI" id="ml-ai" cards={cardinfo.mlAiUrls} />;
const WebDev = () => <Section title="Web Development" id="webdev" cards={cardinfo.webDevUrls} />;
const GameDev = () => <Section title="Game Development" id="gamedev" cards={cardinfo.gameDevUrls} />;
const DataAnalysis = () => <Section title="Data Analysis" id="data-analysis" cards={cardinfo.dataAnalysisUrls} />;

console.log(cardinfo.mlAiUrls);


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