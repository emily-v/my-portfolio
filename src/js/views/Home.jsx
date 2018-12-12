import React from "react";
import { Consumer } from "../stores/AppContext.jsx";
//import { Link } from "react-router-dom";

//include images into your bundle
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import Navbar from "../component/Navbar.jsx";
import ProjectCard from "../component/ProjectCard.jsx";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="container-fluid px-0">
					<Navbar />
					{/*-----BEGIN JUMBOTRON-----*/}
					<div className="jumbotron bg-white">
						<div className="sectionWidth row">
							<div className="col-md-6 text-center pl-md-0 pr-md-4">
								<img
									src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-0.3.5&s=4d30feeda26a687fb68098509a9a24c5&auto=format&fit=crop&w=1050&q=80"
									alt="hero"
									className="img-fluid shadow"
								/>
							</div>
							<div className="col px-sm-3">
								<div className="row">
									<p className="introText pt-3 pt-md-0 px-3 px-sm-0">
										<span className="h4">Greetings!</span>{" "}
										My name is Emily, I am a full-stack web
										developer based in Miami, FL. I create
										professional and responsive websites
										with dynamic content meant to delight
										users and attract customers. My primary
										languages and tools are HTML/CSS,
										JavaScript, React.js, WordPress and PHP.
										test
									</p>
									<p className="introText px-3 px-sm-0">
										Please view my projects and feel free to
										contact me with feedback, questions or
										interest!
									</p>
								</div>
								<div className="row justify-content-around my-2">
									<a
										className="btn text-white"
										role="button"
										href="#projects">
										Projects
									</a>
									<a
										className="btn text-white"
										role="button"
										href="#contact">
										Contact
									</a>
									<a
										className="btn text-white"
										href="https://drive.google.com/file/d/1rWEQyzsUxSshGaTA6laEEfYg5NtrTbZv/view?usp=sharing"
										target="_blank"
										rel="noopener noreferrer">
										Resume
									</a>
								</div>
							</div>
						</div>
					</div>
					{/*-----BEGIN MY PROJECTS-----*/}
					<section id="projects" className="py-4">
						<div className="sectionWidth row">
							<h3 className="mb-4">My Projects</h3>
							<div className="row mx-0">
								<div className="card-deck no-gutters mx-0">
									<Consumer>
										{({ state }) =>
											state.projects.map(
												(item, index) => {
													return (
														<ProjectCard
															key={index}
															image={item.image}
															title={item.title}
															description={
																item.description
															}
															repoUrl={
																item.repoUrl
															}
															liveUrl={
																item.liveUrl
															}
															demoUrl={
																item.demoUrl
															}
														/>
													);
												}
											)
										}
									</Consumer>
								</div>
							</div>
						</div>
					</section>
					{/*-----BEGIN ABOUT ME-----*/}
					<section id="about" className="py-4">
						<div className="sectionWidth row">
							<h3 className="mb-4">About Me</h3>
							<div className="row mx-0">
								<div className="col-md-9 pr-md-5">
									<p>
										After starting my professional career
										counseling patients and clients to
										improve their health through nutrition
										and exercise I realized I wanted to help
										people in a different way. In 2017 I
										made the nerve-racking decision to start
										learning to code and take my career in a
										new direction. As a web developer I am
										excited by the opportunity to use
										innovative tools and my own creativity
										to build and contribute to solutions
										meant to improve the quality of life of
										its users in some way.
									</p>
									<p>
										Through attending group coding
										sessions/events, following developers on
										Twitter and researching developement and
										tech trends over the past 1+ years
										I&apos;ve become familiar with the
										developer culture including how
										resources and new ideas are shared.
										I&apos;m eager to be a part of this
										community in a full time role,
										especially on a team of developers in a
										supportive, learning-based environment
										where I can hone my skills and grow my
										stack.
									</p>
								</div>
								<div className="col text-center">
									<img
										src="https://image.ibb.co/cVMqv9/Emily_pic.jpg"
										alt="headshot"
										className="bioPic img-fluid shadow"
									/>
								</div>
							</div>
							<div className="row mx-0">
								<h4>Education</h4>
								<ul>
									<li>
										<strong>Miami-Dade College</strong> and{" "}
										<strong>4Geeks Academy</strong>; 14-week
										(260+ hours) project-based software
										development program teaching HTML5,
										CSS3, SASS, React.js, Webpack, PHP,
										Wordpress, RESTful API&apos;s, MySQL,
										HTTP Architecture, MVC, Git{" "}
										<span className="text-secondary">
											2018
										</span>
									</li>
									<li>
										<strong>Skillcrush E-Learning</strong>;
										Self-paced Break Into Tech Blueprint
										teaching foundations of HTML/CSS,
										Responsive Web Development, JavaScript
										and jQuery, WordPress, Git/GitHub, web
										domains and hosting, freelance buisness
										administration;{" "}
										<span className="text-secondary">
											2017-2018
										</span>
									</li>
									<li>
										<strong>University of Minnesota</strong>
										; B.S. Nutrition,{" "}
										<span className="text-secondary">
											2012
										</span>
									</li>
								</ul>
							</div>
						</div>
					</section>
					{/*-----BEGIN CONTACT ME-----*/}
					<section id="contact" className="py-4">
						<div className="sectionWidth">
							<div className="row mx-0">
								<h3 className="mb-4">Contact Me</h3>
							</div>
							<div className="row mx-0">
								<div className="col-12 col-sm-8 col-md-6 text-center text-md-left">
									<h5 className="d-block text-dark">
										<FontAwesomeIcon icon={faEnvelope} />{" "}
										emily.vong25@gmail.com
									</h5>
									<a
										className="btn mt-3"
										href="https://drive.google.com/file/d/1rWEQyzsUxSshGaTA6laEEfYg5NtrTbZv/view?usp=sharing"
										target="_blank"
										rel="noopener noreferrer">
										View/Download My Resume
									</a>
								</div>
								<div className="col">
									<ul className="list-inline text-center text-md-right mt-4 mt-sm-0">
										<li className="list-inline-item px-2 px-md-3">
											<a
												href="https://github.com/emily-v"
												className="text-dark"
												target="_blank"
												rel="noopener noreferrer">
												<FontAwesomeIcon
													icon={faGithub}
													className="h3"
												/>
											</a>
										</li>
										<li className="list-inline-item px-2 px-md-3">
											<a
												href="https://www.linkedin.com/in/emily-vong/"
												className="text-dark"
												target="_blank"
												rel="noopener noreferrer">
												<FontAwesomeIcon
													icon={faLinkedin}
													className="h3"
												/>
											</a>
										</li>
										<li className="list-inline-item px-2 px-md-3">
											<a
												href="https://twitter.com/VongEmily"
												className="text-dark"
												target="_blank"
												rel="noopener noreferrer">
												<FontAwesomeIcon
													icon={faTwitter}
													className="h3"
												/>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</section>
					{/*-----BEGIN FOOTER-----*/}
					<footer>
						<div className="navbar navbar-expand-sm navbar-dark">
							<ul className="navbar-nav mx-auto text-center">
								<li className="nav-item active mx-3">
									<a href="#home" className="nav-link">
										Home
									</a>
								</li>
								<li className="nav-item active mx-3">
									<a href="#projects" className="nav-link">
										Projects
									</a>
								</li>
								<li className="nav-item active mx-3">
									<a href="#about" className="nav-link">
										About
									</a>
								</li>
								<li className="nav-item active mx-3">
									<a href="#contact" className="nav-link">
										Contact
									</a>
								</li>
								<li className="nav-item active mx-3">
									<a
										href="https://drive.google.com/file/d/1rWEQyzsUxSshGaTA6laEEfYg5NtrTbZv/view?usp=sharing"
										target="_blank"
										rel="noopener noreferrer"
										className="nav-link">
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
