import React, {FunctionComponent} from 'react';
import { MdExitToApp } from 'react-icons/md';

const LogoutLink: FunctionComponent = (props): JSX.Element => {
    return (
        <a href="/auth/logout" className="flex outline-none focus:outline-none block w-full items-center py-4 px-8 block text-gray-600 hover:text-gray-500">
            <MdExitToApp/>
            <span className="mx-4 font-medium">Logout</span>
        </a>
    );
};

export default LogoutLink;