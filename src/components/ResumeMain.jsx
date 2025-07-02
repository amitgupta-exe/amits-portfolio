import React, { useRef, useState, useEffect } from 'react';
import ResumeSidebarArc from './ResumeSidebarArc';
import { cardinfo as allProjects } from '../data/frontpage_cardinfo';

const roles = [
  'Data Scientist',
  'AI/ML Engineer',
  'Full Stack Developer',
  'Cybersecurity Enthusiast'
];

const mitLogo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXVZl5dzRK-BQZ5t6At2m_dq21iPp0RaAOAbnNYxIoyMkZeRaiLfY_udR5E7WAJIHYud8&usqp=CAU';
const puneLogo = 'http://upload.wikimedia.org/wikipedia/en/f/f6/Savitribai_Phule_Pune_University_Logo.png';

const sectionList = ['about', 'experience', 'education', 'projects'];

const companyLogos = {
  vruksh: 'https://media.licdn.com/dms/image/v2/C4E0BAQG30kSpMNRyCA/company-logo_200_200/company-logo_200_200/0/1630567554404/vruksh_logo?e=2147483647&v=beta&t=23er_Eq7FnUmrSOqS1BzmF8GOcRRBgmm-N-RGCJ_v18',
  cisco: 'https://images.seeklogo.com/logo-png/3/1/cisco-logo-png_seeklogo-30674.png',
};

const ResumeMain = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [typed, setTyped] = useState('');
  const [typing, setTyping] = useState(true);
  const [activeSection, setActiveSection] = useState('about');
  const sectionRefs = {
    about: useRef(),
    experience: useRef(),
    education: useRef(),
    projects: useRef(),
  };

  // Typing animation for roles
  useEffect(() => {
    let timeout;
    if (typing) {
      if (typed.length < roles[roleIdx].length) {
        timeout = setTimeout(() => setTyped(roles[roleIdx].slice(0, typed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      timeout = setTimeout(() => {
        setTyping(true);
        setTyped('');
        setRoleIdx((prev) => (prev + 1) % roles.length);
      }, 600);
    }
    return () => clearTimeout(timeout);
  }, [typed, typing, roleIdx]);

  // Navigation click handler
  const handleNavClick = (section) => {
    const ref = sectionRefs[section];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    window.location.hash = section;
    setActiveSection(section);
  };

  // Listen to hash changes for active section
  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (sectionList.includes(hash)) setActiveSection(hash);
    };
    window.addEventListener('hashchange', onHashChange);
    onHashChange();
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Aggregate all projects
  const allProjectCategories = [
    { title: 'Web Development', projects: allProjects.webDevUrls },
    { title: 'ML/AI', projects: allProjects.mlAiUrls },
    { title: 'Graphics & Games', projects: allProjects.gameDevUrls },
  ];

  return (
    <div className="resume-root">
      <ResumeSidebarArc onNavClick={handleNavClick} activeSection={activeSection} />
      <main className="resume-content">
        {/* About Section */}
        <section
          ref={sectionRefs.about}
          id="about"
          className="resume-section"
        >
          <div className="about-content">
            <h1 className="resume-name">Amit Gupta</h1>
            <div className="resume-roles">
              <span className="role-typing">{typed}</span>
              <span className="role-cursor">|</span>
            </div>
            <div className="resume-socials">
              <a href="https://github.com/amitgupta-exe" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.kaggle.com/amitexe" target="_blank" rel="noopener noreferrer" aria-label="Kaggle">
                <i className="fab fa-kaggle"></i>
              </a>
              <a href="https://www.linkedin.com/in/amit-gupta-609306264/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </section>
        {/* Experience Section */}
        <section
          ref={sectionRefs.experience}
          id="experience"
          className="resume-section"
        >
          <div className="exp-list timeline-list">
            {/* Timeline vertical line */}
            <div className="timeline-vertical"></div>
            {/* Experience Items */}
            <div className="exp-item timeline-item">
              <div className="timeline-dot">
                <img src={companyLogos.vruksh} alt="Vruksh Ecosystem Foundation" className="company-logo" />
              </div>
              <div className="timeline-content">
                <div className="exp-role">AI/ML Engineer Intern <span className="exp-company">| Vruksh Ecosystem Foundation (Hybrid - Pune)</span></div>
                <div className="exp-date">March 2025 – June 2025</div>
                <ul className="exp-bullets">
                  <li>Developed an AI-powered WhatsApp-based microlearning platform (Microlearn) using Node.js, React.js, Supabase (PostgreSQL), and WATI API, enabling low-bandwidth, multilingual content delivery across rural India.</li>
                  <li>Implemented personalized course generation using Llama 3.1 (Ed-LLM) with prompt engineering for tone, language, and adaptive content, reducing manual effort by 70%.</li>
                  <li>Designed backend logic for session control, CRON-based content delivery, and progress tracking using JavaScript, Express, and Supabase, supporting asynchronous, scalable learning flows.</li>
                  <li>Participated in AI workshops, collaborative hackathons, and the AI Skilling Train-the-Trainer program, gaining experience in applying AI for social good in agriculture and education.</li>
                </ul>
              </div>
            </div>
            <div className="exp-item timeline-item">
              <div className="timeline-dot">
                <img src={companyLogos.cisco} alt="Cisco" className="company-logo" />
              </div>
              <div className="timeline-content">
                <div className="exp-role">Cybersecurity Intern <span className="exp-company">| Cisco (Virtual)</span></div>
                <div className="exp-date">May 2024 – July 2024</div>
                <ul className="exp-bullets">
                  <li>Designed and simulated enterprise-level network topologies using Cisco Packet Tracer, implementing security protocols and best practices.</li>
                  <li>Performed comprehensive network vulnerability assessments identifying and mitigating 15+ potential security threats</li>
                  <li>Configured security measures in simulated environments to enhance network protection mechanisms with 100% fault-tolerant security</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Education Section */}
        <section
          ref={sectionRefs.education}
          id="education"
          className="resume-section"
        >
          <div className="edu-list">
            <div className="edu-item">
              <img src={mitLogo} alt="MIT WPU" className="edu-logo" />
              <div>
                <div className="edu-degree">MSc in Data Science and Big Data Analytics</div>
                <div className="edu-school">MIT World Peace University, Pune – 2025</div>
                <div className="edu-grade">CGPA: 8.46</div>
              </div>
            </div>
            <div className="edu-item">
              <img src={puneLogo} alt="Pune University" className="edu-logo" />
              <div>
                <div className="edu-degree">BSc in Computer Science</div>
                <div className="edu-school">Arihant College of Arts, Commerce and Science, Pune University Pune – 2022</div>
                <div className="edu-grade">Percentage: 73.26%</div>
              </div>
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section
          ref={sectionRefs.projects}
          id="projects"
          className="resume-section"
        >
          <div className="projects-aggregate">
            {allProjectCategories.map(cat => (
              <div className="project-category" key={cat.title}>
                <div className="project-category-title">{cat.title}</div>
                <div className="project-cards">
                  {cat.projects.map(project => (
                    <div className="project-card-resume" key={project.id}>
                      <div className="project-title">{project.title}</div>
                      <div className="project-links">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <i className="fab fa-github"></i>
                          </a>
                        )}
                        {project.website && (
                          <a href={project.website} target="_blank" rel="noopener noreferrer" aria-label="Website">
                            <i className="fas fa-external-link-alt"></i>
                          </a>
                        )}
                      </div>
                      <div className="project-techs">
                        {project.technologies && project.technologies.map(tech => (
                          <span className="project-tech" key={tech}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ResumeMain;
