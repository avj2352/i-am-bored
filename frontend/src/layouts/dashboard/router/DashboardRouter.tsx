import React, { FunctionComponent } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomeView from "../../../views/home/Home.view";
import GroupsView from "../../../views/groups/Groups.view";
import TagsView from "../../../views/tags/Tags.view";


const DashboardRouter: FunctionComponent = (props): JSX.Element => {
    return (
        <Switch>
            <Route path="/dashboard/home" component={HomeView} />
            <Route path="/dashboard/groups" component={GroupsView}/>
            <Route path="/dashboard/tags" component={TagsView}/>
            <Redirect from="/" to="/dashboard/home" />
        </Switch>
    );
};

export default DashboardRouter;