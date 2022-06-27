import React from "react";
import './Projects.css'
import pokedex from './pokedex_site.png';
import tic_tac from './Tictactoe_app.PNG';

export default function Project()
{
    return(
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
                        <li className="project_point">Desc: Create a tic tac toe game based on the state <br/> of each button to determine the winner.</li>
                    </ul>
                </div>

                <div className="project">
                    <h2>Pokedex</h2>
                    <img src={pokedex} alt="pokedex screenshot" width="90%" className="pokedex_img"/>
                </div>
                <div className="project">
                    <h2>Weather and News Site</h2>
                </div>
            </div>
        </div>
    )
}