import React, { FunctionComponent, useState, useCallback, useEffect } from 'react';
import "./navbar.css";
import logo from "./../../assets/img/logo.png";

const Navbar: FunctionComponent = (props): JSX.Element => {

    const [ isSticky, toggleSticky ] = useState(false);

    const handleScroll = useCallback(() => {
        if (window.scrollY > 70) {
            toggleSticky(true);
        } else if (window.scrollY < 70) {
            toggleSticky(false);
        }
    },[]);

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[handleScroll]);

    return (
        <React.Fragment>
            <nav className={isSticky ? `navbar box-shadow navbar-fixed` : `navbar navbar-float`}>
                <img src={logo} className="box-shadow" alt="logo"/>
            </nav>
        </React.Fragment>
    );
};

export default Navbar;