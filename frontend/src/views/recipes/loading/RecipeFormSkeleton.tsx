import React, { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Card, CardActions, CardContent, Fab, Grid, Typography} from "@material-ui/core";
import {Skeleton} from "@material-ui/lab";

const useStyles = makeStyles(theme => ({
    card: {
        minWidth: 175,
    },
    fullWidth: {
        width: '100%'
    },
    cardContent: {
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    chip: {
        margin: theme.spacing(1),
    },
    pos: {
        textAlign: 'left',
        marginBottom: 12,
        fontSize: 18
    },
    action: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    fab: {
        margin: '0 10px'
    }
}));

const RecipeFormSkeleton: FunctionComponent = (props): JSX.Element => {
    const classes = useStyles();
    return (
        <Grid>
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Skeleton>
                        <Typography variant="h5" component="h2">Loading Text Title, please...</Typography>
                    </Skeleton>
                    <Skeleton>
                        <Typography className={classes.pos} component="p">
                            Loading Text subtitle..
                        </Typography>
                    </Skeleton>
                    <Skeleton>
                        <Typography className={classes.pos} component="p">
                            Loading Text subtitle..
                        </Typography>
                    </Skeleton>
                    <Skeleton>
                        <Typography className={classes.pos} component="p">
                            Loading Text subtitle..
                        </Typography>
                    </Skeleton>
                    <Skeleton>
                        <Typography className={classes.pos} component="p">
                            Loading Text subtitle..
                        </Typography>
                    </Skeleton>
                    <Skeleton>
                        <Typography className={classes.pos} component="p">
                            Loading Text subtitle..
                        </Typography>
                    </Skeleton>
                </CardContent>
                <CardActions className={classes.action}>
                    <Skeleton variant="rect" width={140} height={40} />
                </CardActions>
            </Card>
        </Grid>
        );
};

export default RecipeFormSkeleton;