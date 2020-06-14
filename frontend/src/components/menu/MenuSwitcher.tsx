import React, { FunctionComponent, useState } from 'react';
import { AiOutlineMenuUnfold, AiOutlineMenu } from 'react-icons/ai';

interface IMenuSwitcherProps {
    onToggle?: (status: boolean) => void;
}

const MenuSwitcher: FunctionComponent<IMenuSwitcherProps> = (props): JSX.Element => {
    const { onToggle } = props;
    const [status, setStatus] = useState(true);
    // event handlers
    const handleToggle = (status: boolean) => {
        setStatus(prev => !status);
        onToggle && onToggle(status);
    };

    return (
        <div className="text-2xl" onClick={handleToggle.bind(null, status)}>
            {status && <AiOutlineMenuUnfold/>}
            {!status && <AiOutlineMenu/>}
        </div>
    );
};

export default MenuSwitcher;