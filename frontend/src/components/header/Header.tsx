import React, {FunctionComponent, useEffect, useState} from 'react';
import {CONTEXT_ACTION_TYPE, useGlobalDispatch} from "../../common/context/AppContext";
import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";

const Header: FunctionComponent = (props):JSX.Element => {
    const appDispatchContext: any = useGlobalDispatch();
    const [status, setStatus] = useState<boolean>(false);
    // event handler
    const toggleTheme = () => {
        setStatus(prev => !prev);
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
                  <button className="outline-none focus:outline-none text-copy-primary hover:text-gray-700" onClick={toggleTheme}>
                      <ThemeSwitcher status={status}/>
                  </button>
              </nav>
          </header>
      </React.Fragment>
    );
};

export default Header;