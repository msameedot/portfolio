import React, { useState } from 'react';
import './NavBar.sass';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png'
// import { useState } from 'react';

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return(
        <nav className='navbar'>
            <img src={logo} alt="Logo" className='logo' />
            <div className='desktopMenu'>
                <Link activeClass="active" to='about' spy={true} smooth={true} offset={-150} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to='tech' spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to='projects' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>
                <Link activeClass="active" to='clients' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Clients</Link>
            </div>
            <button className='desktopMenuBtn' onClick={() => {
                document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactImg} alt='' className='desktopMenuImg'/>Contact Me</button>

                <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className='navMenu' style={{display: showMenu? 'flex': 'none'}}>
                <Link activeClass="active" to='about' spy={true} smooth={true} offset={-150} duration={500} className="listItem" onclick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to='tech' spy={true} smooth={true} offset={-100} duration={500}className="listItem" onclick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass="active" to='projects' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onclick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass="active" to='clients' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onclick={()=>setShowMenu(false)}>Clients</Link>
                <Link activeClass="active" to='clients' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onclick={()=>setShowMenu(false)}>Contact</Link>
            </div>    
        </nav>
    )
}

export default NavBar;