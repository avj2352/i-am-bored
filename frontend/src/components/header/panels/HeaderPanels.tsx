/**
 * PAJ - 19 March 2020
 * This component switches between sublinks for header
 */
import React, { FunctionComponent, useState, useEffect, useContext } from 'react';
// material
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
// custom
import { HEADER_ACTION } from './../context/HeaderContext';
import { TimerPanel } from './timer/TimerPanel';
import { AppStateContext } from '../../../common/context/AppContext';

export interface IHeaderPanels {
    route: HEADER_ACTION
}

export const HeaderPanels: FunctionComponent<IHeaderPanels> = (props) => {
    const { route } = props;
    const appStateContext = useContext(AppStateContext);
    const [content, setContent] = useState(<React.Fragment></React.Fragment>);
    // side-effects
    useEffect(()=>{
        switch (route) {
            case HEADER_ACTION.TIMER:
                setContent(
                    <React.Fragment>
                        <TimerPanel/>
                    </React.Fragment>
                );
                break;
            case HEADER_ACTION.ABOUT:
                setContent(
                    <React.Fragment>
                        <Tabs value={0} textColor="inherit">
                            <Tab textColor="inherit" label={`v ${appStateContext.version}`} />
                        </Tabs>
                    </React.Fragment>
                );
                break;
            default:
                setContent (
                    <React.Fragment>
                        <Tabs value={0} textColor="inherit">
                            {/* <Tab textColor="inherit" label="Current" /> */}
                        </Tabs>
                    </React.Fragment>
                );
        }
    },[route]);

    return (
        <React.Fragment>
            {content}
        </React.Fragment>
    );
};