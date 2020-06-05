import React, { FunctionComponent, createContext, useReducer, useContext } from 'react';

export interface IAppContextState {
    theme: 'theme-light' | 'theme-dark';
    version: string;
}

export enum CONTEXT_ACTION_TYPE {
    THEME_TOGGLE,
    SET_VERSION,
}

const initialState: IAppContextState = {
    theme: 'theme-light',
    version: '1.0.0'
};

const AppStateContext = createContext<IAppContextState>(initialState); // Separate context for storing state
const AppDispatchContext = createContext({}); // Separate context for updating state

const appContextReducer = (state: IAppContextState, action: {type: CONTEXT_ACTION_TYPE, payload: any}): any => {
    const { type, payload } = action;
    switch (type) {
        case CONTEXT_ACTION_TYPE.THEME_TOGGLE:
            if (payload) return {...state, theme: 'theme-dark'};
            else return {...state, theme: 'theme-light'};
        case CONTEXT_ACTION_TYPE.SET_VERSION:
            return { ...state, version: payload};
        default:
            throw new Error(`Unhandled action type: ${type}`);
    }
};

export const AppContextProvder: FunctionComponent<any> = ({children}): JSX.Element => {
    const [state, dispatch] = useReducer(appContextReducer, initialState);
    return (
        <AppStateContext.Provider value={state}>
            <AppDispatchContext.Provider value={dispatch}>
                {children}
            </AppDispatchContext.Provider>
        </AppStateContext.Provider>
    );
}

// Custom Hooks
export const useGlobalState  = () => useContext(AppStateContext);
export const useGlobalDispatch =  () => useContext(AppDispatchContext);