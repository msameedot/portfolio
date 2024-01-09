import React from 'react';
import './Tech.sass';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Tech = () => {
    return(
        <section id="tech">
            <span className="techTitle">What I do</span>
            <span className="techDesc">I am a skilled and passionate web developer with experince in createing visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS and Javascript, as well as design software such as Figma and Illustrator.</span>
            <div className="techBars"></div>
                <div className="techBar">
                    <img src={UIDesign} alt="" className="techBarImg" />
                    <div className="techBarText">
                        <h2>UI Design</h2>
                        <p>Unblast offers a rich collection of amazing UI templates to help you get up and running with your next website or app development</p>
                    </div>
                </div>
                <div className="techBar">
                    <img src={WebDesign} alt="" className="techBarImg" />
                    <div className="techBarText">
                        <h2>Web Design</h2>
                        <p>ScienceSoft offers UI design services for a variety of industries, including oil and gas, construction, fashion, cosmetics, and more 3</p>
                    </div>
                </div>
                <div className="techBar">
                    <img src={AppDesign} alt="" className="techBarImg" />
                    <div className="techBarText">
                        <h2>App Design</h2>
                        <p>Softr has compiled a list of 12 iconic web application design examples for 2023 that you can use as inspiration</p>
                    </div>
                </div>
                
        </section>
    );
}

export default Tech;