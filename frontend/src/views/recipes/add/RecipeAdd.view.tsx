import { Grid, makeStyles, Typography } from '@material-ui/core';
import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { getAllGroups, getAllItems, getAllTags } from '../../../common/async/AsyncCalls';
import { LinearLoader } from '../../../components/loaders/linear-loader/LinearLoader';
import { IRecipe } from '../common/recipe-interfaces';
import RecipeForm from '../components/form/RecipeForm';
import RecipeFormSkeleton from '../loading/RecipeFormSkeleton';

const useStyles = makeStyles(theme => ({
    container: {
        width: '95%',
        display: 'flex',
        flexDirection: 'column'
    },
}));

const RecipeAddView: FunctionComponent = (props): JSX.Element => {
    const classes = useStyles();
    // states
    const [title, setTitle] = useState('Loading Form...');
    const [isLoading, setLoading] = useState<boolean>(false);
    // const [groupDropdownList, setGroupDropdownList] = useState<any[]>([]);
    // const [tagDropdownList, setTagDropdownList] = useState<any[]>([]);
    // const [itemDropdownList, setItemDropdownList] = useState<any[]>([]);
    const [formContent, setFormContent] = useState<JSX.Element>(<RecipeFormSkeleton/>);
    
    const getDefaultData = ():IRecipe => {
        return {
            title: '',
            link: '',
            isPrivate: false,
            content: '',
            html: '',
            group: null,
            tags: [],
            items: [],
            timers: [],
        };
    };

    // lifecycle methods
    const fetchAllDropdowns = useCallback(()=>{
        const promiseList: any[] = [getAllGroups(), getAllTags(), getAllItems()];
        Promise.all(promiseList)
            .then((res: any) => {
                if (res && res.length > 2) {
                    setFormContent(
                        <RecipeForm
                            data={getDefaultData()}  
                            groupDropdownList={res[0].data}
                            tagDropdownList={res[1].data}
                            itemDropdownList={res[2].data}
                            onSubmit={handleFormSubmit}/>
                    );
                }
            })
            .catch((err: any) => console.log('Error fetching data: ', err))
            .finally(()=> {setLoading(false); setTitle(`Create New Recipe`)});
    },[]);

    // event handlers
    const handleFormSubmit = (data: IRecipe) => {
        setLoading(true);
        console.log('New Recipe form data is: ', data);
    };

    useEffect(()=>{
        fetchAllDropdowns();
    },[]);

    return <React.Fragment>
        <Grid className={classes.container} container spacing={1}>
        <Typography  variant="h5" component="h2">{title}</Typography>
        <LinearLoader display={isLoading}/>
        {formContent}
        </Grid>
    </React.Fragment>;
};

export default RecipeAddView;