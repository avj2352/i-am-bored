import React, { FunctionComponent } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomeView from "../../../views/home/Home.view";
import GroupsView from "../../../views/groups/Groups.view";


const DashboardRouter: FunctionComponent = (props): JSX.Element => {
    return (
        <Switch>
            <Route path="/dashboard/home" component={HomeView} />
            <Route path="/dashboard/groups" component={GroupsView}/>
            <Redirect from="/" to="/dashboard/home" />
        </Switch>
    );
};

export default DashboardRouter;