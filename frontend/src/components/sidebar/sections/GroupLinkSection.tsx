import React, {FunctionComponent, useCallback, useEffect, useState} from 'react';
import {BsFolder, BsFolderPlus} from "react-icons/bs";
import {Link} from "react-router-dom";
import {IAppContextState, useGlobalState} from "../../../common/context/AppContext";

const GroupLinkSection: FunctionComponent = (props): JSX.Element => {
    const appContext: IAppContextState = useGlobalState();
    // state
    const [groupList, setGroupList] = useState([]);
    const [groupContent, setGroupContent] = useState<JSX.Element>(<React.Fragment/>);
    // lifecycle methods
    const getAllGroupList = useCallback((name: string | undefined)=>{
        if (name) {

        }
    },[]);

    useEffect(()=>{
        getAllGroupList(appContext.profile?.name);
    },[]);

    return (
        <React.Fragment>
            <section className="cursor-pointer flex items-center mt-5 py-2 px-8 block text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100">
                <BsFolder/>
                <span className="mx-4 font-medium">South Indian</span>
            </section>
            <section className="cursor-pointer flex items-center mt-5 py-2 px-8 block text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100">
                <BsFolder/>
                <span className="mx-4 font-medium">Chinese</span>
            </section>
            {appContext.profile?.role && appContext.profile.role === 'admin' && <Link to={'/dashboard/groups'} className="cursor-pointer flex items-center mt-5 py-2 px-8 block text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100">
                <BsFolderPlus/>
                <span className="mx-4 font-medium">Add / Edit Groups</span>
            </Link>}
        </React.Fragment>
    );
};

export default GroupLinkSection;