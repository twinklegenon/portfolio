import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';
import Nav from './Nav';
import DetailsBox from './DetailBox';

function Contact() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleClick = (path) => {
    setActiveLink(path);
  };

  return (
    <>
  <div className='aboutmepanel'> Contact
            <div className='rect'></div>
          </div>
          <div className='mainCon'>
            <input type='text' className='FNForm' placeholder='Enter your name' />
            <input type='email' className='emailForm' placeholder='Enter your email' />
            <textarea className='messageForm' placeholder='Enter your message'></textarea>
            <button className='sendButton'>Send Message</button>
            <div className='locationBox'>
              <section className="mapbox" data-mapbox>
                <figure>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13755.09612347193!2d121.03097913035161!3d14.66199529684939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ba0942ef7375%3A0x4a9a32d9fe083d40!2sQuezon%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1720335847921!5m2!1sen!2sph"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </figure>
              </section>
            </div>
          </div>
    </>
  );
}

export default Contact;
