/**
 * Sidebar component - Drawer API
 * PAJ - 22 March 2019
 */
import React, {useState, useEffect, FunctionComponent, useCallback, useRef} from 'react';
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
import AllIcon from '@material-ui/icons/AcUnit';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
//Icons
import { FaDiaspora } from 'react-icons/fa';
//Styles
import appLogo from './../../assets/img/logo.png';
import { useStyles } from './sidebar-style';
import { getAllGroups } from '../../common/async/AsyncCalls';
import Skeleton from '@material-ui/lab/Skeleton/Skeleton';

interface ISidebarProps {
  open: boolean;
  handleDrawerClose: () => void;
}

const Sidebar: FunctionComponent<ISidebarProps> = (props): JSX.Element => {
  // destructuring
    const { open, handleDrawerClose } = props;
    const imageRef: any = React.createRef();
    // context    
    const history = useHistory();
    // state        
    const [generalListContent, setGeneralListContent] = useState<JSX.Element>(
      <React.Fragment>
        <ListItem>
                  <Skeleton variant="text" width={200} height={20}/>
                </ListItem>
                <ListItem>
                  <Skeleton variant="text" width={200} height={20}/>
                </ListItem>
      </React.Fragment>
    );
    const [userDetails, setUserDetails] = useState({role:''});
    const classes = useStyles();
    // event handlers
    const handleGroupNavigation = (title: any) => console.log(`Navigate to: ${title}`);

    // fetch all groups (premium / non-premium)
    const fetchGroups = useCallback(()=>{
      getAllGroups()
        .then((res: any) => {
          console.log('Result is: ', res.data);
          const listContent: any = res.data && res.data.map((item: any, index: number)=> {
            return <ListItem button onClick={handleGroupNavigation.bind(null, item.slug)} key={index}>
                <ListItemIcon><TurnedInNotIcon/></ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
          });
          setGeneralListContent(listContent);
        });
    },[]);

    const navigateLink = (paramName: string) => {
      const location = {
        pathname: `/app/${paramName}`,
      };
      history.push(location);
      handleDrawerClose();
    };

    const handleLoading = () => {
        if (imageRef.current) imageRef.current.style.opacity = '1';
    };

    //load groups
    useEffect(()=>{
      fetchGroups();
    },[]);

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
              <Avatar ref={imageRef} alt="app-logo" src={appLogo} onLoad={handleLoading} className={classes.avatar}/>
              <IconButton onClick={handleDrawerClose}>
                {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
            <Divider />
            <List className={classes.listGroup}>                
              <ListItem button key='All Recipes'>
                <ListItemIcon><AllIcon/></ListItemIcon>
                <ListItemText primary='All Recipes' />
              </ListItem>
              {generalListContent}  
              <Divider className={classes.listDivider}/>          
            </List>       
          </Drawer>
        </div>
    );
};

export default Sidebar;