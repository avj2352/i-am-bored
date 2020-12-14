import React, {FunctionComponent, useEffect, useState} from 'react';
import {Box, Grid, Typography} from "@material-ui/core";
import {Skeleton} from "@material-ui/lab";
// styles
import appLogo from './../../../assets/img/logo.png';
import { useStyles } from './home.profile.style';
import Avatar from "@material-ui/core/Avatar";
import {IAppContextState, useGlobalState} from "../../../common/context/AppContext";
import {SimpleCardOverview} from "../cards/SimpleCardOverview";
import SearchIcon from "@material-ui/icons/Search";

const HomeProfileView: FunctionComponent = (props): JSX.Element => {
    // styles
    const classes = useStyles();
    const appContext: IAppContextState = useGlobalState();
    const imageRef: any = React.createRef();

    const handleLoading = () => {
        if (imageRef.current) imageRef.current.style.opacity = '1';
    };

    return (
        <React.Fragment>
            <Grid item xs={12} className={classes.group}>
                <Grid item xs={12} md={6} lg={3}>
                    <SimpleCardOverview title={'New Recipe'} link={'login'} btnLabel={'Create New...'}>
                        Create a new Recipe
                    </SimpleCardOverview>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <SimpleCardOverview title={'All Recipes'} link={'all'}>
                        List all the free, public recipes
                    </SimpleCardOverview>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <SimpleCardOverview title={'Tags'} link={'tags'} btnLabel={'Add / Edit Tags'}>
                        Click here to add / edit tags
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

export default HomeProfileView;