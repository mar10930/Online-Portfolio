import React from 'react';
import './Skills.css';
import {DiJava} from 'react-icons/di';
import {DiJsBadge} from 'react-icons/di';
import {DiHtml5} from 'react-icons/di';
export default function Skills()
{
    return(
        <div className="skills_container">
            <div className="skills_title_div">
                <h2 className='skills_title'>Skills</h2>
            </div>
            <div className="skills_row_1">
                <div className='skills_card'>
                    <div className='icon_div'>
                        <DiJava className='skills_icon' size={60} />
                    </div>
                    <div className='title_skill_div'>
                        <h3 className='skills_name'>Java</h3>
                    </div>
                    <div className='skill_desc_div'>
                        <p className='skill_desc'>
                            Java is my most proficient programming language, <br/>
                            as I have hade 3 years of experience with java. <br/>
                            I have created some personal projects using java. <br/><br/>
                            These include: <br/><br/>
                            <ul className='skills_projects'>
                                <li>Android Tic Tac Toe App</li>
                                <li>Grade Buddy App (work in progress)</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className='skills_card'>
                    <div className='icon_div'>
                        <DiJsBadge className='skills_icon' size={60} />
                    </div>
                    <div className='title_skill_div'>
                        <h3 className='skills_name'>Javascript</h3>
                    </div>
                    <div className='skill_desc_div'>
                        <p className='skill_desc'>
                            Javascript is a language I have been learning <br/>
                            recently. I have used javascript for 6 months, <br/>
                            in order create web apps. <br/><br/>
                            These include: <br/><br/>
                            <ul className='skills_projects'>
                                <li>Pokedex using the pokeapi rest api</li>
                                <li>Grade Buddy App (work in progress)</li>
                                <li>Online Portfolio</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className='skills_card'>
                    <div className='icon_div'>
                        <DiHtml5 className='skills_icon' size={60} />
                    </div>
                    <div className='title_skill_div'>
                        <h3 className='skills_name'>HTML 5</h3>
                    </div>
                    <div className='skill_desc_div'>
                        <p className='skill_desc'>
                            HTML is a language I have known for about a year, <br/>
                            and have decided to learn on my own. I am very <br/>
                            familiar with the syntax and use it for<br/>
                            any project that will be hosted on the web.<br/><br/>
                            These include: <br/><br/>
                            <ul className='skills_projects'>
                                <li>Pokedex using the pokeapi rest api</li>
                                <li>Grade Buddy App (work in progress)</li>
                                <li>Online Portfolio</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>

            <div className='skills_row_2'>

            </div>
        </div>
    )
}