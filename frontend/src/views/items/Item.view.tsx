import React, { FunctionComponent, useState } from 'react';
// styling
import { useStyles } from './item.view.style';
import { CssBaseline, Grid } from "@material-ui/core";
import { useSnackbar } from "notistack";
import CloseActionButton from "../../components/notifications/CloseActionButton";
import ItemCreate from "./create/ItemCreate";
import ItemSearch from "./search/ItemSearch";
import ItemListSkeleton from "./loading/ItemListSkeleton";

const ItemView: FunctionComponent = (props): JSX.Element => {
    const classes = useStyles();
    const { enqueueSnackbar} = useSnackbar();
    // states
    const [groupListContent, setItemListContent] = useState<JSX.Element>(
        <React.Fragment>
            <ItemListSkeleton/>
            <ItemListSkeleton/>
            <ItemListSkeleton/>
        </React.Fragment>
    );
    // notificationBox action - OK
    const actionButton = (key:number) => (
        <CloseActionButton keyObj={key} />
    );
    // event handlers
    const handleItemCreate = (action: string) => {
        console.log('Action was a: ', action);
        if(action === 'success') {
            enqueueSnackbar(`Item record created !`, {variant: 'info', action: actionButton });
        } else if (action === 'failure') {
            enqueueSnackbar(`Error creating Item record...`, {variant: 'error', action: actionButton });
        }
    };

    const handleItemSearch = (query: string) => {
        console.log('Query to search: ', query);
    };

    return (
        <div className = {classes.root}>
            <CssBaseline />
            <div className={classes.cardContent}>
                <Grid container spacing={1}>
                    <ItemCreate onCreateItem={handleItemCreate}/>
                    <ItemSearch onSearchItem={handleItemSearch}/>
                    {groupListContent}
                </Grid>
            </div>
        </div>
    );
}

export default ItemView;