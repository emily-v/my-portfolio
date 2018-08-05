import React from 'react';

//include images into your bundle
//import rigoImage from '../../img/rigo-baby.jpg';

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
                                    <button type="button" className="btn btn-primary">Projects</button>
                                    <button type="button" className="btn btn-primary">Contact</button>
                                    <button type="button" className="btn btn-primary">Resume</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-----BEGIN MY PROJECTS-----*/}
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
                </div>
            </React.Fragment>
        );
    }
}
