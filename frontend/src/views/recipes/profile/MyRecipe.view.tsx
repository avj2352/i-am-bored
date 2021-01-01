import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { CssBaseline, Grid, Typography } from '@material-ui/core';
import { useSnackbar } from 'notistack';
// custom
import { IAppContextState, useGlobalState } from '../../../common/context/AppContext';
import EmptySearchCard from '../../../components/card/404/EmptySearchCard';
import CloseActionButton from '../../../components/notifications/CloseActionButton';
import { ISearch } from '../../../components/search/search-interface';
import { useStyles } from './my-recipe.view.styles';
import SearchCard from '../../../components/search/SearchCard';
import { DASHBOARD_ROUTES, useDashboardRouteDispatch } from '../../../layouts/dashboard/router/DashboardRouterContext';
import GroupListSkeleton from '../../groups/loading/GroupListSkeleton';
import MyRecipeCard from '../card/MyRecipeCard';
import { IRecipe } from '../common/recipe-interfaces';
import { deleteRecipeById, getAllRecipes, getAllRecipesByUserId, searchByText } from '../../../common/async/AsyncCalls';


const MyRecipeListView: FunctionComponent = (props): JSX.Element => {
    // classes
    const classes = useStyles();
    const { enqueueSnackbar} = useSnackbar();
    const dashboardDispatch: any =  useDashboardRouteDispatch();
    const appContext: IAppContextState = useGlobalState();
    const dashboardRouteDispatch: any = useDashboardRouteDispatch();
    // lifecycle methods
    const defaultCardContent = (): JSX.Element => {
        return <React.Fragment>
            <GroupListSkeleton/>
            <GroupListSkeleton/>
            <GroupListSkeleton/>
        </React.Fragment>;
    };
    // notificationBox action - OK
    const okActionButton = (key:number) => (
        <CloseActionButton keyObj={key} />
    );

    // states
    const [recipeListContent, setRecipeListContent] = useState<JSX.Element>(defaultCardContent());

    // lifecycle methods
    const fetchRecipes = useCallback(()=>{
        let asyncFetchCall:()=>Promise<any> = getAllRecipesByUserId;
        const userProfile = appContext.profile;
        if (!userProfile) {
            dashboardRouteDispatch ({
                type: DASHBOARD_ROUTES.WELCOME
            });
        } else if (userProfile.role === 'admin') {
            asyncFetchCall = getAllRecipes;
        }
        asyncFetchCall()
            .then((res: any) => {
                // console.log('Response is: ', res.data);
                if (res.data.length > 0) {
                    const list: JSX.Element[] = res.data?.map((recipe: any, index:number) => <MyRecipeCard
                        key={index}
                        id = {recipe._id}
                        title = {recipe.title}
                        link = {recipe.link}
	                    isPrivate = {recipe.isPrivate}
	                    content = {recipe.content}
	                    html = {recipe.html}
	                    group = {recipe.group}
	                    tags = {recipe.tags}
	                    items = {recipe.items}
                        timers = {recipe.timers}
                        onEdit = {handleRecipeItemEdit}
                        onDelete = {handleRecipeItemDelete}
                        />);
                    setRecipeListContent(<React.Fragment>{list}</React.Fragment>);
                } else {
                    setRecipeListContent(<EmptySearchCard type="empty"/>);
                }
            })
            .catch((err: any) => console.log('error fetching recipes: ', err));
    },[]);
    
    const handleRecipeItemEdit = (data: IRecipe) => {
        // console.log('Recipe to edit: ', data);
        dashboardDispatch ({
            type: DASHBOARD_ROUTES.UPDATE_RECIPES,
            payload: data.id
        });
    };

    const handleRecipeItemDelete = (id: string) => {
        setRecipeListContent(defaultCardContent);
        deleteRecipeById(id)
            .then((res: any) => {
                fetchRecipes();
                enqueueSnackbar(`Successfully deleted recipe...`,
                {variant: 'info', action: okActionButton });
            })
            .catch((err: any) => {
                console.log('Error deleting recipe: ', err);
                enqueueSnackbar(`Error deleting Group record...`,
                {variant: 'error', action: okActionButton });
            });
    };

    // event handlers
    const handleGroupSearch = (data: ISearch) => {
        setRecipeListContent(defaultCardContent());
        searchByText(data)
            .then((res: any) => {
                // console.log('Search Result is: ', res.data);
                // if (res.data.length > 0) {
                //     const list: JSX.Element[] = res.data?.map((item: any, index:number) => <GroupCard
                //         key={index}
                //         onEdit={handleGroupEdit}
                //         onDelete={handleGroupDelete}
                //         id={item._id}
                //         title={item.title}
                //         description={item.description}
                //         slug={item.slug}
                //         premium={item.premium}/>
                //     );
                //     setGroupListContent(<React.Fragment>
                //         {list}
                //     </React.Fragment>);
                // } else {
                //     setGroupListContent(<EmptySearchCard type="empty"/>);
                // }
            });
    };

    useEffect(()=>{
        fetchRecipes();
    },[]);

    return <React.Fragment>
        <div className = {classes.root}>
            <CssBaseline />
        <Grid container spacing={1}>
            <Typography  variant="h5" component="h2">My Recipes</Typography>
            <SearchCard table="recipes" onSearch={handleGroupSearch}/>
            {recipeListContent}
        </Grid>
        </div>
    </React.Fragment>;
};

export default MyRecipeListView;