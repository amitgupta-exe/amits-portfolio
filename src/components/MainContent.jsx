import React from 'react'
import { Link } from 'react-router-dom';
import { cardinfo } from '../data/frontpage_cardinfo';

const MainContent = () => {

    const Section = ({ title, id, cards }) => {
        return (
            <div className="section" id={id}>
                <h2 className='section-title'>{title}</h2>
                <div className="cards">
                    {cards.map((card) => (
                        <Link className="card" target={card.target} key={card.videoUrl} to={card.website}>
                            <div className='card-display'>
                                <img  src={card.url} alt="card" srcSet="" />
                            </div>
                            <div>
                                <div>
                                    <p className='card-title'>{card.title}</p>
                                    <p className='card-description'>{card.description}</p>
                                </div>
                                <div className="links-card">
                                    <a href={card.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                                    <a href={card.website} target="_blank" rel="noopener noreferrer">Website</a>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
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
                    <a target='_blank' rel="noreferrer" href="https://github.com/amitgupta-exe">GitHub | </a>
                    <a target='_blank' rel="noreferrer" href="https://www.kaggle.com/amitexe">Kaggle</a>

                </div>

            </div>
        </section>
    );

    const MLAI = () => <Section title="ML/AI" id="ml-ai" cards={cardinfo.mlAiUrls} />;
    const WebDev = () => <Section title="Web Development" id="webdev" cards={cardinfo.webDevUrls} />;
    const GameDev = () => <Section title="Computer Graphics" id="gamedev" cards={cardinfo.gameDevUrls} />;
    // const DataAnalysis = () => <Section title="Data Analysis" id="data-analysis" cards={cardinfo.dataAnalysisUrls} />;


    const Footer = () => {
        return (
            <main className='main-content'>
                <div className='footer'>
                    <p>Created by Amit Gupta</p>
                </div>
            </main>
        );
    };




    return (

        <main className='main-content'>
            <Me />
            <WebDev />
            <MLAI />
            <GameDev />
            {/* <DataAnalysis /> */}
            <Footer />
        </main>
    )
}

export default MainContent