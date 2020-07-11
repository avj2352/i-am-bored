import React from 'react';
import ReactDom from 'react-dom';
import { render } from '@testing-library/react';
import { fireEvent, wait } from '@testing-library/react';
// custom
import AddGroup from './AddGroup';
import { addBrowserRouter } from "../../../../common/util/RouterHelper";

/**
 * TDD Objectives
 * 1. // Check if the Component Renders without any issues
 * 2. // TODO: Form Validation Test
 * 3. // TODO: on Success - Send API method
 **/

describe(' AddGroup - Component renders ', ()=>{
    it ('...without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(addBrowserRouter(<AddGroup/>), div);
        ReactDom.unmountComponentAtNode(div);
    });
});
