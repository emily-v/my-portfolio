import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Provider} from "./stores/AppContext.jsx";

import {Home} from "./views/Home.jsx";



export default class Layout extends React.Component {
    
    constructor(){
        super();
    
        this.state = {
            "projects": [
                { 
                    image: "https://image.ibb.co/dwhNkz/final_project_screenshot_home.png",
                    title:"Blog, Gallery and E-Commerce app",
                    description: "Final class project with user and shopping cart functionality using Bootstrap, React.js with React Router and Context API, headless WordPress and PHP",
                    repoUrl: "https://github.com/emily-v/final-project-emily-keshaunda",
                    liveUrl: ""
                }
            ]
        };
        
    }

    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Provider value={{state:this.state}}>
                            <Route exact path="/" component={Home} />
                        </Provider>
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}
