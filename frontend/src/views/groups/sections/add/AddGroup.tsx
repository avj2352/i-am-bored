import React, { FunctionComponent } from 'react';

const AddGroup: FunctionComponent = (props): JSX.Element => {
    return (
        <React.Fragment>
            <div className="md:flex w-full shadow-lg m-2">
                <div className="w-full flex flex-col px-4 py-4 bg-background-primary text-copy-primary rounded-lg">
                    <div className="flex flex-col md:flex-row w-full mb-2">
                        <input type="text" placeholder="Enter Title*"
                               className="px-1 my-1 md:mr-1 py-1 placeholder-gray-500
                                          text-gray-700 relative bg-gray-200
                                          rounded text-sm shadow outline-none focus:outline-none
                                          focus:shadow-outline w-full md:w-2/3"/>
                        <input type="text" placeholder="slug (lowercase)*"
                               className="px-1 my-1 md:ml-1 py-1 placeholder-gray-500
                                          text-gray-700 relative bg-gray-200
                                          rounded text-sm shadow outline-none focus:outline-none
                                          focus:shadow-outline w-full md:w-1/3"/>
                    </div>
                    <input type="text" placeholder="Provide Description*"
                           className="px-1 py-1 placeholder-gray-500
                                          text-gray-700 relative bg-gray-200
                                          rounded text-sm shadow outline-none focus:outline-none
                                          focus:shadow-outline w-full"/>
                    <div className="flex flex-col w-full mt-4">
                        <div className="flex items-center">
                            <input type="checkbox" className="form-checkbox text-blue-500 bg-gray-800 border-gray-600"
                                   name="remember" id="remember"/>
                                <span className="mx-2 text-sm">Check if group is only for premium users</span>
                        </div>
                        <div className="flex flex-row">
                            <button
                                disabled={true}
                                className="w-full rounded
                                    shadow uppercase bg-green-500
                                    text-white
                                    text-lg py-2 px-2 tracking-wide shadow
                                    focus:outline-none hover:bg-green-600 focus:bg-green-600 z-10 mt-4">
                                        <span
                                            className="flex flex-row
                                            justify-center items-center">
                                            Create Group
                                        </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default AddGroup;