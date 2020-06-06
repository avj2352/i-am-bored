import React from 'react';
import ReactDom from 'react-dom';
import { render } from '@testing-library/react';
import { fireEvent, wait } from '@testing-library/react';
// custom
import Header from './Header';
import { addBrowserRouter } from "../../common/util/RouterHelper";

/**
 * TDD Objectives
 * 1. // Check if the Component Renders without any issues
 * 2. // TODO: Test Theme-Toggle Button
 * 3. // TODO: Header Component to accept a prop - type = 'simple' | 'nav'.
 * 4. // TODO: Based on prop - type, show / hide additional navbar components
 **/

describe(' Header - Component renders ', ()=>{
    it ('...without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(addBrowserRouter(<Header/>), div);
        ReactDom.unmountComponentAtNode(div);
    });
});
