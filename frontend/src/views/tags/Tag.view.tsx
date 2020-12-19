import React, { FunctionComponent, useState } from 'react';
// styling
import { useStyles } from './tag.view.style';
import { CssBaseline, Grid } from "@material-ui/core";
import { useSnackbar } from "notistack";
import CloseActionButton from "../../components/notifications/CloseActionButton";
import TagCreate from "./create/TagCreate";
import TagSearch from "./search/TagSearch";
import TagListSkeleton from "./loading/TagListSkeleton";

const TagView: FunctionComponent = (props): JSX.Element => {
    const classes = useStyles();
    const { enqueueSnackbar} = useSnackbar();
    // states
    const [tagListContent, setTagListContent] = useState<JSX.Element>(
        <React.Fragment>
            <TagListSkeleton/>
            <TagListSkeleton/>
            <TagListSkeleton/>
        </React.Fragment>
    );
    // notificationBox action - OK
    const actionButton = (key:number) => (
        <CloseActionButton keyObj={key} />
    );
    // event handlers
    const handleTagCreate = (action: string) => {
        console.log('Action was a: ', action);
        if(action === 'success') {
            enqueueSnackbar(`Tag record created !`, {variant: 'info', action: actionButton });
        } else if (action === 'failure') {
            enqueueSnackbar(`Error creating Tag record...`, {variant: 'error', action: actionButton });
        }
    };

    const handleTagSearch = (query: string) => {
        console.log('Query to search: ', query);
    };

    return (
        <div className = {classes.root}>
            <CssBaseline />
            <div className={classes.cardContent}>
                <Grid container spacing={1}>
                    <TagCreate onCreateTag={handleTagCreate}/>
                    <TagSearch onSearchTag={handleTagSearch}/>
                    {tagListContent}
                </Grid>
            </div>
        </div>
    );
}

export default TagView;