import React, { FunctionComponent } from 'react';
import {BsFolder} from "react-icons/bs";

const GroupLinkSection: FunctionComponent = (props): JSX.Element => {
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
        </React.Fragment>
    );
};

export default GroupLinkSection;