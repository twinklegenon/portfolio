import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';

function ProjectsPanel() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleClick = (path) => {
    setActiveLink(path);
  };

  return (
    <>
      <div className='aboutmepanel'> Projects
        <div className='rect'></div>
        <div className='NavTab'> 

          </div>
      </div>
      <div className='ProjPanel'>
        <div className='pan1'></div>
        <div className='pan2'></div>
        <div className='pan3'></div>
        <div className='pan4'></div>
        <div className='pan5'></div>
        <div className='pan6'></div>
        <div className='pan7'></div>
        <div className='pan8'></div>
      </div>
    </>
  );
}

export default ProjectsPanel;
