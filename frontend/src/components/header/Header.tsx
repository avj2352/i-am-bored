import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
//Material
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
// custom
import { useGlobalState } from '../../common/context/AppContext';
import MenuDropDown from '../menu-drop-down/MenuDropdown';
//CSS in JS
import { useStyles } from './header-style';
import { FunctionComponent } from 'react';

interface IHeaderProps {
  open: boolean;
  handleDrawerOpen: ()=>void; 
}

const Header:FunctionComponent<IHeaderProps> = (props):JSX.Element => {
    //context
    const appContext = useGlobalState();
    const classes = useStyles();
    const { open, handleDrawerOpen } = props;    
    

    return(
        <AppBar          
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}>
          <Toolbar disableGutters={!open}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.hide)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              {`${appContext.title}`}
            </Typography>            
          </Toolbar>
        </AppBar>
    );
}


export default Header;