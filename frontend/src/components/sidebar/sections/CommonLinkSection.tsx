import React, { FunctionComponent } from 'react';
import  { Link } from 'react-router-dom';
import {AiOutlineHome} from "react-icons/ai";
import {BsList} from "react-icons/bs";

const CommonLinkSection: FunctionComponent = (props): JSX.Element => {
    return (
        <React.Fragment>
            <Link to={'/'} className="cursor-pointer flex items-center mt-5 py-2 px-8 block text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100">
                <AiOutlineHome/>
                <span className="mx-4 font-medium">Home</span>
            </Link>
            <section className="cursor-pointer flex items-center mt-5 py-2 px-8 block text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100">
                <BsList/>
                <span className="mx-4 font-medium">All Recipes</span>
            </section>
        </React.Fragment>
    );
};

export default CommonLinkSection;