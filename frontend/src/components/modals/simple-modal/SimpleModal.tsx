import React, {FunctionComponent, useEffect, useState} from 'react';
import clsx from 'clsx';

interface ISimpleModalProps {
    display: boolean;
    title: string;
    btnLabel: string;
    onClose: (status: boolean) => void;
}

const SimpleModal: FunctionComponent<ISimpleModalProps> = (props):JSX.Element => {
    const { display, title, btnLabel, onClose, children } = props;
    const [status, setStatus] = useState<boolean>(display);
    //event handlers
    const handleClose = () => {
      onClose(false);
    };
    // side-effect
    useEffect(()=>{
        setStatus(display);
    },[display]);

    const baseClass = clsx({
        "z-30 flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-800 bg-opacity-75": status,
        "none": !status
    });

    const modalClass = clsx({
        "z-40 bg-white rounded-lg w-2/3 md:w-1/2": status,
        "none": !status
    });

    return (
        <React.Fragment>
            <div className={baseClass}>
                <div className={modalClass}>
                    {status && <div className="flex flex-col items-start p-4">
                        <div className="flex items-center w-full">
                            <div className="text-gray-900 font-medium text-lg">{title}</div>
                            <svg
                                onClick={handleClose}
                                className="ml-auto fill-current text-gray-700
                                w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                                <path d="M14.53 4.53l-1.06-1.06L9
                                7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47
                                4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
                            </svg>
                        </div>
                        <hr/>
                        <div>
                            <p className="text-gray-700 text-sm md:text-lg">
                                {children}
                            </p>
                        </div>
                        <hr/>
                        <div className="ml-auto">
                            <button
                                onClick={handleClose}
                                className="bg-transparent hover:bg-orange-500 text-gray-700
                                        font-semibold hover:text-white py-2 px-4 border
                                        border-blue-500 hover:border-transparent rounded">
                                {btnLabel}
                            </button>
                        </div>
                    </div>}
                </div>
            </div>
        </React.Fragment>
    );
};

export default SimpleModal;