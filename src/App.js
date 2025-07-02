import React, { useEffect } from 'react';
import './styles/modern.css';
import { PortfolioProvider } from './context/PortfolioContext';
import ResumeMain from './components/ResumeMain';

const App = () => {
  useEffect(() => {
    // Apply theme on app load
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
    }
  }, []);

  return (
    <PortfolioProvider>
      <ResumeMain />
    </PortfolioProvider>
  );
};

export default App;