import React, { FunctionComponent } from 'react';

const NoTags: FunctionComponent = (props):JSX.Element => {
    return (
        <React.Fragment>
            <div className="md:flex w-full shadow-lg">
                <div className="w-full px-4 py-4 bg-background-primary text-copy-primary rounded-lg">
                    <div className="flex flex-col items-center">
                        <h2 className="text-xl font-medium mr-auto">Please create a Tag!</h2>
                    </div>
                    <p className="text-sm text-xl mt-4">
                        There are currently no tags available. Fill in the details to add a new tag
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default NoTags;