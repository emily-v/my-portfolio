import React from 'react';

//include images into your bundle
//import rigoImage from '../../img/rigo-baby.jpg';

import Navbar from '../component/Navbar.jsx';

//create your first component
export class Home extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <div className="text-center mt-5">
                    <h1>Hello World!</h1>
                    <a href="#" className="btn btn-success">Yay Bootstrap!</a>
                </div>
            </React.Fragment>
        );
    }
}
