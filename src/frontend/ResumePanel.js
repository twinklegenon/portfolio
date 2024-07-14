import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';
import dl from "../images/download.png";
import book from "../images/book.png";

function ResumePanel() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className='resume-container'>
      <div className='resumepanel'> Resume
        <img src={dl} alt="download icon" className='dl' />
        <div className='rect'></div>
      </div>
      <div className='resumeSec'>
        <img src={book} alt="book icon" className='IconExpi' />
        <div className='experience'> Experience
          <div className='tech'>Technical Support Engineer Intern</div>
        </div>
        <div className='yr1'>February 2024 - May 2024</div>
        <div className='equitable'>Equitable Computer Services Inc.</div>
        <div className='info'>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
        </div>
        <img src={book} alt="book icon" className='IconEduc' />
        <div className='education'> Education
        </div>
        <div className='college'>College - Bachelor of Science in Computer Engineering</div>
        <div className='yr2'>S.Y. 2020 - 2024</div>
        <div className='TIP1'>Technological Institute of the Philippines - QC</div>
        <div className='stem'>Science, Technology, Engineering, and Mathematics</div>
        <div className='yr3'>S.Y. 2018 - 2020</div>
        <div className='TIP2'>Technological Institute of the Philippines - QC</div>
        <div className='jhs'>Junior High School</div>
        <div className='yr4'>S.Y. 2014 - 2018</div>
        <div className='grace'>Grace Christian Mission Technical School (GCMTS)</div>
      </div>
    </div>
  );
}

export default ResumePanel;