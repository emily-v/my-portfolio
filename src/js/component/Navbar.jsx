import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

//import {Consumer} from "../stores/AppContext.jsx";

function Navbar(props){
    return (
        <div>
            <header className="bg-light">
                <div className="row py-3">
                    <div className="col-md-6 d-flex justify-content-center justify-content-md-start">
                        <h1 className="pl-md-3">Emily Vong</h1>
                    </div>
                    <div className="col d-flex justify-content-center justify-content-md-end align-items-end">
                        <h3 className="pr-md-3">Full-Stack Web Developer</h3>
                    </div>
                </div>
            </header>
            <nav className="navbar navbar-expand-sm navbar-dark bg-secondary navbar-toggleable-md">
                <button className="navbar-toggler mx-auto" type="button" data-toggle="collapse" data-target="#navbarToggleContainer">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggleContainer">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item active mx-3">
                            <Link to="#projects" className="nav-link">Projects</Link>
                        </li>
                        <li className="nav-item active mx-3">
                            <Link to="#about" className="nav-link" href="#">About</Link>
                        </li>
                        <li className="nav-item active mx-3">
                            <Link to="#contact" className="nav-link" href="#">Contact</Link>
                        </li>
                        <li className="nav-item active mx-3">
                            <Link to="#resume" className="nav-link" href="#">Resume</Link>{/*make this link to open/download resume in new tab*/}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;