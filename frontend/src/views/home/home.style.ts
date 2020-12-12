import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    container: {
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        padding: 10,
        alignItems: 'center',
        marginTop: '3%'
    },
    heading: {
        display:'flex',
        width: '100%',
        justifyContent: 'center',
        fontSize: '1.8rem'
    },
    [theme.breakpoints.between(270,414)]: {
        container: {
            width: '92%'
        },
        heading: {
            fontSize: '0.8rem'
        }
    },
}));