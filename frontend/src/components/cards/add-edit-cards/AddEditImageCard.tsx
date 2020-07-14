import React, { FunctionComponent } from 'react';
import { BsImage } from "react-icons/bs";

const AddEditImageCard: FunctionComponent = (): JSX.Element => {
    return (
        <React.Fragment>
            <div className="w-full md:w-1/3">
                <div className="md:flex shadow-lg max-w-lg m-2">
                    <div className="w-full px-4 py-4 bg-blue-500 text-white rounded-lg">
                        <div className="flex flex-col items-center">
                        </div>
                        <p className="mt-4">
                            Upload Images
                        </p>
                        <p className="text-sm">
                            Click here to upload images
                        </p>
                        <div className="flex items-center justify-center mt-4 top-auto">
                            <button className="focus:outline-none hover:bg-blue-800
                                                outline-none rounded-full bg-blue-700 p-4 mx-4">
                                <BsImage/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default AddEditImageCard;