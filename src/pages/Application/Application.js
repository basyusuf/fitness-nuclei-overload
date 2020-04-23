import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Main from "../Main/Main";
import Error from "../Error/Error";

class Application extends Component {
    render() {
        return (
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="*" component={Error} />
                </Switch>
        );
    }
}

export default Application;