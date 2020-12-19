import React, {useState, useContext, FunctionComponent, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {LinearLoader} from "../../../components/loaders/linear-loader/LinearLoader";
// custom

const useStyles = makeStyles({
    card: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: 175,
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        flexGrow: 1
    },
    checkBoxContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    checkBoxText: {
        position: 'relative',
        top: '10px'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        textAlign: 'left',
        marginBottom: 12,
    },
    action: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    validationText: {
        color: 'red'
    }
});

interface ITagCreateProps {
    onCreateTag: (action: string) => void;
}

const TagCreate: FunctionComponent<ITagCreateProps> = (props) => {
    const classes = useStyles();

    // state
    const [tagTitle, setTagTitle] = useState('');
    const [tagDescription, setTagDescription] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState<string | null>('');

    // event handlers
    const handleChange = (event: any) => {
        console.log('Event is: ', event.target);
        if (event.target.name === 'title') {
            setTagTitle(event.target.value);
        } else {
            setTagDescription(event.target.value);
        }
    };

    const handleSubmit = () => {
        setLoading(true);
        if(tagTitle && tagDescription) {
            console.log('Input data is: ', tagTitle, tagDescription);
        }
    };

    const errorMsgText = () => <Typography className={classes.validationText} component="p">
        {errMsg}
    </Typography>;

    useEffect(()=>{
        if (tagTitle !== '' && tagDescription !=='' ) setErrMsg(null);
        else setErrMsg(`Please fill in missing fields`);
    },[tagTitle, tagDescription]);

    // render
    return (
        <Grid item xs={12} md={12}>
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Typography  variant="h5" component="h2">Create New Tag / Category</Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        All Fields are required to be filled in*
                    </Typography>
                    {errorMsgText()}
                    <LinearLoader display={isLoading}/>
                    <TextField
                        margin="normal"
                        required
                        id="title"
                        label="Tag Title"
                        name="title"
                        defaultValue = {tagTitle}
                        autoFocus
                        onBlur={handleChange}/>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="description"
                        name="description"
                        label="Provide Description"
                        type="description"
                        defaultValue = {tagDescription}
                        onBlur={handleChange}/>
                </CardContent>
                <CardActions className={classes.action}>
                    <Button onClick={handleSubmit} disabled={!!errMsg} variant="contained" size="medium" color="primary">Create Tag</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default TagCreate;