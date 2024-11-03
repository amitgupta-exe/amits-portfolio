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
        <li><a href="#webdev">Web Development</a></li>
        <li><a href="#gamedev">Game Development</a></li>
        <li><a href="#data-analysis">Data Analysis</a></li>
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
      <p>I create stuff</p>
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
  { videoUrl: 'your-gamedev-video-url-1.mp4', description: 'Game Dev Project 1', github: 'https://github.com/project1', website: 'https://yourwebsite.com/project1' },
  { videoUrl: 'your-gamedev-video-url-2.mp4', description: 'Game Dev Project 2', github: 'https://github.com/project2', website: 'https://yourwebsite.com/project2' },
  { videoUrl: 'your-gamedev-video-url-3.mp4', description: 'Game Dev Project 3', github: 'https://github.com/project3', website: 'https://yourwebsite.com/project3' },
];

const dataAnalysisUrls = [
  { videoUrl: 'your-data-analysis-video-url-1.mp4', description: 'Data Analysis Project 1', github: 'https://github.com/project1', website: 'https://yourwebsite.com/project1' },
  { videoUrl: 'your-data-analysis-video-url-2.mp4', description: 'Data Analysis Project 2', github: 'https://github.com/project2', website: 'https://yourwebsite.com/project2' },
  { videoUrl: 'your-data-analysis-video-url-3.mp4', description: 'Data Analysis Project 3', github: 'https://github.com/project3', website: 'https://yourwebsite.com/project3' },
];

const MLAI = () => <Section title="ML/AI" id="ml-ai" urls={mlAiUrls} />;
const WebDev = () => <Section title="Web Development" id="webdev" urls={webDevUrls} />;
const GameDev = () => <Section title="Game Development" id="gamedev" urls={gameDevUrls} />;
const DataAnalysis = () => <Section title="Data Analysis" id="data-analysis" urls={dataAnalysisUrls} />;

const Section = ({ title, id, urls }) => {
  return (
    <div className="section" id={id}>
      <h2>{title}</h2>
      <div className="vertical-sections">
        {urls.map((num) => (
          <div className="vertical-section" key={num.videoUrl}>
            <video className="video" autoPlay loop muted>
              <source src={num.videoUrl} type="video/mp4" /> {/* Replace with your video URL */}
              Your browser does not support the video tag.
            </video>
            <div className="card">
              <p>Description for section {num.description}</p>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">Website</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;