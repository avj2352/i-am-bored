import React, {FunctionComponent, useCallback, useEffect, useState} from 'react';
// styling
import { useStyles } from './group.view.style';
import { CssBaseline, Grid } from "@material-ui/core";
import { useSnackbar } from "notistack";
import CloseActionButton from "../../components/notifications/CloseActionButton";
import GroupCreate from "./create/GroupCreate";
import GroupSearch from "./search/GroupSearch";
import GroupListSkeleton from "./loading/GroupListSkeleton";
import {getAllGroups} from "../../common/async/AsyncCalls";
import GroupCard, {IGroup} from "./card/GroupCard";
import EmptySearchCard from "../../components/card/404/EmptySearchCard";

const GroupView: FunctionComponent = (props): JSX.Element => {
    const classes = useStyles();
    const { enqueueSnackbar} = useSnackbar();
    // loading state
    const defaultGroupContent = (): JSX.Element => {
        return <React.Fragment>
            <GroupListSkeleton/>
            <GroupListSkeleton/>
            <GroupListSkeleton/>
        </React.Fragment>;
    };
    // states
    const [groupListContent, setGroupListContent] = useState<JSX.Element>(defaultGroupContent());
    // lifecycle methods
    const fetchAllGroups = useCallback(()=>{
        setGroupListContent(defaultGroupContent());
        getAllGroups()
            .then((res: any) => {
                console.log('Response is: ', res.data);
                const list: JSX.Element[] = res.data?.map((item: any, index:number) => <GroupCard
                    key={index}
                    onEdit={handleGroupEdit}
                    onDelete={handleGroupDelete}
                    id={item._id}
                    title={item.title}
                    description={item.description}
                    slug={item.slug}
                    premium={item.premium}/>
                );
                setGroupListContent(<React.Fragment>
                    {list}
                </React.Fragment>);
            }).catch((err: any) => console.log('Error fetching data: ', err));
    },[]);

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

    const handleGroupEdit = (data: IGroup) => {
        console.log('Group card to edit: ', data);
    };

    const handleGroupDelete = (id: string) => {
        console.log('Group card to delete: ', id);
    };

    // component did mount
    useEffect(()=>{
        fetchAllGroups();
    },[]);

    return (
        <div className = {classes.root}>
            <CssBaseline />
            <div className={classes.cardContent}>
                <Grid container spacing={1}>
                    <GroupCreate onCreateGroup={handleGroupCreate}/>
                    <GroupSearch onSearchGroup={handleGroupSearch}/>
                    {groupListContent}
                    {/*<EmptySearchCard />*/}
                </Grid>
            </div>
        </div>
    );
}

export default GroupView;