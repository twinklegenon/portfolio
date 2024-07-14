import React, { useState, useRef} from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';
import Nav from './Nav.js';
import DetailsBox  from './DetailBox.js'
import ResumePanel from './ResumePanel.js'
import ProjectPanel from './ProjectPanel.js'; // Updated import name
import ContactPanel from './ContactPanel.js'

function Home() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (section) => {
    if (section === 'about' && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'resume' && resumeRef.current) {
      resumeRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'projects' && projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'contact' && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <div className='MainContainer'>
        <DetailsBox />
        <div className='MainContent'>
          <Nav onScroll={handleScroll} /> {/* Pass the scroll function to Nav */}
          <div ref={aboutRef}  className='aboutSection'>
          <div className='aboutmepanel'> About Me
            <div className='rect'></div>
          </div>
          <div className='paraAbout'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

            Why do we use it?
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </div>

          <div className='whatimdoing'> What I'm Doing & Interests
          </div>
          <div className='boxes'>
            <div className='box1'></div>
            <div className='box2'></div>
            <div className='box3'></div>
            <div className='box4'></div>
            <div className='box5'></div>
            <div className='box6'></div>
          </div>
          </div>
          {/*-----------------------------------------------------------------------------------*/}
          
          <div ref={resumeRef}>
            <ResumePanel />
          </div>

          {/*-----------------------------------------------------------------------------------*/}
          
          <div ref={projectRef}>
            <ProjectPanel /> 
          </div>
          {/*-----------------------------------------------------------------------------------*/}
          
          <div ref={contactRef}>
            <ContactPanel /> 
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
