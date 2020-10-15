import React, { FunctionComponent, useEffect, useState, useContext } from 'react';
// material
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FaceIcon from '@material-ui/icons/Face';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
// icons
import TimerIcon from '@material-ui/icons/Timer';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
// custom
import { HeaderStateContext, HEADER_ACTION } from './context/HeaderContext';
import { getCamelCase } from './../../common/helper/LocalStorageProvider';
import { HeaderPanels } from './panels/HeaderPanels';
import { UserProfileState, IUserProfileState } from '../../common/context/UserProfileContext';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = (theme: Theme) =>
  createStyles({
    secondaryBar: {
      zIndex: 0,
    },
    menuButton: {
      marginLeft: -theme.spacing(1),
    },
    iconButtonAvatar: {
      padding: 4,
    },
    link: {
      textDecoration: 'none',
      color: lightColor,
      '&:hover': {
        color: theme.palette.common.white,
      },
    },
    button: {
      borderColor: lightColor,
    },
  });


export interface IUserDetails {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  role: string;
};

interface IHeaderProps extends WithStyles<typeof styles> {
  onDrawerToggle: () => void;
};

const Header: FunctionComponent<IHeaderProps> = (props)=>{
  const { classes, onDrawerToggle } = props;
  const [headerValue, setHeaderValue] = useState({name:'About', icon: <TimerIcon/>});
  const headerContext = useContext(HeaderStateContext);
  const userProfile: IUserProfileState = useContext(UserProfileState);

  useEffect(()=>{
    switch (headerContext.name) {
      case HEADER_ACTION.ABOUT:
        setHeaderValue({name: getCamelCase(headerContext.name), icon: <HomeIcon/>});
        break;
      case HEADER_ACTION.TIMER:
        setHeaderValue({name: getCamelCase(headerContext.name), icon: <TimerIcon/>});
        break;
      case HEADER_ACTION.QUOTES:
        setHeaderValue({name: getCamelCase(headerContext.name), icon: <SettingsEthernetIcon/>});
        break;
      case HEADER_ACTION.TODO:
        setHeaderValue({name: getCamelCase(headerContext.name), icon: <DnsRoundedIcon/>});
        break;
      case HEADER_ACTION.SETTINGS:
        setHeaderValue({name: getCamelCase(headerContext.name), icon: <SettingsIcon/>});
        break;
      default:
        setHeaderValue({name: getCamelCase('App'), icon: <HomeIcon/>});
    }
  },[headerContext]);

  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Hidden smUp>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={onDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item xs />     
            <Grid item>
              <Tooltip title={`Welcome ${userProfile.firstName} ${userProfile.lastName}`}>
                <IconButton color="inherit">
                  <FaceIcon />
                </IconButton>
              </Tooltip>
            </Grid>  
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}>
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" variant="h5" component="h1">
                {headerValue.icon} {headerValue.name}
              </Typography>
            </Grid>            
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <HeaderPanels route={headerContext.name}/>
      </AppBar>
    </React.Fragment>
  );
}

export default withStyles(styles)(Header);