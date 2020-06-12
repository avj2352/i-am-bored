import React, {FunctionComponent} from 'react';
import { BsList } from 'react-icons/bs';
import { BsFolderPlus } from 'react-icons/bs';
import { FaSlackHash } from 'react-icons/fa';
import { RiBookmark3Line } from 'react-icons/ri';
import { GiCoffeeBeans } from 'react-icons/gi';
import { RiFileList3Line } from 'react-icons/ri';
// custom
import ProfileSection from "./sections/ProfileSection";
import SidebarFooter from "./sections/SidebarFooter";
import LogoutLink from "./components/LogoutLink";
import LoginLink from "./components/LoginLink";

interface ISidebarProps {
    display: boolean;
}

const Sidebar: FunctionComponent<ISidebarProps> = (props): JSX.Element => {
    return (
        <React.Fragment>
            <div className="bg-gray-200 absolute flex flex-col sm:flex-row sm:justify-around shadow-lg">
                <div className="w-64 h-screen bg-gray-800 mt-0">
                    <nav>
                        <ProfileSection/>
                        <section className="flex items-center mt-5 py-2 px-8 block text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100">
                            <BsList/>
                            <span className="mx-4 font-medium">All Recipes</span>
                        </section>
                        <section className="flex items-center mt-5 py-2 px-8 block text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100">
                            <FaSlackHash/>
                            <span className="mx-4 font-medium">Add / Edit Tags</span>
                        </section>
                        <section className="flex items-center mt-5 py-2 px-8 block text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100">
                            <BsFolderPlus/>
                            <span className="mx-4 font-medium">Add / Edit Groups</span>
                        </section>
                        <section className="flex items-center mt-5 py-2 px-8 block text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100">
                            <RiBookmark3Line/>
                            <span className="mx-4 font-medium">Add / Edit Playlists</span>
                        </section>
                        <section className="flex items-center mt-5 py-2 px-8 block text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100">
                            <GiCoffeeBeans/>
                            <span className="mx-4 font-medium">Add / Edit Item</span>
                        </section>
                        <section className="flex items-center mt-5 py-2 px-8 block text-gray-400 border-r-4 border-gray-800 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-100">
                            <RiFileList3Line/>
                            <span className="mx-4 font-medium">My Inventory</span>
                        </section>
                    </nav>
                    <SidebarFooter>
                        <LoginLink/>
                    </SidebarFooter>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Sidebar;