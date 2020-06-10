import React from 'react';
import ReactDom from 'react-dom';
import { render } from '@testing-library/react';
import { fireEvent, wait } from '@testing-library/react';
// custom
import Footer from './Footer';
import { addBrowserRouter } from "../../common/util/RouterHelper";

/**
 * TDD Objectives
 * 1. // Check if the Component Renders without any issues
 * 2. // TODO: Test SVG icon links - navigation to external sites
 **/

describe(' Footer - Component renders ', ()=>{
    it ('...without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(addBrowserRouter(<Footer/>), div);
        ReactDom.unmountComponentAtNode(div);
    });
});
