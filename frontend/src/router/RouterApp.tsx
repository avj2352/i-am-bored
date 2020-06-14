import React, { FunctionComponent } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import LoginView from "../views/login/Login.view";
import DashboardLayout from "../layouts/dashboard/Dashboard.layout";
import AboutView from "../views/about/About.view";

const RouterApp: FunctionComponent = () => {
    return (
        <Router>
            <Switch>
                <Route path="/dashboard" render={(props: any) => <DashboardLayout {...props} />}/>
                <Route path="/login" component={LoginView}/>
                <Route path="/about" component={AboutView}/>
                <Redirect from="/" to="/dashboard" />
            </Switch>
        </Router>
    );
};

export default RouterApp;