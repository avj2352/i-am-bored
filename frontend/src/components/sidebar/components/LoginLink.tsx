import React, {FunctionComponent} from 'react';
import { FaGoogle } from "react-icons/fa";


const LoginLink: FunctionComponent = (props): JSX.Element => {
    return (
        <button className="flex outline-none focus:outline-none block w-full items-center py-4 px-8 block text-gray-600 hover:text-gray-500">
            <FaGoogle/>
            <span className="mx-4 font-medium">Sign In</span>
        </button>
    );
};

export default LoginLink;