import React, {FunctionComponent, useEffect, useState} from 'react';
import {Grid, Typography} from "@material-ui/core";
import {IAppContextState, useGlobalState} from "../../common/context/AppContext";
import {HomeSkeletonLoading} from "./loading/Skeleton";
// styles
import { useStyles } from './home.style';
import HomeGeneralView from "./general/HomeGeneral.view";
import HomeProfileView from "./profile/HomeProfile.view";

const HomeView: FunctionComponent = (props): JSX.Element => {
    // context
    const appContext: IAppContextState = useGlobalState();
    // states
    const [heading, setHeading] = useState<string>('Book.Of.Recipes.Easily.Done');
    const [content, setContent] = useState<JSX.Element>(<HomeSkeletonLoading/>);
    // styles
    const classes = useStyles();
    // componentDidMount
    useEffect(()=>{
        if(appContext.profile) {
            setHeading(`Welcome, ${appContext.profile.name}`);
            setContent(<HomeProfileView/>);
        }
        else {
            setHeading(`B.O.R.E.D v${appContext.version}`);
            setContent(<HomeGeneralView/>);
        }
    },[appContext.profile, appContext.version]);

    return (
        <React.Fragment>            
            <Grid container className={classes.container}>
                <Grid item xs={12} className={classes.heading}>
                    <Typography variant="h5"><strong>{heading}</strong></Typography>
                </Grid>
                {content}
            </Grid>
        </React.Fragment>
    );
};

export default HomeView;