import React from 'react';
import ReactDom from 'react-dom';
import { render } from '@testing-library/react';
import { fireEvent, wait } from '@testing-library/react';
// custom
import DashboardLayout from './Dashboard.layout';
import { addBrowserRouter } from "../../common/util/RouterHelper";

/**
 * TDD Objectives
 * 1. // Check if the Component Renders without any issues
 * 2. // Check user sign in (mock) on page load
 * 3. // TODO: Display Welcome User Toaster message
 * 4. // TODO: Toggle Sidebar on clicking Sidebar icon
 **/

describe(' DashboardLayout - Component renders ', ()=>{
    it ('...without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(addBrowserRouter(<DashboardLayout/>), div);
        ReactDom.unmountComponentAtNode(div);
    });
});
