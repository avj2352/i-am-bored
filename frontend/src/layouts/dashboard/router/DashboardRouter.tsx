import React, { FunctionComponent } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// custom
import HomeView from "../../../views/home/Home.view";

const DashboardRouterApp: FunctionComponent = () => {
    return (
        <Router>
            <Switch>
                <Route path="/app/" component={HomeView}/>
            </Switch>
        </Router>
    );
};

export default DashboardRouterApp;