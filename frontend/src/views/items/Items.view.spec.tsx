import React from 'react';
import ReactDom from 'react-dom';
import { render } from '@testing-library/react';
import { fireEvent, wait } from '@testing-library/react';
// custom
import GroupsView from './Groups.view';
import { addBrowserRouter } from "../../common/util/RouterHelper";

/**
 * TDD Objectives
 * 1. // Check if the Component Renders without any issues
 * 2. // TODO: Page fade-in once the image has been loaded
 * 3. // TODO: on clicking Back link - should route to LoginView page
 **/

describe(' GroupsView - Component renders ', ()=>{
    it ('...without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(addBrowserRouter(<GroupsView/>), div);
        ReactDom.unmountComponentAtNode(div);
    });
});