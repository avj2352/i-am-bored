import React, {FunctionComponent, useCallback, useEffect, useState} from 'react';
import {BsFolder, BsFolderPlus} from "react-icons/bs";
import {Link} from "react-router-dom";
import {IAppContextState, useGlobalState} from "../../../common/context/AppContext";
import {getAllFilteredGroups, getAllGroups} from "../../../common/async/AsyncCalls";

const GroupLinkSection: FunctionComponent = (props): JSX.Element => {
    const appContext: IAppContextState = useGlobalState();
    // state
    const [groupList, setGroupList] = useState([]);
    // lifecycle methods
    const getAllGroupList = useCallback((name: string | undefined)=>{
        if (name) {
            getAllGroups()
                .then((res: any) => setGroupList(res.data))
                .catch(() => console.log('Error fetching groups - with premium'));
        } else {
            getAllFilteredGroups()
                .then((res: any) => setGroupList(res.data))
                .catch(() => console.log('Error fetching groups - w/o premium'));
        }
    },[]);

    useEffect(()=>{
        getAllGroupList(appContext.profile?.name);
    },[appContext.profile, getAllGroupList]);

    return (
        <React.Fragment>
            {groupList.length > 0 && groupList.map((item: any, index:number) => <Link key={index}
                         to={`/dashboard/${item.slug}`}
                         className="cursor-pointer flex items-center mt-5 py-2 px-8 block
                         text-gray-400 border-r-4 border-gray-800
                         hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100">
                <BsFolder/>
                <span className="mx-4 font-medium">{item.title}</span>
            </Link>)}
            {appContext.profile?.role && appContext.profile.role === 'admin' && <Link to={'/dashboard/groups'} className="cursor-pointer flex items-center mt-5 py-2 px-8 block text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100">
                <BsFolderPlus/>
                <span className="mx-4 font-medium">Add / Edit Groups</span>
            </Link>}
        </React.Fragment>
    );
};

export default GroupLinkSection;