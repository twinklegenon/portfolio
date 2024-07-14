import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';
import DetailsBox from './DetailBox';
import Nav from './Nav';
import ProjectPanel from './ProjectPanel';

function Project() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const projectRef = useRef(null);

  const handleClick = (path) => {
    setActiveLink(path);
  };

  const scrollToProject = () => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <div className='MainContainer'>
        <DetailsBox />
        <div className='MainContent'>
          <Nav onProjectClick={scrollToProject} />
          <div ref={projectRef}>
            <ProjectPanel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
