import React from 'react';
//import { Link } from "react-router-dom";

//include images into your bundle
//import rigoImage from '../../img/rigo-baby.jpg';
//import { resume } from '../../resume/emily-vong-resume-2018.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import Navbar from '../component/Navbar.jsx';
import ProjectCard from '../component/ProjectCard.jsx';

//create your first component
export class Home extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <div className="container">
                    <Navbar />
                    {/*-----BEGIN JUMBOTRON-----*/}
                    <div className="jumbotron ">
                        <div className="row">
                            <div className="col-md-6 text-center">
                                <img src="http://via.placeholder.com/600x450" alt="hero" className="img-fluid"/>
                            </div>
                            <div className="col px-sm-3">
                                <div className="row">
                                    <p className="lead pt-3 pt-md-0 px-3 px-sm-0">
                                        <span className="h4">Greetings!</span> Lorem ipsum dolor amet activated charcoal laboris mollit mlkshk. Gastropub distillery incididunt twee paleo af nulla forage. Please view my projects and feel free to contact me with feedback, questions or interest!
                                    </p>
                                </div>
                                <div className="row justify-content-around my-2">
                                    <a className="btn btn-primary" role="button" href="#projects">Projects</a>
                                    <a className="btn btn-primary" role="button" href="#contact">Contact</a>
                                    <a className="btn btn-primary" href="https://drive.google.com/file/d/1rWEQyzsUxSshGaTA6laEEfYg5NtrTbZv/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-----BEGIN MY PROJECTS-----*/}
                    <section id="projects">
                        <div className="row mx-0">
                            <h4>My Projects</h4>
                            <div className="row">
                                <ProjectCard />
                                <ProjectCard />
                                <ProjectCard />
                                <ProjectCard />
                                <ProjectCard />
                                <ProjectCard />
                            </div>
                        </div>
                    </section>
                    {/*-----BEGIN ABOUT ME-----*/}
                    <section id="about">
                        <div className="row mx-0">
                            <h4>About Me</h4>
                        </div>
                        <div className="row mx-0">
                            <div className="col-md-8">
                                <p>Lorem ipsum dolor amet vexillologist kickstarter quinoa pug echo park, pop-up kogi in in post-ironic distillery lorem chartreuse. Celiac sed dolore ennui sunt veniam in glossier typewriter ethical unicorn sint. Nulla meditation yuccie vexillologist. Ramps fixie blue bottle flannel, fam austin unicorn hella umami cupidatat. Viral photo booth non art party af. Cornhole exercitation consectetur palo santo vegan kombucha ut viral whatever marfa listicle.</p>
                                <p>Elit farm-to-table meditation williamsburg roof party. Live-edge butcher anim, neutra etsy helvetica jianbing. Salvia iPhone consectetur aesthetic tilde coloring book culpa sriracha sartorial aliqua proident dolore ut art party cloud bread. In kale chips flannel iPhone chartreuse microdosing cornhole.</p>
                            </div>
                            <div className="col">
                                <img src="http://via.placeholder.com/600x500" alt="headshot" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="row mx-0">
                            <h5>Education</h5>
                            <ul>
                                <li><strong>Miami-Dade College</strong> and <strong>4Geeks Academy</strong>; 14-week (300+ hours) project-based software development program teaching HTML5, CSS3, SASS, React.js, Webpack, PHP, Wordpress, RESTful API&apos;s, MySQL, HTTP Architecture, AJAX, MVC, ORM, Git <span className="text-secondary">2018</span></li>
                                <li><strong>Skillcrush E-Learning</strong>; Self-paced Break Into Tech Blueprint teaching foundations of HTML/CSS, Responsive Web Development, JavaScript and jQuery, WordPress, Git/GitHub, web domains and hosting, freelance buisness administration; <span className="text-secondary">2017-2018</span></li>
                                <li><strong>University of Minnesota</strong>, B.S. Nutrition, <span className="text-secondary">2012</span></li>
                            </ul>
                        </div>
                    </section>
                    {/*-----BEGIN CONTACT ME-----*/}
                    <section id="contact">
                        <div className="row mx-0">
                            <h4>Contact Me</h4>
                        </div>
                        <div className="row mx-0">
                            <div className="col-12 col-sm-8 col-md-6 text-center text-md-left">
                                <h5 className="d-block"><FontAwesomeIcon icon={faEnvelope} /> emily.vong25@gmail.com</h5>
                                <a className="btn btn-outline-primary mt-3" href="https://drive.google.com/file/d/1rWEQyzsUxSshGaTA6laEEfYg5NtrTbZv/view?usp=sharing" target="_blank" rel="noopener noreferrer">View/Download My Resume</a>
                            </div>
                            <div className="col">
                                <ul className="list-inline text-center text-md-right mt-4 mt-sm-0">
                                    <li className="list-inline-item px-2 px-md-3"><FontAwesomeIcon icon={faGithub} className="h3" /></li>
                                    <li className="list-inline-item px-2 px-md-3"><FontAwesomeIcon icon={faLinkedin} className="h3" /></li>
                                    <li className="list-inline-item px-2 px-md-3"><FontAwesomeIcon icon={faTwitter} className="h3" /></li>
                                </ul>
                            </div>
                        </div> 
                    </section>
                    {/*-----BEGIN FOOTER-----*/}
                    <footer className="mt-4">
                        <div className="navbar navbar-expand-sm navbar-dark bg-secondary">
                            <ul className="navbar-nav mx-auto text-center">
                                <li className="nav-item active mx-3">
                                    <a href="#home" className="nav-link">Home</a>
                                </li>
                                <li className="nav-item active mx-3">
                                    <a href="#projects" className="nav-link">Projects</a>
                                </li>
                                <li className="nav-item active mx-3">
                                    <a href="#about" className="nav-link">About</a>
                                </li>
                                <li className="nav-item active mx-3">
                                    <a href="#contact" className="nav-link">Contact</a>
                                </li>
                                <li className="nav-item active mx-3">
                                    <a href="https://drive.google.com/file/d/1rWEQyzsUxSshGaTA6laEEfYg5NtrTbZv/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="nav-link">
                                        Resume
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </React.Fragment>
        );
    }
}