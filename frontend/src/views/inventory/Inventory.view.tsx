import React, { FunctionComponent } from 'react';
import {BsFolderPlus} from "react-icons/bs";

const GroupsView: FunctionComponent = (props): JSX.Element => {
    return (
        <React.Fragment>
            <div className="flex flex-col md:flex-row items-center justify-center w-full mb-4">
                <h1 className="text-2xl flex">
                    <BsFolderPlus className="m-2 mr-4"/>
                    Add / Edit Groups
                </h1>
            </div>
        </React.Fragment>
    );
};

export default GroupsView;