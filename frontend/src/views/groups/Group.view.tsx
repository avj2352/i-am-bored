import React, { FunctionComponent } from 'react';
// styling
import { useStyles } from './group.view.style';
import {CssBaseline, Grid} from "@material-ui/core";
import {useSnackbar} from "notistack";
import CloseActionButton from "../../components/notifications/CloseActionButton";
import GroupCreate from "./create/GroupCreate";
import GroupSearch from "./search/GroupSearch";

const GroupView: FunctionComponent = (props): JSX.Element => {
    const classes = useStyles();
    const { enqueueSnackbar} = useSnackbar();
    // notificationBox action - OK
    const actionButton = (key:number) => (
        <CloseActionButton keyObj={key} />
    );
    // event handlers
    const handleGroupCreate = (action: string) => {
        console.log('Action was a: ', action);
        if(action === 'success') {
            enqueueSnackbar(`Group record created !`, {variant: 'info', action: actionButton });
        } else if (action === 'failure') {
            enqueueSnackbar(`Error creating Group record...`, {variant: 'error', action: actionButton });
        }
    };

    const handleGroupSearch = (query: string) => {
        console.log('Query to search: ', query);
    };

    return (
        <div className = {classes.root}>
            <CssBaseline />
            <div className={classes.cardContent}>
                <Grid container spacing={1}>
                    <GroupCreate onCreateGroup={handleGroupCreate}/>
                    <GroupSearch onSearchGroup={handleGroupSearch}/>
                </Grid>
            </div>
        </div>
    );
}

export default GroupView;