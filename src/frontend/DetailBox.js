import IDpic from "../images/ID.png";
import linkedin from "../images/LinkedIn.png";
import email from "../images/Email.png";
import github from "../images/GitHub.png";
import fb from "../images/Facebook.png";
import React from 'react';
import './DetailBox.css';

const DetailsBox = () => {
  return (

<div className='DetailsBox'>
<div className='IDBox'>
  <img src={IDpic} alt="ID pic" className='id-pic' />
</div>
<div className='name'> Twinkle Genon </div>
<div className='bio'> an aspiring cloud/system engineer</div>

<img src={linkedin} alt="linkedin icon" className='linkedin' />
<div className='Text1'> linkedin.com/in/twinkle-g-88158318a/ </div>

<img src={email} alt="email icon" className='email' />
<div className='Text2'> twinklegenon7@gmail.com </div>

<img src={github} alt="github icon" className='github' />
<div className='Text3'> github.com/twinklegenon </div>

<img src={fb} alt="facebook icon" className='fb' />
<div className='Text4'> facebook.com/twinksssgenon </div>
</div>
  )
}
export default DetailsBox;
