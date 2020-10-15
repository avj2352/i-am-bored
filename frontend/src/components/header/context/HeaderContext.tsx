/**
 * PAJ - Creating a Global Shared State using Context API
 * state defined in this AppProvider will be used throughout the context of our application
 */
import React, { FunctionComponent } from 'react';
// custom
export enum HEADER_ACTION {
    ABOUT = 'about',
    TIMER = 'timer',
    TODO = 'todo',
    QUOTES = 'quotes',
    SETTINGS = 'settings',
    TIMER_PANEL_CHANGE = 'timer-panel-change',
}

export interface IHeaderContextState {
    name: HEADER_ACTION;
    timerPanelState: number;
};

const contextDefaultState: IHeaderContextState = {
    name: HEADER_ACTION.TIMER,
    timerPanelState: 0,
};

export const HeaderStateContext = React.createContext<IHeaderContextState>(contextDefaultState); // Separate context for storing state

export const HeaderDispatchContext = React.createContext({}); // Separate context for updating state

const useHeaderContextReducer = (state: IHeaderContextState, action: {type: HEADER_ACTION, payload?: number | string}): any => {
    const { payload } = action;
    switch (action.type) {
        
        case HEADER_ACTION.ABOUT:
            return {...state, name: HEADER_ACTION.ABOUT};

        case HEADER_ACTION.TIMER:
            return {...state, name: HEADER_ACTION.TIMER};

        case HEADER_ACTION.QUOTES:
            return {...state, name: HEADER_ACTION.QUOTES};

        case HEADER_ACTION.TODO:
            return {...state, name: HEADER_ACTION.TODO};
            
        case HEADER_ACTION.SETTINGS:
            return {...state, name: HEADER_ACTION.SETTINGS};
        
        case HEADER_ACTION.TIMER_PANEL_CHANGE:
            // console.log('TIMER PANEL CHANGED TO: ', payload);
            return {...state, timerPanelState: payload};
                
        default:
            throw new Error(`Sorry...Unknown Header NAME: ${action.type}`);
    }
};

export const HeaderContextProvider: FunctionComponent<any> = ({children}) => {

    const [state, dispatch] = React.useReducer( useHeaderContextReducer, {
        name: HEADER_ACTION.TIMER,
        timerPanelState: 0,
    });
    return (
        <HeaderStateContext.Provider value={state}>
            <HeaderDispatchContext.Provider value={dispatch}>
                {children}
            </HeaderDispatchContext.Provider>
        </HeaderStateContext.Provider>
    )
};

