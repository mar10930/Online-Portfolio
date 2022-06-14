import React from "react";
import "./App.css";

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
        <h2 className="name">Mario</h2>
        <h3>-NOUN</h3>
        <p></p>
      </div>
    </div>
  );
}


export default App;

