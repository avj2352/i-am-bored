import React, { FunctionComponent } from 'react';
import { FaSlackHash } from "react-icons/fa";

const TagsView: FunctionComponent = (props): JSX.Element => {
    return (
        <React.Fragment>
            <div className="flex flex-col md:flex-row items-center justify-center w-full mb-4">
                <h1 className="text-2xl flex">
                    <FaSlackHash className="m-2 mr-4"/>
                    Add / Edit Tags
                </h1>
            </div>
        </React.Fragment>
    );
};

export default TagsView;