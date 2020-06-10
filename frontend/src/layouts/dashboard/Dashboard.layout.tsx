import React, { FunctionComponent } from 'react';
import Sidebar from "../../components/sidebar/Sidebar";

const DashboardLayout: FunctionComponent = (props): JSX.Element => {
    return (
        <React.Fragment>
            <Sidebar display={true}/>
            Dashboard Layout
        </React.Fragment>
    );
};

export default DashboardLayout;