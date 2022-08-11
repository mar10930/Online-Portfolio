import React, { useState } from "react";
import "./App.css";
import TypeAnimation from 'react-type-animation';
import AboutMe from './AboutMe';
import Projects from './Projects'
import Skills from './Skills'
import {GiHamburgerMenu} from 'react-icons/gi';
import {Link} from 'react-scroll';
import {SiGithub, SiLinkedin, SiLeetcode}  from 'react-icons/si';
function App()
{
  const [shown,set_shown] = useState(false);

  const open_mobile = () =>
  {
    if(shown === true)
    {
      set_shown(false);
    }
    else
    {
      set_shown(true);
    }
  }

  return(
    <div className="wrapper">
      <div className="def_wrapper">
        <nav className="navBar">
          <h1 className="title">About Mario</h1>
          <ul className="bttn_list">
              <li className="nav_bttn" ><Link to='about_section' smooth={true}>About Me</Link></li>
              <li className="nav_bttn"><Link to="project_section" smooth={true}>Projects</Link></li>
              <li className="nav_bttn"><Link to="skill_section" smooth={true}>Skills</Link></li>
            <GiHamburgerMenu className="mobile_icon" id="hamburger" onClick={open_mobile} size={25}/>
          </ul>
          { shown && (
          <div className="mobile_menu">
              <div className="mobile_item"><Link to='about_section' smooth={true}>About Me</Link></div>
              <div className="mobile_item"><Link to="project_section" smooth={true}>Projects</Link></div>
              <div className="mobile_item"><Link to="skill_section" smooth={true}>Skills</Link></div>
          </div>
          )
        }
        </nav>
        
        <div className="def_contain">
          <div className="name_div">
            <TypeAnimation
              cursor={true}
              sequence= {["Mario",1000,""]}
              wrapper="h2"
              className="name"
              repeat={Infinity}
            />
          </div>
          <div className="noun">
            <h3>-NOUN</h3>
          </div>

          <div className="defn_div">
            <p className="definition"><i>defn. </i> An individual who is a hardworker
              and always brings his a-game. This individual enjoys to be challenged
              and is always ready to learn something new.
            </p>
          </div>
          <div className="socials_div">
            <ul className="socials_list">
              <li className="social">
                <a href="https://www.linkedin.com/in/mario-luja-452308200/" target="_blank">
                  <SiLinkedin size={25} className="social_logo"/>
                </a>
              </li>
              <li className="social">
                <a href="https://github.com/mar10930" target="_blank">
                  <SiGithub size={25} className="social_logo"/>
                </a>
              </li>
              <li className="social">
                <a href="https://leetcode.com/mario4education/" target="_blank">
                  <SiLeetcode size={25} className="social_logo"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <AboutMe/>
      <Projects/>
      <Skills/>
    </div>
  );

}


export default App;

