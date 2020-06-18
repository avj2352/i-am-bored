import React from 'react';
import ReactDom from 'react-dom';
import { render } from '@testing-library/react';
import { fireEvent, wait } from '@testing-library/react';
// custom
import BannerCard from './BannerCard';
import { addBrowserRouter } from "../../../common/util/RouterHelper";

/**
 * TDD Objectives
 * 1. // Check if the Component Renders without any issues
 * 3. // TODO: Display Cookie Banner if Local Storage Item not present
 * 4. // TODO: Hide Cookie Banner on clicking - I agree
 * 5. // TODO: Navigate to external site on clicking - Learn more
 **/

describe(' BannerCard - Component renders ', ()=>{
    it ('...without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(addBrowserRouter(<BannerCard/>), div);
        ReactDom.unmountComponentAtNode(div);
    });
});
