import React from 'react'
import './Projects.sass'
import portfolio1 from '../../assets/portfolio-1.png'
import portfolio2 from '../../assets/portfolio-2.png'
import portfolio3 from '../../assets/portfolio-3.png'
import portfolio4 from '../../assets/portfolio-4.png'
import portfolio5 from '../../assets/portfolio-5.png'
import portfolio6 from '../../assets/portfolio-6.png'

const Projects = () => {
  return (
    <section id="projects">
       <h2 className='projectsTitle'>My Portfolio</h2>
       <span className="projectsDesc">I find fulfillment in meticulously attending to the minutest details, ensuring that my work attains perfection at the pixel level. I am enthusiastic about leveraging my skills and experience to assist businesses in reaching their objectives and establishing a robust online presence.</span>
        <div className="projectsImgs">
            <img src={portfolio1} alt="" className="projectImg" />
            <img src={portfolio2} alt="" className="projectImg" />
            <img src={portfolio3} alt="" className="projectImg" />
            <img src={portfolio4} alt="" className="projectImg" />
            <img src={portfolio5} alt="" className="projectImg" />
            <img src={portfolio6} alt="" className="projectImg" />
        </div>
        <button className="projectBtn">See More</button>
    </section>
  )
}

export default Projects