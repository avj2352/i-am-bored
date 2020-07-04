import React, { FunctionComponent } from 'react';

const SimpleButton: FunctionComponent = (props):JSX.Element => {
    const { children } = props;
    return (
        <React.Fragment>
            <button
               className="w-full rounded
                                    shadow uppercase bg-gray-400
                                    text-black
                                    text-lg py-3 px-4 tracking-wide shadow
                                    focus:outline-none hover:bg-gray-500 focus:bg-gray-500 z-10 mt-4">
                                        <span
                                            className="flex flex-row
                                            justify-center items-center">
                                            {children}
                                        </span>
            </button>
        </React.Fragment>
    );
};

export default SimpleButton;