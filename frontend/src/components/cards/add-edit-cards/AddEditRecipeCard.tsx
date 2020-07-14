import React, { FunctionComponent } from 'react';
import {AiFillGift, AiOutlineEdit} from "react-icons/ai";

const AddEditRecipeCard: FunctionComponent = (): JSX.Element => {
    return (
        <React.Fragment>
            <div className="w-full md:w-1/3">
                <div className="md:flex shadow-lg max-w-lg m-2">
                    <div className="w-full px-4 py-4 bg-green-400 text-white rounded-lg">
                        <div className="flex flex-col items-center">
                        </div>
                        <p className="mt-4">
                            Add Edit Recipes
                        </p>
                        <p className="text-sm">
                            Click here to add or update Recipes
                        </p>
                        <div className="flex items-center justify-center mt-4 top-auto">
                            <button className="focus:outline-none hover:bg-green-600 outline-none rounded-full bg-green-500 p-4 mx-4">
                                <AiFillGift/>
                            </button>
                            <button className="focus:outline-none hover:bg-green-600 outline-none rounded-full bg-green-500 p-4 mx-4">
                                <AiOutlineEdit/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default AddEditRecipeCard;