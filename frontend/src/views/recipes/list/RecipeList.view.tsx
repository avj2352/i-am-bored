import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// material
import { CssBaseline, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid/Grid';
// custom
import { getAllRecipes, getAllRecipesByGroupId } from '../../../common/async/AsyncCalls';
import RecipeListSkeleton from '../loading/RecipeListSkeleton';
import { useStyles } from './recipe-list.view.styles';
import EmptySearchCard from '../../../components/card/404/EmptySearchCard';
import SimpleRecipeCard from '../card/SimpleRecipeCard';


const RecipeListView: FunctionComponent = (props): JSX.Element => {
    const { id } = useParams();
    const classes = useStyles();
    //lifecycle methods
    const defaultCardContent = (): JSX.Element => {
        return <React.Fragment>
            <RecipeListSkeleton/>
            <RecipeListSkeleton/>
            <RecipeListSkeleton/>
            <RecipeListSkeleton/>
            <RecipeListSkeleton/>
        </React.Fragment>;
    };
    // states
    const [recipeListContent, setRecipeListContent] = useState<JSX.Element>(defaultCardContent());
    const [title, setTitle] = useState<string>('All Recipes');
    
    const fetchRecipesOfType = useCallback((id: string)=>{
        setRecipeListContent(defaultCardContent());
        let asyncFetch = getAllRecipes();
        if (id === 'all') setTitle('All Recipes') 
        else setTitle('Loading...');
        switch(id) {
            case 'all':
                asyncFetch = getAllRecipes();
                break;
            default:
                asyncFetch = getAllRecipesByGroupId(id);
        }
        asyncFetch
            .then((res: any) => {
                if (res.data.length > 0) {
                    const list: JSX.Element[] = res.data?.map((el: any, index:number) => <SimpleRecipeCard
                        key={index}
                        onView={(id: string)=>console.log('Card detail to see: ', id)}
                        id = {el._id}
                        title = {el.title}
                        link = {el.link}
	                    isPrivate = {el.isPrivate}
	                    content = {el.content}
	                    html = {el.html}
	                    group = {el.group}
	                    createdBy = {el.createdBy}
	                    tags = {el.tags}
	                    items = {el.items}
	                    timers = {el.timers}
                        />
                    );
                    if (id !== 'all') setTitle(`Recipes under: ${res.data[0].group.title}`);
                    setRecipeListContent(<React.Fragment>
                        {list}
                    </React.Fragment>);
                } else {
                    setRecipeListContent(<EmptySearchCard type="empty"/>);
                }
            })
            .catch((err: any) => console.log('Error fetching: ', err));
    },[]);

    //component did mount
    useEffect(()=>{
        // console.log('List recipe type: ', id);
        fetchRecipesOfType(id);
    },[id]);
    return <React.Fragment>
        <div className = {classes.root}>
            <CssBaseline />
        <Grid container spacing={1}>
            <Typography className={classes.fullWidth} variant="h5" component="h2">{title}</Typography>
            {recipeListContent}
        </Grid>
        </div>
    </React.Fragment>;
};

export default RecipeListView;