import React, { Fragment, useState, useContext, useEffect, FunctionComponent} from 'react';
import { useRouteMatch, useLocation, Route, Switch, Redirect } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import clsx from 'clsx';
// material
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
// custom
import Sidebar from './../../components/sidebar/Sidebar';
import Header from './../../components/header/Header';
import Footer from './../../components/footer/Footer';
import { useGlobalState } from './../../common/context/AppContext';
import { useStyles } from './dashboard-style';



const DashboardLayout:FunctionComponent = (props):JSX.Element => {        
    const appContext = useGlobalState();
    //state
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    
    // events
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };    

    return (        
            <div className={classes.root}>
                <CssBaseline />
                <Header open={open} handleDrawerOpen={handleDrawerOpen} />
                <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
                <main className={clsx(classes.content, { [classes.contentShift]: open })}>                    
                    Main Content Comes here
                </main>
                 <Footer open={open} handleDrawerOpen={handleDrawerOpen}/>
            </div>
    );
}

export default DashboardLayout;