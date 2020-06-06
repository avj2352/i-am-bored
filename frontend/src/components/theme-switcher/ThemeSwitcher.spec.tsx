import React from 'react';
import ReactDom from 'react-dom';
import { render } from '@testing-library/react';
import { fireEvent, wait } from '@testing-library/react';
// custom
import ThemeSwitcher from './ThemeSwitcher';
import { addBrowserRouter } from "../../common/util/RouterHelper";

/**
 * TDD Objectives
 * 1. // TODO: Check if the Component Renders based on prop - status value
 **/

describe(' ThemeSwitcher - Component renders ', ()=>{
    it ('...without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(addBrowserRouter(<ThemeSwitcher status={false}/>), div);
        ReactDom.unmountComponentAtNode(div);
    });
});
