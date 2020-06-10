import React, { FunctionComponent } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import LoginView from "../views/login/Login.view";
import DashboardLayout from "../layouts/dashboard/Dashboard.layout";
import AboutView from "../views/about/About.view";

const RouterApp: FunctionComponent = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={LoginView}/>
                <Route path="/about" component={AboutView}/>
                <Route path="/dashboard" component={DashboardLayout}/>
                <Redirect exact from="/" to="/login" />
            </Switch>
        </Router>
    );
};

export default RouterApp;