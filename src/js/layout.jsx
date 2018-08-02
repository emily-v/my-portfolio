import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {Home} from "./views/Home.jsx";

//import {Provider} from "./stores/AppContext.jsx";

export default class Layout extends React.Component {
    
    constructor(){
        super();
    }

    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}
