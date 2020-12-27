import React, { FunctionComponent } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// custom
import HomeView from "../../../views/home/Home.view";
import GroupView from "../../../views/groups/Group.view";
import {DashboardRouterContextProvider} from "./DashboardRouterContext";
import TagView from "../../../views/tags/Tag.view";
import ItemView from "../../../views/items/Item.view";

const DashboardRouterApp: FunctionComponent = () => {
    return (
        <DashboardRouterContextProvider>
            <Router>
                <Switch>
                    <Route strict path="/app/groups" component={GroupView}/>
                    <Route strict path="/app/tags" component={TagView}/>
                    <Route strict path="/app/items" component={ItemView}/>
                    <Route path="/app/" component={HomeView}/>
                </Switch>
            </Router>
        </DashboardRouterContextProvider>
    );
};

export default DashboardRouterApp;