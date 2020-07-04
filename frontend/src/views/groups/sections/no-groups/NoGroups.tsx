import React, { FunctionComponent } from 'react';

const NoGroups: FunctionComponent = (props):JSX.Element => {
    return (
        <React.Fragment>
            <div className="md:flex w-full shadow-lg">
                <div className="w-full px-4 py-4 bg-background-primary text-copy-primary rounded-lg">
                    <div className="flex flex-col items-center">
                        <h2 className="text-xl font-medium mr-auto">Please add Group!</h2>
                    </div>
                    <p className="text-sm text-xl mt-4">
                        There are currently no groups added. Fill in the details to add a new group
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default NoGroups;