import React, {FunctionComponent, useEffect, useState} from 'react';
import {Box, Grid, Typography} from "@material-ui/core";
import {Skeleton} from "@material-ui/lab";
// styles
import appLogo from './../../../assets/img/logo.png';
import { useStyles } from './home.general.style';
import Avatar from "@material-ui/core/Avatar";
import {IAppContextState, useGlobalState} from "../../../common/context/AppContext";
import {SimpleCardOverview} from "../cards/SimpleCardOverview";
import SearchIcon from "@material-ui/icons/Search";

const HomeGeneralView: FunctionComponent = (props): JSX.Element => {
    // styles
    const classes = useStyles();
    const appContext: IAppContextState = useGlobalState();
    const imageRef: any = React.createRef();

    const handleLoading = () => {
        if (imageRef.current) imageRef.current.style.opacity = '1';
    };

    return (
        <React.Fragment>
            <Grid item xs={12} md={4} className={classes.column}>
                <Box className={classes.smallBox}>
                    <Avatar ref={imageRef} alt="app-logo" src={appLogo} onLoad={handleLoading} className={classes.avatar}/>
                </Box>
            </Grid>
            <Grid item xs={12} md={8} className={classes.boxTop}>
                <Typography>
                    Welcome to the <strong>Book.Of.Recipes.Easily.Done</strong>. <br/>
                    A Progressive Web Application to create, store & share
                    recipes among friends &amp; family.
                </Typography>
                <Typography className={classes.boxTop}>
                    This application is completely free to use &amp; can be saved on your mobile device to work as
                    a native application. Also, after signing up, you will be able to - Create your own recipes, which
                    you can save for your own reference or share with the world.
                </Typography>
                <Typography className={classes.boxTop}>
                    If you think this recipe app was useful, consider buying me treat (or just drop a hello) on the
                    following Patreon Page <a rel="noreferrer noopener" href="https://www.patreon.com/pramodPanta" target="_blank">Click here</a>
                </Typography>
            </Grid>
            <Grid item xs={12} className={classes.group}>
                <Grid item xs={12} md={6} lg={3}>
                    <SimpleCardOverview title={'Sign In'} link={'login'} btnLabel={'Sign In'}>
                        Sign in with your Google Account
                    </SimpleCardOverview>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <SimpleCardOverview title={'All Recipes'} link={'all'}>
                        List all the free, public recipes
                    </SimpleCardOverview>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <SimpleCardOverview title={'About'} link={'all'} btnLabel={'About the app'}>
                        News, Features...
                    </SimpleCardOverview>
                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.row}>
                <Typography variant="subtitle2" className={classes.footerText} color="secondary">
                    Click on the <SearchIcon /> below to search recipes by title, content, items, groups or tags
                </Typography>
            </Grid>
        </React.Fragment>
    );
}

export default HomeGeneralView;