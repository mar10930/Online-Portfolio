import React from 'react';
import './Skills.css';
import {DiJava} from 'react-icons/di';
import {DiJsBadge} from 'react-icons/di';
import {DiHtml5,DiCss3} from 'react-icons/di';
import { Element } from 'react-scroll';
export default function Skills()
{
    
    return(
        <Element id='skill_section'>
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
                
                <div className='skills_row_1'>
                    <div className='skills_card'>
                        <div className='icon_div'>
                            <DiCss3 className='skills_icon' size={60} />
                        </div>
                        <div className='title_skill_div'>
                            <h3 className='skills_name'>CSS</h3>
                        </div>
                        <div className='skill_desc_div'>
                            <p className='skill_desc'>
                                CSS is a language I have known for about a year, <br/>
                                and have decided to learn on my own. I use this <br/>
                                language for any project that will be hosted on the web.<br/><br/>
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
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACu0lEQVRoge3aO2tUQRQH8F+M+H4UmqBoGm20shMs7EREEDRoIYKNr0
                            r8CL4aH5VG/AA2go2JARtBGztR8VHYKKJRLMS3iM+1mETW693s7Ny72Vz1Dwd25+45Z/57z5yZOTP8x7+DNRjE61EZHG2rDPpwDj9Qy5FhLOtY7yIwG4fwST6BevmMU5jfkZ42wBTsxAvNCWTlJQ5g6oT3OoN1
                            uKN1All5gG0T3HewQoj1ogSycgWrJoLAAiG2v7aBxJh8F5LFonYQmCbE8ps2EsjKByF5zCyDQJcQu48mkEBWnmKvkFSSsBrXO0ggKzewthUCXTip8YTWSfmBE7FE9hV09gQD2CBkt9mYjiVYj+N4XNDH7hgi9x
                            ONj4w66I7w0Y3tBQjdjSHyJcHwEObGGM9gLs4n+PsSY7xVo6cVyCjCmDyV4LdUIkMFSdSTudopIiMah1MvjuK2MLG9xy0cQU/mt31CeLWaJUsjsquB/la8G0fvNbZgFg7iY4sESiXyRH522irun/2G54kESiUy
                            kKPXa/w3Ubb8htSBejmnbb+0FEwY7F0Jz34hlcjDnLZNibbahpjXOidH732kbkycN3tWWmjlveqoAdgupBJZnNOWF27NkP1367+P9+wPpBJZntM2nGirbYiJ7TM5ej14G6lfevpNJfJUfi2qXygeNNOfNBNiDX
                            sa6Pcbv0jxCptNkiVKDc80ngAX4jBuCmn53ejnQ0JJqR4dXzTWcEl5y/hrnSRSE9ZdRTdWAwl+myJlqzuMeQkk5uFCgr+ore69BMM1IQvtFVdZn4odwnYgxVdU8WFPovExGcFZbMRKYV02A0uFEtHJAgTGpNGm
                            7g8cN3kLdMdiSYyh8iXTevwVRex6VP5YIYvKH/RkUfmjtywqfxhaj7/ieLoelb8wkEXlr3Bkkb1Uc1HFLtX8RxH8BM98JvEvbyBBAAAAAElFTkSuQmCC"></img>
                        </div>
                        <div className='title_skill_div'>
                            <h3 className='skills_name'>C++</h3>
                        </div>
                        <div className='skill_desc_div'>
                            <p className='skill_desc'>
                                C++ is a language I have known for 2 years, <br/>
                                I mainly used this language through several <br/>
                                college courses. <br/><br/>
                                Classes I have used C++: <br/><br/>
                                <ul className='skills_projects'>
                                    <li>Data Structures and Algorithms</li>
                                    <li>Principles of programming Languages</li>
                                    <li>Intro to different programming languages</li>
                                </ul>
                            </p>
                        </div>
                    </div>

                    <div className='skills_card'>
                        <div className='icon_div'>
                            <img width={50} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAFuklEQVR4nO2dS2hcV
                            RjHf5M2WrEmxVcVLdj6qpTYB6ZW1AGhCi4KYu1GRFy5E2kR3LW+HxVFCS7UCurGjUhrMQs1KlYxVSHowj6sdRFjW2NMsZXaRB0X3wxObzOZc+/9zuPOPT/4Q8
                            gc7vnO+e6cOc/vQCQSiUQi5aMPGABGgMm6Rur/6/NoV+lYBgwCtTYarKeNWOI84CVgmvbOaOgf4C1goQd7O5YzgAeBo5g7IqnjwCPAPMe2dxzrgB/J7oikRoF
                            7gYrLQnQC/cAu9ByR1FfAzc5KU2AWIW3+v9hzRrN2AkuclKxgzEfa+BO4cUSzTiKdhV7rpSwAXUibfhj3jkjqN6TzMNdqiQNmLfAt/h2R1F5gg8VyB8dSpO32
                            XfHt9BGw3FIdBEGWgZ1vNQaWF1moD29oDOx8qzGwPEu5bpxSQdrig/ivUC2NAvcjnZFCsRr4HP8VaEtfA1W12rKI64Gdb+0ELlepOWV8Dux8awrprCzIXYsKz
                            EXa1BAGdr41ATyMdGK8sBb4bhYDy6p9OB5YXgO8r1yITtQQsCJjHRtRQcYTUwEUtij6G/ltVe8mdwHvBlDAouodDJ1iunK2BfG0b44AnwDDyCTgT8A48CdSlh
                            6kt7MEuBaZi7oNuMCHsQm2AI9pPGgRfuefJpCtPasz2t8FrAFexO/0zTRwacYynMJTngowBmwEztYoRJ1zgAfw101/QqMQux0bPQVsRdcRSXqAZ5HVQpdlG9Y
                            wftyhwfuBlRpGG9KP7q6WdhrXMNqVsduRN9c1PcCODPZmVW5cGPkGftey5wDbZrCrlA55jTA2rlUQW0rtkO3I2xkK3cAHlNQh+/Hzm9GOW5C19FI5ZIp8valV
                            wKPIqH0PsuZ9EhlffIZ0aaukawovBF7FrjOCdcjWDHZUgLuQKRPTfPYB9zF7s9gNbMLdKD432gaNkX7Qtxj4Mkeew8BVMzz3dtI5uCMdsjFl/lV0BqdHkYlGE
                            Of4WtPJjaYxE6T7dlTRnd74CxnzmDyzXT1krafcaDpkIEW+lwG/Kuef503uSIf0G+ZZId9vRnSIgY5g3g3doJhvdEgLvW2YXwX3PR+VikqQKR+Xe1RN1wJWAl
                            fbNCRkXDpkr2G6O6xaETguHXLAMF2pT8e6XIOYNEx3iVUrWpNs35MdkLSfZ8LlN+S4YbqLrVoROCEePLHR4ykMLh0y3zDdIatWBI5Lh5xrmG7MqhWtqSSk/bk
                            RLh1ietJol1UrAselQ5Yaptth1YrAcemQGwzTjSArfZEW+JhcXK+Yb5xcnEXXG+ZZAb5QzrsQDnE9DrnHMF0NuBtZoIok0HzrfC/hniAu4Z6mTSnzr6KzlDsJ
                            3Fp/Ztzk0KRfMB+1N1hMvt+UIeDKGZ4btwHV9VwGOyrAncD3KfLZQ/v1ldJvlKshW0lX5bBpBXKIcgip9GPIFp9DwKfA08BNxK2kqfQDcbN1Jmy+Le8RVtDJb
                            uBDSvoNaWgb4RzYeR375c2NbQNrwJv4P9LmwhmFcUgNab58BDPuxW2U1Ny4PBZ9ALhOw2hD1uA2JqTKsWjXgQOmgReQqAu2WAA8j/vIRiqBA550bHRDh4GHSD
                            +qn40eJMSUr131KqE1fAef+R14GWlesvTG5gA3Ikch/vBYDqPgM6YF3IwcsvTNOKeGZzqIBNE/hiwl9NZ1BXIx2HJkQvF8H8Ym2Aw8rvWwLiQIl6+3q+gyDmC
                            WhhjiL72shfhrJgbBNNPHuI1sFMPEtpDzMLHNxEDK/6sRSPnMXDWqRNlDjb9CGD2504jB+AOl06+r+IaCXFfRTCde6PIzBb3QpZlOufLoGXTn1bwTLwULlHht
                            XqDEiyUDJF69GijxcuJAidd3B0q84D5Q1qEbLH8U+c0KYWNeYdEYWDbusp3n2PaOJsvAsjGwW+jB3tKwDBikvTMG62kjjuhDtvaMIMfVJut/D9Q/i0QikUikV
                            PwHZBRJF5ooq/kAAAAASUVORK5CYII="/>
                        </div>
                        <div className='title_skill_div'>
                            <h3 className='skills_name'>C#</h3>
                        </div>
                        <div className='skill_desc_div'>
                            <p className='skill_desc'>
                                C# is a language I recenlty learned during my spring <br/>
                                2022 semester. I used it in my distributed software <br/>
                                engineering course. Where I learned how to create web <br/>
                                applications and to access REST and SOAP api services<br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}