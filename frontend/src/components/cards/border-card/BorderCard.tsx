import React, { FunctionComponent } from 'react';
import clsx from 'clsx';

interface IBorderCardProps {
    title?: string;
    borderBottom?: boolean;
}

const BorderCard: FunctionComponent<IBorderCardProps> = (props):JSX.Element => {
    const {children, title, borderBottom} = props;
    const baseClass = clsx({
        "relative flex flex-col": true,
        "md:flex-row justify-start items-start": true,
        "border-t-2 border-gray-400 my-4 py-4": true,
        "border-b-2": borderBottom
    });
    return (
        <div className={baseClass}>
            {title && <h2 className="border-section-title font-bold px-4 bg-background-tertiary">{title}</h2>}
            {children}
        </div>
    );
};

export default BorderCard;