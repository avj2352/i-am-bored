import React, {FunctionComponent} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'block',
        width: '100%',
        margin: 5
    },
    [theme.breakpoints.between("xs","md")]: {
        root: {
            margin: 0,
            marginTop: 5,
            marginBottom: 5
        }
    }
}));

interface  ISimpleCardOverview {
    title: string;
    link: string;
    btnLabel?: string;
};

export const SimpleCardOverview: FunctionComponent<ISimpleCardOverview> = (props):JSX.Element => {
    const classes = useStyles();
    const { title, children, link, btnLabel } = props;
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {children}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="secondary">
                    {btnLabel ? btnLabel: 'More Details...'}
                </Button>
            </CardActions>
        </Card>
    );
};

