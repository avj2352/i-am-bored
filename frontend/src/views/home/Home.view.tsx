import React, {FunctionComponent, useEffect, useState} from 'react';
import "./home.view.css";
import {Typography} from "@material-ui/core";
import {IAppContextState, useGlobalState} from "../../common/context/AppContext";
import {HomeSkeletonLoading} from "./loading/Skeleton";

const HomeView: FunctionComponent = (props): JSX.Element => {
    // context
    const appContext: IAppContextState = useGlobalState();
    // states
    const [heading, setHeading] = useState<string>('Book.Of.Recipes.Easily.Done');
    // componentDidMount
    useEffect(()=>{
        if(appContext.profile) setHeading(`Welcome, ${appContext.profile.name}`);
        else setHeading('Book.Of.Recipes.Easily.Done');
    },[appContext.profile]);

    return (
        <React.Fragment>            
            <div>
                <Typography  variant="h4" component="h4">{heading}</Typography>
                <HomeSkeletonLoading/>
            </div>
        </React.Fragment>
    );
};

export default HomeView;