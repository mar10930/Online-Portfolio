import React from "react";
import './aboutMe.css';
import asu from "./ASU-logo.png";

export default function AboutMe()
{

    return(
            <div className="about_me">
                <div className="first_AboutMe">
                    <div className="title_div">
                        <h2 className="title_AboutMe">About Me</h2>
                    </div>
                </div>
                <div className="second_AboutMe">
                    <div className="images">
                        <img src={asu} alt="asu logo" className="asu" width={250}/>
                    </div>
                    <div className="description">
                        <p className="desc">
                            I am a computer science major attending <br/>
                            Arizona State university, and plan to graduate<br/>
                            in the summer of 2023. I have always had an interest in<br/>
                            computers growing up and was always fascinated in the way they<br/>
                            worked. My current interest in the tech field is in web development,<br/>
                            when I learned about rest apis through my distributed software<br/>
                            development course.
                        </p>
                    </div>
                </div>
            </div>
    )
}

