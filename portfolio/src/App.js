import React from "react";
import "./App.css";
import TypeAnimation from 'react-type-animation';

function App()
{
  return(
    <div className="wrapper">
      <nav className="navBar">
        <h1 className="title">About Mario</h1>
        <ul className="bttn_list">
          <li className="nav_bttn">About Me</li>
          <li className="nav_bttn">Projects</li>
          <li className="nav_bttn">Skills</li>
        </ul>
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
        <button className="resume_button"><b>Download Resume</b></button>
      </div>
    </div>
  );
}


export default App;

