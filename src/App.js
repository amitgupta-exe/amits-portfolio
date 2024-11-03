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
        <li> <p>Me</p><a href="#me"></a></li>
        <li><p>ML/AI</p><a href="#ml-ai"></a></li>
        <li><p>Web Development</p><a href="#webdev"></a></li>
        <li><p>Game Development</p><a href="#gamedev"></a></li>
        <li><p>Data Analysis</p><a href="#data-analysis"></a></li>
      </ul>
    </nav>
  );
};

const MainContent = () => {
  return (
    <main className='main-content'>
      <Me />
      <MLAI />
      <WebDev />
      <GameDev />
      <DataAnalysis />
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
        <a target='_blank' href="https://www.linkedin.com/in/amit-gupta-609306264/">LinkedIn | </a>
        <a target='_blank' href="https://github.com/amitgupta-exe">GitHub</a>
      </div>

    </div>
    <div className="image-container">
      <img src="img.png" alt="Amit Gupta" />
    </div>
  </section>
);
const mlAiUrls = [
  { videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', description: 'ML/AI Project 1', github: 'https://github.com/project1', website: 'https://yourwebsite.com/project1' },
  { videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', description: 'ML/AI Project 3', github: 'https://github.com/project3', website: 'https://yourwebsite.com/project3' },
  { videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', description: 'ML/AI Project 2', github: 'https://github.com/project2', website: 'https://yourwebsite.com/project2' },
];

const webDevUrls = [
  { videoUrl: 'your-webdev-video-url-1.mp4', description: 'Web Dev Project 1', github: 'https://github.com/project1', website: 'https://yourwebsite.com/project1' },
  { videoUrl: 'your-webdev-video-url-2.mp4', description: 'Web Dev Project 2', github: 'https://github.com/project2', website: 'https://yourwebsite.com/project2' },
  { videoUrl: 'your-webdev-video-url-3.mp4', description: 'Web Dev Project 3', github: 'https://github.com/project3', website: 'https://yourwebsite.com/project3' },
];

const gameDevUrls = [
  { videoUrl: "/image.png", description: 'Snake Game p5', github: 'https://github.com/amitgupta-exe/snakegamep5', website: 'https://amitgupta-exe.github.io/snakegamep5' },
  { videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', description: 'Game Dev Project 2', github: 'https://github.com/project2', website: 'https://yourwebsite.com/project2' },
  { videoUrl: 'your-gamedev-video-url-3.mp4', description: 'Game Dev Project 3', github: 'https://github.com/project3', website: 'https://yourwebsite.com/project3' },
];

const dataAnalysisUrls = [
  { videoUrl: 'your-data-analysis-video-url-1.mp4', description: 'Data Analysis Project 1', github: 'https://github.com/project1', website: 'https://yourwebsite.com/project1' },
  { videoUrl: 'your-data-analysis-video-url-2.mp4', description: 'Data Analysis Project 2', github: 'https://github.com/project2', website: 'https://yourwebsite.com/project2' },
  { videoUrl: 'your-data-analysis-video-url-3.mp4', description: 'Data Analysis Project 3', github: 'https://github.com/project3', website: 'https://yourwebsite.com/project3' },
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
            <img src={card.videoUrl} alt="" srcset="" />

            <div className="card">
              <p>{card.description}</p>
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