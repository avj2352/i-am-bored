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
// ck editor
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
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

    const handleEditorDataChange = (data: any) => {
        setItemDescription(data);
    };

    const handleChange = (event: any) => {
        console.log('Event is: ', event.target);
        setItemTitle(event.target.value);
    };

    const handleSubmit = () => {
        setLoading(true);
        if(itemTitle && itemDescription ) {
            console.log('Input data is: ', itemTitle, itemDescription );
        }
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
                        className={classes.editorContainer}
                        editor={ ClassicEditor }
                        data="<p>Enter Item Description here!</p>"
                        onReady={ (editor: any) => {
                            // You can store the "editor" and use when it is needed.
                            console.log( 'Editor is ready to use!', editor );
                        } }
                        onChange={ ( event: any, editor: any ) => {
                            // console.log('Event and Edit - onChange: ', event, editor);
                            const data = editor.getData();
                            console.log('Data entered is: ', data);
                            handleEditorDataChange.bind(null, data);
                        } }
                        onBlur={ ( event: any, editor: any ) => {
                            console.log( 'Blur.', editor );
                        } }
                        onFocus={ ( event: any, editor: any ) => {
                            console.log( 'Focus.', editor );
                        } }
                    />
                </CardContent>
                <CardActions className={classes.action}>
                    <Button onClick={handleSubmit} disabled={!!errMsg} variant="contained" size="medium" color="primary">Create Item</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ItemCreate;