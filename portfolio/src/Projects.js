import React from "react";
import './Projects.css'
import pokedex from './images/pokedex_site.png';
import tic_tac from './images/Tictactoe_app.PNG';
import { Element} from "react-scroll";
export default function Project()
{
    return(
        <Element id="project_section">
            <div className="project_div">
                <div className="title_div">
                    <h2 className="project_title">Projects</h2>
                </div>
                <div className="projects">
                    <div className="project">
                        <h2>Tic-Tac-Toe</h2>
                        <img src={tic_tac} alt="tic tac toe app" width="50%" className="tic_tac"/>
                        <ul className="project_desc">
                            <li className="project_point">Language: Java + Android Studio</li>
                            <li className="project_point">Desc: Create a tic tac toe game based on the state of each button to determine the winner.</li>
                        </ul>
                        <div className="button_div">
                            <div className="buttons">
                                <a href="https://github.com/mar10930/TicTacToe-Android-Java-" target="_blank" rel="noopener noreferrer">
                                    <button className="button">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="project">
                        <h2>Pokedex</h2>
                        <img src={pokedex} alt="pokedex screenshot" width="90%" className="pokedex_img"/>
                        <ul className="project_desc">
                            <li className="project_point">Language: HTML + CSS + Javascript</li>
                            <li className="project_point">Desc: Created a pokedex utilizing the pokeapi rest api to display the data of 151 pokemon species.</li>
                        </ul>
                        <div className="button_div">
                            <div className="buttons">
                                <a href="https://github.com/mar10930/Pokedex-Site" target="_blank" rel="noopener noreferrer">
                                    <button className="button" id="code_bttn">Code</button>
                                </a>
                                <a href="https://mar10930.github.io/Pokedex-Site/" target="_blank" rel="noopener noreferrer">
                                    <button className="button" id="website_bttn">Website</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}