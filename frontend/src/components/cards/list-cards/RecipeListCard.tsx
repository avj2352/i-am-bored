import React, { FunctionComponent } from 'react';
import {BsListUl} from "react-icons/bs";

const RecipeListCard: FunctionComponent = (props): JSX.Element => {
    return (
        <React.Fragment>
            <div className="w-full md:w-1/2">
                <div className="md:flex shadow-lg max-w-lg m-2">
                    <div className="w-full px-4 py-4 bg-background-primary text-copy-primary rounded-lg">
                        <p className="mt-4">
                            See All Recipes
                        </p>
                        <p className="text-sm mt-4">
                            Click Below to see all Recipes...
                        </p>
                        <div className="flex items-center justify-center mt-4 top-auto text-black">
                            <button className="focus:outline-none hover:bg-gray-500 outline-none rounded-full bg-gray-400 p-4 mx-4">
                                <BsListUl/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default RecipeListCard;