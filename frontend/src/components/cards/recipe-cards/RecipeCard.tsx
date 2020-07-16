import React, { FunctionComponent } from 'react';

const RecipeCard: FunctionComponent = (props): JSX.Element => {
    return (
        <React.Fragment>
            <div className="w-full md:w-1/2">
                <div className="md:flex shadow-lg max-w-lg m-2">
                    <div className="w-full px-4 py-4 bg-background-primary text-copy-primary rounded-lg">
                        <div className="flex flex-col items-center">
                            <h2 className="text-xl font-medium mr-auto">Easy Beef Fry</h2>
                            <p className="self-end text-sm font-semibold tracking-tighter">
                                continental
                            </p>
                        </div>
                        <p className="text-sm mt-4">
                            Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis numquam
                            tempore commodi ipsa suscipit laboriosam, sit earum at sequ adipisicing elit. Amet
                            ...
                        </p>
                        <div className="flex items-center justify-end mt-4 top-auto">

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default RecipeCard;