import React, { FunctionComponent } from 'react';
import {FaCompressArrowsAlt, FaInfo} from "react-icons/fa";
import {Link} from "react-router-dom";

interface IFooterLinkSectionProps {
    onExit: (status: boolean) => void;
}

const FooterLinkSection: FunctionComponent<IFooterLinkSectionProps> = (props): JSX.Element => {
    const { onExit, children } = props;
    // event handlers
    const handleClose = () => {
        onExit(false);
    };
    return (
        <React.Fragment>
            <Link to={'/about'} className="outline-none focus:outline-none block w-full  flex items-center py-4 px-8 block text-gray-600 hover:text-gray-500">
                <FaInfo/>
                <span className="cursor-pointer mx-4 font-medium">About</span>
            </Link>
            {children}
            <button
                onClick = {handleClose}
                className="outline-none
                                        text-2xl focus:outline-none
                                        block w-full text-center flex
                                        justify-center pt-4 px-8 block
                                        text-gray-600 hover:text-gray-500">
                <FaCompressArrowsAlt/>
            </button>
        </React.Fragment>
    );
};

export default FooterLinkSection;