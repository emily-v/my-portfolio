import React from "react";
//import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//import {Consumer} from "../stores/AppContext.jsx";

function Navbar(props) {
	return (
		<div id="home">
			<header>
				<div className="sectionWidth row py-3">
					<div className="col-md-6 d-flex justify-content-center justify-content-md-start">
						<h1 className="pl-md-3">
							<a className="text-dark" href="#home">
								Emily Vong
							</a>
						</h1>
					</div>
					<div className="col d-flex justify-content-center justify-content-md-end align-items-end">
						<h3 className="text-dark text-center">
							Full-Stack Web Developer
						</h3>
					</div>
				</div>
			</header>
			<nav className="navbar navbar-expand-sm navbar-dark navbar-toggleable-md">
				<button
					className="navbar-toggler mx-auto"
					type="button"
					data-toggle="collapse"
					data-target="#navbarToggleContainer">
					<span className="navbar-toggler-icon" />
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarToggleContainer">
					<ul className="navbar-nav mx-auto">
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
			</nav>
		</div>
	);
}

export default Navbar;
