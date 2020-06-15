import React, {FunctionComponent, useEffect, useState} from 'react';
import clsx from "clsx";
// custom
import ProfileSection from "./sections/ProfileSection";
import LoginLink from "./components/LoginLink";
import CommonLinkSection from "./sections/CommonLinkSection";
import UserLinkSection from "./sections/UserLinkSection";
import GroupLinkSection from "./sections/GroupLinkSection";
import LogoutLink from "./components/LogoutLink";
import FooterLinkSection from "./sections/FooterLinkSection";
import {IAppContextState, useGlobalState} from "../../common/context/AppContext";

interface ISidebarProps {
    display: boolean;
    onExit: (status: boolean) => void;
}

const Sidebar: FunctionComponent<ISidebarProps> = (props): JSX.Element => {
    // context
    const appContext: IAppContextState = useGlobalState();
    // state
    const [isUserProfile, toggleUserProfile] = useState(false);
    const { display, onExit } = props;
    const baseClass = clsx({
        'z-10 bg-gray-200 absolute flex flex-col sm:flex-row sm:justify-around shadow-lg': true,
        'hidden': !display,
        'block': display
    });
    // event handlers
    const handleClose = (status: boolean) => {
        onExit(status);
    };

    useEffect(()=>{
        if (appContext.profile) toggleUserProfile(true);
        else toggleUserProfile(false);
    },[appContext.profile]);

    return (
        <React.Fragment>
            <div className={baseClass}>
                <div className="relative flex flex-col justify-between p-0 m-0 w-64 h-screen bg-gray-800">
                    <nav className="w-full absolute sidebar-section-01">
                        {isUserProfile && <ProfileSection/>}
                        <CommonLinkSection/>
                        <GroupLinkSection/>
                        {isUserProfile && <UserLinkSection/>}
                    </nav>
                    <div className="absolute sidebar-section-02 bottom-0 py-4 border-t-2 border-gray-700 w-full">
                        <FooterLinkSection onExit={handleClose}>
                            { !isUserProfile && <LoginLink/>}
                            { isUserProfile && <LogoutLink/>}
                        </FooterLinkSection>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Sidebar;