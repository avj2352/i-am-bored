import React, { FunctionComponent, useState, useEffect, useContext } from 'react';
// material
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
// custom
import { HeaderStateContext, HeaderDispatchContext, HEADER_ACTION } from './../../context/HeaderContext';

export const TimerPanel: FunctionComponent = (props) => {
    // context
    const headerState = useContext(HeaderStateContext);
    const headerDispatch: any = useContext(HeaderDispatchContext);
    // state
    const [ currentPanel, setCurrentPanel ] = useState(headerState.timerPanelState);
    // event-handlers
    const handlePanelChange = (item: number) => {
        setCurrentPanel(item);
        headerDispatch({
            type: HEADER_ACTION.TIMER_PANEL_CHANGE,
            payload: item
        });
    };

    // side-effects
    useEffect(()=>{
        setCurrentPanel(headerState.timerPanelState);
    },[headerState.timerPanelState]);

    return (
        <React.Fragment>
            <Tabs value={currentPanel} textColor="inherit">
                <Tab onClick={handlePanelChange.bind(null,0)} textColor="inherit" label="All" />
                <Tab onClick={handlePanelChange.bind(null,1)} textColor="inherit" label="Add New +" />
            </Tabs>
        </React.Fragment>
    );
};