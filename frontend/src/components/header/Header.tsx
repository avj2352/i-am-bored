import React, {FunctionComponent, useEffect, useState} from 'react';
import { FiSearch } from 'react-icons/fi';
// custom
import {CONTEXT_ACTION_TYPE, useGlobalDispatch} from "../../common/context/AppContext";
import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";
import MenuSwitcher from "../menu/MenuSwitcher";

interface IHeaderProps {
    isDashboard: boolean;
    onSideBarToggle? : (status: boolean) => void;
}

const Header: FunctionComponent<IHeaderProps> = (props):JSX.Element => {
    const { isDashboard, onSideBarToggle } = props;
    const appDispatchContext: any = useGlobalDispatch();
    const [status, setStatus] = useState<boolean>(false);
    // event handler
    const toggleTheme = () => {
        setStatus(prev => !prev);
    };

    const handleToggle = (status: boolean) => {
        onSideBarToggle && onSideBarToggle(status);
    };
    // side-effect
    useEffect(()=>{
        appDispatchContext({
           type: CONTEXT_ACTION_TYPE.THEME_TOGGLE,
           payload: status
        });

    },[status, appDispatchContext]);

    return (
      <React.Fragment>
          <header className="border-t-14 border-green-600">
              <nav className="container mx-auto flex flex-wrap justify-end items-center py-8">
                  {isDashboard && <button className="outline-none text-2xl mx-8 focus:outline-none text-copy-primary hover:text-gray-700">
                      <FiSearch/>
                  </button>}
                  {isDashboard && <button className="outline-none mx-8 focus:outline-none text-copy-primary hover:text-gray-700">
                      <MenuSwitcher onToggle={handleToggle}/>
                  </button>}
                  <button className="outline-none focus:outline-none mx-8 text-copy-primary hover:text-gray-700" onClick={toggleTheme}>
                      <ThemeSwitcher status={status}/>
                  </button>
              </nav>
          </header>
      </React.Fragment>
    );
};

export default Header;