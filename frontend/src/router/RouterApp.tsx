import React, { FunctionComponent } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// custom
import HomeView from "../views/home/Home.view";
import LoginView from "../views/login/Login.view";

const RouterApp: FunctionComponent = () => {
    return (
        <Router>
            <Switch>
                <Route path="/app" component={HomeView}/>
                <Route path="/login" component={LoginView} /> 
                <Redirect from="/" to="/app" />
            </Switch>
        </Router>
    );
};

export default RouterApp;