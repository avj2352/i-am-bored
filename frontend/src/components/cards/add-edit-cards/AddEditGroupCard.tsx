import React, { FunctionComponent } from 'react';
import {BsFolderPlus} from "react-icons/bs";

const AddEditGroupCard: FunctionComponent = (props): JSX.Element => {
    return (
        <React.Fragment>
            <div className="w-full md:w-1/3">
                <div className="md:flex shadow-lg max-w-lg m-2">
                    <div className="w-full px-4 py-4 bg-orange-400 text-white rounded-lg">
                        <p className="mt-4">
                            Add Edit Groups
                        </p>
                        <p className="text-sm">
                            Click here to add or edit groups
                        </p>
                        <div className="flex items-center justify-center mt-4 top-auto">
                            <button className="focus:outline-none hover:bg-orange-600 outline-none rounded-full bg-orange-500 p-4 mx-4">
                                <BsFolderPlus/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default AddEditGroupCard;