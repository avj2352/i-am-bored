import React, {Fragment, useEffect, useState, useContext, FunctionComponent} from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
// material
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import clxs from 'clsx';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import ToggleDarkIcon from '@material-ui/icons/NightsStay';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import SearchIcon from '@material-ui/icons/Search';
// custom
import MenuDropDown from './../menu-drop-down/MenuDropdown';
import { useStyles } from './footer-style';
import {CONTEXT_ACTION_TYPE, useGlobalDispatch, useGlobalState} from '../../common/context/AppContext';
import clsx from "clsx";


interface IFooterProps {
    open: boolean;
    handleDrawerOpen: () => void;
}

const Footer: FunctionComponent<IFooterProps> = (props): JSX.Element => {
    const appContext: any = useGlobalDispatch();
    const history = useHistory();
    const classes = useStyles();
    const { open, handleDrawerOpen } = props;

    const { enqueueSnackbar, closeSnackbar }  = useSnackbar();
    const [ userDetails, setUserDetails] = useState({firstName: '', lastName: '', role: ''});
    const [ isUserLoggedIn, setUserLoggedIn] = useState(false);

    // event handlers - toggleTheme
    const toggleMode = (evt: any) => {
        appContext({
            type: CONTEXT_ACTION_TYPE.THEME_TOGGLE,
            payload: open
        });
    }    




    //close sidebar on sidebar buttons click
    //https://reacttraining.com/react-router/web/api/history
    const navigateLink = (paramName: string) => {
        const location = {
            pathname: `/app/${paramName}`,
        };
        history.push(location);        
    }

    return (
        <AppBar position="fixed" color="primary" className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
        })}>
            <Toolbar>
                <IconButton 
                    edge="start" 
                    color="inherit" 
                    aria-label="open drawer" 
                    onClick={handleDrawerOpen}
                    className={clsx(open && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
                <Fab 
                    color="primary"
                    aria-label="add" 
                    className={classes.fabButton}
                    onClick={() => navigateLink('search')}>
                    <SearchIcon />
                </Fab>
                <div className={classes.grow} />                
                <MenuDropDown/>                
            </Toolbar>
        </AppBar>
    );
};



export default Footer;