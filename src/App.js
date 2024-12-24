import React from 'react';
import './styles.css';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { cardinfo } from './data/frontpage_cardinfo';
import routes from './data/routes';

import FrontPage from './pages/FrontPage';
import SideNavigation from './components/SideNavigation';

const App = () => {
  return (
    <HashRouter>
      <div className="app">
        <Routes>

          {routes.map(({ path, element }, index) => (
            <Route
              key={index}
              path={path}
              element={
                element
              }
            />
          ))}
        </Routes>
      </div>
    </HashRouter>
  );
};


export default App;