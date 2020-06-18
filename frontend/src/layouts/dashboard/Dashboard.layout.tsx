import React, {FunctionComponent, useState, useEffect } from 'react';
// custom
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import DashboardRouter from "./router/DashboardRouter";
import {showToasterTimed} from "../../common/util/ToasterHelper";
import {getUserDetails} from "../../common/async/AsyncCalls";
import {CONTEXT_ACTION_TYPE, useGlobalDispatch} from "../../common/context/AppContext";

const DashboardLayout: FunctionComponent = (props): JSX.Element => {
    // context
    const appDispatch: any = useGlobalDispatch();
    // state
    const [ sidebarStatus, setSidebarStatus ] = useState(false);
    // event handlers
    const handleSidebarToggle = (status: boolean) => {
        setSidebarStatus(status);
    };

    //side-effect
    useEffect(()=>{
        getUserDetails()
            .then ((res: any) => {
                if (res.data) {
                    appDispatch ({type: CONTEXT_ACTION_TYPE.SET_PROFILE_DATA, payload: res.data});
                    showToasterTimed ('success', `Welcome ${res.data.name}`);
                } else {
                    showToasterTimed ('info', 'Welcome to B.O.R.E.D');
                }
            })
            .catch ((err: any) => {
                console.log('Not signed in / error: ', err);
                showToasterTimed ('info', 'Welcome to B.O.R.E.D');
            });
    },[appDispatch]);

    return (
        <React.Fragment>
            <Sidebar display={sidebarStatus} onExit={handleSidebarToggle}/>
                <div className="fixed w-full overflow-y-scroll bg-background-tertiary h-screen">
                    <Header isDashboard={true} onSideBarToggle={handleSidebarToggle}/>
                    <div className="transition-opacity
                        duration-1000 ease-in-out container-inner mx-auto pb-8 text-center text-xl">
                        <DashboardRouter/>
                    </div>
                    <Footer/>
                </div>
        </React.Fragment>
    );
};

export default DashboardLayout;