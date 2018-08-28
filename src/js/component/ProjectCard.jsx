import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

//import {Consumer} from "../stores/AppContext.jsx";

function ProjectCard(props){
    return (
        <div className="projectCard col-sm-6 col-lg-4">
            <div className="card mx-3 mb-3">
                <img className="card-img-top projectFeaturedImage p-1" src={props.image}/>
                <div className="card-body">
                    <h5 className="card-title">
                        {props.title}
                    </h5>
                    <p className="card-text">
                        {props.description}
                    </p>
                    <div className="d-flex">
                        <a role="button" className="btn btnCard" target="_blank" rel="noopener noreferrer" href={props.repoUrl}><FontAwesomeIcon icon={faGithub} /> view code</a>
                        {
                            (props.liveUrl == null) ? <a></a> : <a role="button" className="btn btnCard ml-auto" target="_blank" rel="noopener noreferrer" href={props.liveUrl}>view live</a>
                        }
                        {    
                            (props.gifUrl == null) ? <a></a> : <a role="button" className="btn btnCard ml-auto" target="_blank" rel="noopener noreferrer" href={props.gifUrl}>view gif</a>
                        }
                        {    
                            (props.liveUrl == null && props.gifUrl == null) ? <a role="button" className="btn btnCard btnCardSmall disabled ml-auto" href=""><small>coming<br/>soon!</small></a> : <a></a>
                        }
                    </div>
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
    liveUrl: PropTypes.string,
    gifUrl: PropTypes.string
};
