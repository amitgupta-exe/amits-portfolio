import React from 'react';
import dpImg from '../assets/dp.jpg';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
];

const arcPositions = [
  { angle: -60 },
  { angle: -20 },
  { angle: 20 },
  { angle: 60 },
];

const ResumeSidebarArc = ({ onNavClick, activeSection }) => {
  return (
    <aside className="resume-sidebar-arc">
      <div className="arc-nav">
        <div className="arc-profile">
          <img src={dpImg} alt="Amit Gupta" />
        </div>
        <div className="arc-links">
          {navItems.map((item, idx) => (
            <div
              key={item.id}
              className="arc-link-wrapper"
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${arcPositions[idx].angle}deg) translate(140px) rotate(${-arcPositions[idx].angle}deg)`
              }}
            >
              <button
                className={`arc-link${activeSection === item.id ? ' active' : ''}`}
                onClick={() => onNavClick(item.id)}
                aria-label={item.label}
              >
                {item.label}
              </button>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ResumeSidebarArc;
