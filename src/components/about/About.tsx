import React from 'react';
import './About.sass';
import bg from '../../assets/Sameer Muhammadh.png';
import btnImg from '../../assets/hireMe.png';
import { Link } from 'react-scroll';

const About = () => {
    return(
        <section id="about">
            <div className='aboutContent'>
                <span className="hello">Hi, </span>
                <span className="introText">I'm<span className='aboutName'> Sameer Muhammadh</span><br/></span>
                <span className="position">Software Engineer</span>
                <p className="aboutPara">I'm a skilled software engineer with more than 4 years of experience in web development <br /> and software design.</p>
                <Link><button className="btn"><img src={btnImg} className="btnImg" alt="Hire Me" />Hire Me</button></Link>  
            </div>
            <img src={bg} alt="profile"  className='bg'/>
        </section>
    );

}

export default About