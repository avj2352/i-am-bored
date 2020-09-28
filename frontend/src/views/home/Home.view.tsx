import React, { FunctionComponent } from 'react';
import "./home.view.css";
import Navbar from "../../components/navbar/Navbar";
import SearchBar from "../../components/search/SearchBar";

const HomeView: FunctionComponent = (props): JSX.Element => {
    return (
        <React.Fragment>
            <Navbar/>
            <SearchBar/>
            <div style={{height: `100000px`}}>
                Hellow
            </div>
        </React.Fragment>
    );
};

export default HomeView;