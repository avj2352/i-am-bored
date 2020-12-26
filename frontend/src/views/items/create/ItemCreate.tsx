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
// rich editor
import CKEditor from 'ckeditor4-react';
import './ck-editor.css';
// custom

const useStyles = makeStyles({
    card: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: 175,
    },
    editorContainer: {
        width: '100%',
        minWidth: 200,
        border: '1px solid red'
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

interface IItemCreateProps {
    onCreateItem: (action: string) => void;
}

const ItemCreate: FunctionComponent<IItemCreateProps> = (props) => {
    const classes = useStyles();

    // state
    const [itemTitle, setItemTitle] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState<string | null>('');

    const handleChange = (event: any) => {
        setItemTitle(event.target.value);
    };

    const handleSubmit = () => {
        setLoading(true);
        if(itemTitle && itemDescription ) {
            console.log('Input data is: ', itemTitle, itemDescription );
        }
    };

    const handleEditorChange = ( evt: any ) =>{
        console.log('Editor changed: ', evt.editor.getData());
        setItemDescription(evt.editor.getData());
    };

    const errorMsgText = () => <Typography className={classes.validationText} component="p">
        {errMsg}
    </Typography>;

    useEffect(()=>{
        if (itemTitle !== '' && itemDescription !=='' ) setErrMsg(null);
        else setErrMsg(`Please fill in missing fields`);
    },[itemTitle, itemDescription]);

    // render
    return (
        <Grid item xs={12} md={12}>
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Typography  variant="h5" component="h2">Create New Item / Category</Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        All Fields are required to be filled in*
                    </Typography>
                    {errorMsgText()}
                    <LinearLoader display={isLoading}/>
                    <TextField
                        margin="normal"
                        required
                        id="title"
                        label="Item Title"
                        name="title"
                        defaultValue = {itemTitle}
                        autoFocus
                        onBlur={handleChange}/>
                     <CKEditor
                        className="editor"
                        type="classic"
                        onChange={handleEditorChange}
                        data="<p>Hello from CKEditor 4!</p>"/>
                </CardContent>
                <CardActions className={classes.action}>
                    <Button onClick={handleSubmit} disabled={!!errMsg} variant="contained" size="medium" color="primary">Create Item</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ItemCreate;