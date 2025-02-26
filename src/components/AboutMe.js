import React from 'react';
import './AboutMe.css';
import portrait from 'C:/portfolio/portfolio/src/components/portrait.JPG';


const AboutMe = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <img 
        src={portrait} 
        alt="A portrait of me" 
        className="about-image"
      />
      <span>
        Aavish Ved<br></br>
        Asscociate Software Developer | Full stack developer
      </span>
      
      <p>
        A Java and React full stack developer and a passionate data science enthusiast, constantly seeking challenges to broaden my horizons. With strong communication and presentation skills, I excel in understanding and engaging with diverse audiences. Eager to learn and grow, I am always on the lookout for new opportunities to enhance my skills and contribute to innovative solutions.
      </p>
    </section>
  );
};

export default AboutMe;
