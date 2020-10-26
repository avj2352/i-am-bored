import { makeStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';


export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
    fullList: {
      width: 250,
    }, 
    drawer: {
      width: drawerWidth,      
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      backgroundColor: theme.palette.primary.dark,
      alignItems: 'center',
      padding: '0 8px',
      ...theme.mixins.toolbar,
      justifyContent: 'space-between',
    },
    avatar: {
      position: 'absolute',
      width: '50%',
      height: '120px',
      top: '1%',
      left: '20%',
      borderRadius: '10px',
    },
    listGroup: {
      position: 'relative',
      top: '3rem'
    }
}));