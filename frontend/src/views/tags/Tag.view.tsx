import React, {FunctionComponent, useCallback, useEffect, useState} from 'react';
// styling
import {useStyles} from './tag.view.style';
import {CssBaseline, Grid} from "@material-ui/core";
import {useSnackbar} from "notistack";
import CloseActionButton from "../../components/notifications/CloseActionButton";
import TagCreate from "./create/TagCreate";
import TagSearch from "./search/TagSearch";
import TagListSkeleton from "./loading/TagListSkeleton";
import {ITag} from "./common/tag-interfaces";
import {ISearch} from "../../components/search/search-interface";
import {deleteTagById, getAllTags, searchByText} from "../../common/async/AsyncCalls";
import GroupCard from "../groups/card/GroupCard";
import EmptySearchCard from "../../components/card/404/EmptySearchCard";
import TagCard from "./card/TagCard";
import SearchCard from "../../components/search/SearchCard";

const TagView: FunctionComponent = (props): JSX.Element => {
    const classes = useStyles();
    const {enqueueSnackbar} = useSnackbar();
    // loading state
    const defaultTagContentList = (): JSX.Element => <React.Fragment>
        <TagListSkeleton/>
        <TagListSkeleton/>
        <TagListSkeleton/>
    </React.Fragment>;
    // states
    const [tagListContent, setTagListContent] = useState<JSX.Element>(defaultTagContentList());
    const [isModal, setModal] = useState<boolean>(false);
    const [tagModalData, setTagModalData] = useState<ITag>({
        id: '',
        name: '',
        description: ''
    });
    // notificationBox action - OK
    const okActionButton = (key: number) => (
        <CloseActionButton keyObj={key}/>
    );
    // lifecycle methods
    const fetchAllTags = useCallback(() => {
        setTagListContent(defaultTagContentList());
        getAllTags()
            .then((res: any) => {
                // console.log('Search Result is: ', res.data);
                if (res.data.length > 0) {
                    const list: JSX.Element[] = res.data?.map((item: any, index: number) => <TagCard
                        key={index}
                        onEdit={handleTagEdit}
                        onDelete={handleTagDelete}
                        id={item._id}
                        name={item.name}
                        description={item.description}/>
                    );
                    setTagListContent(<React.Fragment>
                        {list}
                    </React.Fragment>);
                } else {
                    setTagListContent(<EmptySearchCard type="empty"/>);
                }
            }).catch((err: any) => console.log('Error fetching data: ', err));
    }, []);

    // event handlers
    const handleTagCreate = (action: string) => {
        // console.log('Action was a: ', action);
        if (action === 'success') {
            enqueueSnackbar(`Tag record created !`, {variant: 'info', action: okActionButton});
            fetchAllTags();
        } else if (action === 'failure') {
            enqueueSnackbar(`Error creating Tag record...`, {variant: 'error', action: okActionButton});
        }
    };

    const handleTagEdit = (data: ITag) => {
        setTagModalData(data);
        setModal(true);
    };

    const handleTagDelete = (id: string) => {
        deleteTagById(id)
            .then((res: any) => {
                enqueueSnackbar(`Tag record deleted !`, {variant: 'info', action: okActionButton});
                return fetchAllTags();
            })
            .catch((err: any) => enqueueSnackbar(`Error deleting Tag record...`,
                {variant: 'error', action: okActionButton}))
    };

    const handleTagSearch = (data: ISearch) => {
        setTagListContent(defaultTagContentList());
        searchByText(data)
            .then((res: any) => {
                // console.log('Search Result is: ', res.data);
                if (res.data.length > 0) {
                    const list: JSX.Element[] = res.data?.map((item: any, index: number) => <TagCard
                        key={index}
                        onEdit={handleTagEdit}
                        onDelete={handleTagDelete}
                        id={item._id}
                        name={item.name}
                        description={item.description}/>
                    );
                    setTagListContent(<React.Fragment>
                        {list}
                    </React.Fragment>);
                } else {
                    setTagListContent(<EmptySearchCard type="empty"/>);
                }
            }).catch((err: any) => console.log('Error Searching data: ', err));
    };

    // Component did mount
    useEffect(()=>{
        fetchAllTags();
    },[]);
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <div className={classes.cardContent}>
                <Grid container spacing={1}>
                    <TagCreate onCreateTag={handleTagCreate}/>
                    <SearchCard table="tags" onSearch={handleTagSearch}/>
                    {tagListContent}
                </Grid>
            </div>
        </div>
    );
}

export default TagView;