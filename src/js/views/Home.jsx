import React from 'react';

//include images into your bundle
//import rigoImage from '../../img/rigo-baby.jpg';

import Navbar from '../component/Navbar.jsx';

//create your first component
export class Home extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <div className="container">
                    <Navbar />
                    {/*-----BEGIN JUMBOTRON-----*/}
                    <div className="jumbotron">
                        <div className="row">
                            <div className="col-md-6 text-center">
                                <img src="http://via.placeholder.com/600x450" alt="hero" className="img-fluid"/>
                            </div>
                            <div className="col px-sm-3">
                                <p className="lead pt-3 pt-md-0">
                                    <span className="h4">Greetings!</span> Lorem ipsum dolor amet activated charcoal laboris mollit mlkshk. Gastropub distillery incididunt twee paleo af nulla forage. Please view my projects and feel free to contact me with feedback, questions or interest!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
