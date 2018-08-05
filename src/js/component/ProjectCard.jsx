import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

//import {Consumer} from "../stores/AppContext.jsx";

function ProjectCard(props){
    return (
        <div className="col-12 col-sm-6 col-md-4">
            <div className="card mb-3">
                <img className="card-img-top" src="http://via.placeholder.com/300x200"/>
                <div className="card-body">
                    <h5 className="card-title">
                        This is the Project Title
                    </h5>
                    <p className="card-text">
                        This is a short description of the project that I worked on.
                    </p>
                    <button type="button" className="btn btn-outline-primary">GH view code</button>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;