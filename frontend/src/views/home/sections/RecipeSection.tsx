import React, { FunctionComponent } from 'react';
import RecipeCard from "../../../components/cards/recipe-cards/RecipeCard";
import BorderCard from "../../../components/cards/border-card/BorderCard";
import RecipeListCard from "../../../components/cards/list-cards/RecipeListCard";

const RecipeSection: FunctionComponent = (): JSX.Element => {
    return (
        <React.Fragment>
            <BorderCard title={`Recent Entered Recipes`}>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeListCard/>
            </BorderCard>
        </React.Fragment>
    );
}

export default RecipeSection;