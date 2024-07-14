import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';
import DetailsBox from './DetailBox';
import Nav from './Nav';
import ProjectsPanel from './ProjectPanel';

function Projects() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const projectRef = useRef(null);
  
  const handleClick = (path) => {
    setActiveLink(path);
  };


  const scrollToProjects = () => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <div className='MainContainer'>
        <DetailsBox />
        <div className='MainContent'>
        <Nav onProjectClick={scrollToProjects} />
          <div ref={projectRef}>
            <ProjectsPanel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
