/**
 * Sidebar component - Drawer API
 * PAJ - 22 March 2019
 */
import React, { useState, useEffect, FunctionComponent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';  
// Components
import { CircularLoader } from '../loaders/circular-loader/CircularLoader';
// Material
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
//Icons
import { FaDiaspora } from 'react-icons/fa';
//Styles
import appLogo from './../../assets/img/logo.png';
import { useStyles } from './sidebar-style';

interface ISidebarProps {
  open: boolean;
  handleDrawerClose: () => void;
}

const Sidebar: FunctionComponent<ISidebarProps> = (props): JSX.Element => {
  // destructuring
    const { open, handleDrawerClose } = props;
    // context    
    const history = useHistory();
    // state    
    const [isLoading, setLoading] = useState(false);    
    const [listContent, setListContent] = useState<JSX.Element>(<React.Fragment/>);
    const [userDetails, setUserDetails] = useState({role:''});
    const classes = useStyles();



    const navigateLink = (paramName: string) => {
      const location = {
        pathname: `/app/${paramName}`,
      };
      history.push(location);
      handleDrawerClose();
    }


    return (
        <div>          
          <Drawer
            className={classes.drawer}
            variant="temporary"
            anchor="left"
            open={open}
            classes={
              {
                paper: classes.drawerPaper,
              }
            }>
            <div className={classes.drawerHeader}>
              <div>&nbsp;</div>
              <Avatar alt="app-logo" src={appLogo} 
                      className={classes.avatar}>
              </Avatar>
              <IconButton onClick={handleDrawerClose}>
                {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
            <Divider />
            <List className={classes.listGroup}>                
                <ListItem>
                  <CircularLoader display = {isLoading} />
                </ListItem>
              </List>       
          </Drawer>
        </div>
    );
};

export default Sidebar;