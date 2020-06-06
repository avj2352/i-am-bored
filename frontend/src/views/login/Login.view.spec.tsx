import React from 'react';
import ReactDom from 'react-dom';
import { render } from '@testing-library/react';
import { fireEvent, wait } from '@testing-library/react';
// custom
import LoginView from './Login.view';
import { addBrowserRouter } from "../../common/util/RouterHelper";

/**
 * TDD Objectives
 * 1. // Check if the Component Renders without any issues
 * 2. // TODO: Page fade-in once the image has been loaded
 * 3. // TODO: on clicking "Continue" button - should trigger async call
 * 4. // TODO: on Promise resolve - should redirect to dashboard page
 * 5. // TODO: on Promise reject - should display - "Error signing in, Please try again"
 * 6. // TODO: on clicking About link - should route to AboutView page
 **/

describe(' LoginView - Component renders ', ()=>{
    it ('...without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(addBrowserRouter(<LoginView/>), div);
        ReactDom.unmountComponentAtNode(div);
    });
});
