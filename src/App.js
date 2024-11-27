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
      <GameDev/>
      <DataAnalysis />
      <Footer />
    </main>
  );
};

const Footer = () => {
  return (
    <main className='main-content'>
      <h1>
        Footer
      </h1>
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



const mlAiUrls = [
  { url: '', title: '', description: 'ML/AI Project 1', github: 'https://github.com/project1', website: 'https://yourwebsite.com/project1' },
  { url: '', title: '', description: 'ML/AI Project 3', github: 'https://github.com/project3', website: 'https://yourwebsite.com/project3' },
  { url: '', title: '', description: 'ML/AI Project 2', github: 'https://github.com/project2', website: 'https://yourwebsite.com/project2' },
];

const webDevUrls = [
  { url: '', title: '', description: 'Web Dev Project 1', github: 'https://github.com/amitgupta-exe/loremipsum', website: 'https://amitgupta-exe.github.io/lipsumghpage/' },
  { url: '', title: '', description: 'Web Dev Project 2', github: 'https://github.com/project2', website: '' },
  { url: '', title: '', description: 'Web Dev Project 3', github: 'https://github.com/project3', website: '' },
];

const gameDevUrls = [
  { url: '', title: 'Snake Game p5', description: '', github: 'https://github.com/amitgupta-exe/snakegamep5', website: 'https://amitgupta-exe.github.io/snake-game-p5' },
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
      <div className="vertical-sections">
        {cards.map((card) => (
          <div className="vertical-section" key={card.videoUrl}>
            <img src={card.videoUrl} alt="card" srcSet="" />

              {/* <video>
                <source src={card.videoUrl} type="video/mp4" />
              </video> */}

            <p>{card.description}</p>
            <p className='project-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

            <div className="card">
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