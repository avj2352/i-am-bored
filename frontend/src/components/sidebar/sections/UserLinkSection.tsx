import React, { FunctionComponent, useState } from 'react';
import  { Link } from 'react-router-dom';
import {FaSlackHash, FaHeartbeat} from "react-icons/fa";
import {BsFolderPlus} from "react-icons/bs";
import {RiBookmark3Line} from "react-icons/ri";
import {GiCoffeeBeans} from "react-icons/gi";
import {AiOutlineTrophy} from "react-icons/ai";

const UserLinkSection: FunctionComponent = (props): JSX.Element => {
    return (
        <React.Fragment>
            <section className="cursor-pointer flex items-center mt-5 py-2 px-8 block text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100">
                <FaHeartbeat/>
                <span className="cursor-pointer mx-4 font-medium">My Favourite</span>
            </section>
            <Link to={'/dashboard/tags'} className="cursor-pointer flex items-center mt-5 py-2 px-8 block text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100">
                <FaSlackHash/>
                <span className="cursor-pointer mx-4 font-medium">Add / Edit Tags</span>
            </Link>
            <section className="cursor-pointer flex items-center mt-5 py-2 px-8 block text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100">
                <RiBookmark3Line/>
                <span className="mx-4 font-medium">My Playlists</span>
            </section>
            <section className="cursor-pointer flex items-center mt-5 py-2 px-8 block text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100">
                <GiCoffeeBeans/>
                <span className="mx-4 font-medium">Add / Edit Item</span>
            </section>
            <section className="cursor-pointer flex items-center mt-5 py-2 px-8 block text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100">
                <AiOutlineTrophy/>
                <span className="mx-4 font-medium">My Inventory</span>
            </section>
        </React.Fragment>
    );
};

export default UserLinkSection;