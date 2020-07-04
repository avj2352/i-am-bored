import React, { FunctionComponent } from 'react';
import {BsFolderPlus} from "react-icons/bs";
import NoGroups from "./sections/no-groups/NoGroups";
import BorderCard from "../../components/cards/border-card/BorderCard";
import AddGroup from "./sections/add/AddGroup";

const GroupsView: FunctionComponent = (props): JSX.Element => {
    return (
        <React.Fragment>
            <div className="flex flex-col justify-center w-full mb-4">
                <h1 className="text-2xl flex mb-4">
                    <BsFolderPlus className="m-2 mr-4"/>
                    Groups
                </h1>
                <BorderCard title={`Create New Group`}>
                    <AddGroup/>
                </BorderCard>
                <BorderCard title={`List of Groups`} borderBottom={true}>
                    <NoGroups/>
                </BorderCard>
            </div>
        </React.Fragment>
    );
};

export default GroupsView;