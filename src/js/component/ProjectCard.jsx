import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

//import {Consumer} from "../stores/AppContext.jsx";

function ProjectCard(props){
    return (
        <div className="col-12 col-sm-6 col-md-4">
            <div className="card mb-3">
                <img className="card-img-top projectFeaturedImage p-1" src={props.image}/>
                <div className="card-body">
                    <h5 className="card-title">
                        {props.title}
                    </h5>
                    <p className="card-text">
                        {props.description}
                    </p>
                    <a role="button" className="btn btn-outline-primary" href={props.repoUrl}><FontAwesomeIcon icon={faGithub} /> view code</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;

ProjectCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    repoUrl: PropTypes.string,
    liveUrl: PropTypes.string
};