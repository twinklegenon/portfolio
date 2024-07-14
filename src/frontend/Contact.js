import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';
import DetailsBox from './DetailBox';
import Nav from './Nav';
import ContactPanel from './ContactPanel';

function Contact() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const contactRef = useRef(null);

  const handleClick = (path) => {
    setActiveLink(path);
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <div className='MainContainer'>
        <DetailsBox />
        <div className='MainContent'>
          <Nav onContactClick={scrollToContact} />
          <div ref={contactRef}>
            <ContactPanel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
