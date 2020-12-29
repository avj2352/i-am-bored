import React, { FunctionComponent, useEffect, useState } from 'react';
import { createStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Select from '@material-ui/core/Select';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button, Card, CardActions, CardContent, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
// custom
import { IRecipe } from '../../common/recipe-interfaces';
import ClassicEditor from '../../../../components/editor/ClassicEditor';
import { Autocomplete } from '@material-ui/lab';

interface IRecipeForm {
    data: IRecipe;
    groupDropdownList: any[];
    tagDropdownList: any[];
    itemDropdownList: any[];
    onSubmit: (data: IRecipe) => void;
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(11),
        flexBasis: '33.33%',
        flexShrink: 0,
        color: theme.palette.secondary.main
    },
    autocomplete: {
        marginTop: 25,
        marginBottom: 25
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(10),
        color: theme.palette.text.secondary,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    debug: {
        border: '1px solid red'
    },
    card: {
        minWidth: 175,
        marginTop: 5,
        marginBottom: 25
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
}));

const RecipeForm: FunctionComponent<IRecipeForm> = (props):JSX.Element => {
    const { data, onSubmit, groupDropdownList, tagDropdownList, itemDropdownList } = props;
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const [recipeTitle, setRecipeTitle] = useState<string>(data.title);
    const [editorData, setEditorData] = useState<{text: string, html: string}>({text: '', html: ''});
    const [recipeLink, setRecipeLink] = useState('');
    const [selectedGroup, setSelectedGroup] = useState<string>('');
    // const [selectedTags, setSelectedTags] = React.useState<any[]>([tagDropdownList[0], tagDropdownList[1]]);
    const [selectedTags, setSelectedTags] = React.useState<any[]>([]);
    const [selectedItems, setSelectedItems] = useState<any[]>([]);
    const [privateValue, setPrivateValue] = useState<string>('');
    const [errMsg, setErrMsg] = useState<string | null>('');
    const classes = useStyles();

    // event handlers
    const handleChange = (event: any) => {
        if (event.target.name === 'title') {
            setRecipeTitle(event.target.value);
        } else if (event.target.name === 'group') {
            setSelectedGroup(event.target.value);
        } else if (event.target.name === 'private') {
            setPrivateValue(event.target.value);
        } else if (event.target.name === 'link') {
            setRecipeLink(event.target.value);
        }
    };

    const handleAccordianChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
      };

    const handleSubmit = () => {
        console.log('Submitted data is: ', recipeTitle);
    };

    const handleEditorChange = (text: string, html: string) => {
        setEditorData({text, html});
    };

    const handleTagSelect = (event: any, newInputValue: any) => {
        setSelectedTags(newInputValue);
    };

    const handleItemSelect = (event: any, newInputValue: any) => {
        setSelectedItems(newInputValue);
    };

    const errorMsgText = () => <Typography className={classes.validationText} component="p">
        {errMsg}
    </Typography>;

    useEffect(()=>{
        console.log('Selected tag is: ', selectedTags);
    },[selectedTags]);

    const groupDropDownContent = () => groupDropdownList && groupDropdownList.map((item: any, index: number) => {
        return <MenuItem key={index} value={item.slug}>{item.title}</MenuItem>});

    return <React.Fragment>
        <Card className={classes.card}>
            <CardContent>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={12}>
                        {errorMsgText()}
                        <TextField margin="normal" required fullWidth id="title" label="Recipe Title" name="title"
                            value={recipeTitle} autoFocus onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputLabel id="groupLabel">Select Group *</InputLabel>
                        <Select name="group" labelId="groupLabel" id="group" fullWidth placeholder="Select Group"
                            value={selectedGroup} onChange={handleChange}>
                            {groupDropDownContent()}
                        </Select>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputLabel id="privateLabel">Recipe Type *</InputLabel>
                        <Select name="private" labelId="privateLabel" id="private" fullWidth placeholder="Recipe type"
                            value={privateValue} onChange={handleChange}>
                            <MenuItem value={10}>is Private</MenuItem>
                            <MenuItem value={20}>is Public</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Accordion expanded={expanded==='panel1' } onChange={handleAccordianChange('panel1')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            >
                            <Typography className={classes.heading}>Additional Info</Typography>
                            <Typography className={classes.secondaryHeading}>These fields are optional.
                                But filling them up, helps in better search results</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid item xs={12} md={12}>
                                <Grid className={classes.autocomplete} item xs={12} md={12}>
                                    <Autocomplete 
                                        value={selectedTags}
                                        multiple 
                                        id="tags-outlined"
                                        onChange={handleTagSelect}
                                        options={tagDropdownList}
                                        getOptionLabel={(option)=> option.name}
                                        filterSelectedOptions
                                        renderInput={(params) => (
                                        <TextField {...params} variant="outlined" label="Select Tags"
                                            placeholder="Tags" />
                                        )}/>
                                </Grid>
                                <Grid className={classes.autocomplete} item xs={12} md={12}>
                                    <Autocomplete 
                                        value={selectedItems}
                                        multiple 
                                        id="items-outlined"
                                        onChange={handleItemSelect}
                                        options={itemDropdownList}
                                        getOptionLabel={(option)=> option.name}
                                        filterSelectedOptions
                                        renderInput={(params) => (
                                        <TextField {...params} variant="outlined" label="Select Items"
                                            placeholder="Items" />
                                        )}/>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <TextField margin="normal" fullWidth id="link" label="Recipe Link" name="link"
                                        value={recipeLink} onChange={handleChange} />
                                </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <ClassicEditor placeholder={`Enter your recipe here`} onEditorChange={handleEditorChange} />
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions className={classes.action}>
                <Button onClick={handleSubmit} disabled={!!errMsg} variant="contained" size="medium"
                    color="primary">Submit</Button>
            </CardActions>
        </Card>
    </React.Fragment>
};

export default RecipeForm;