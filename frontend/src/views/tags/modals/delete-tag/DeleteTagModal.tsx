import React, {FunctionComponent, useEffect, useState} from 'react';
import clsx from "clsx";

interface IDeleteTagModalProps {
    display: boolean;
    id: string;
    name: string;
    onSubmit: (id: string) => void;
    onCancel: () => void;
};

const DeleteTagModal: FunctionComponent<IDeleteTagModalProps> = (props):JSX.Element => {
    const { display, id, name, onSubmit, onCancel } = props;
    const [status, setStatus] = useState<boolean>(display);

    //event handlers
    const handleModalSubmit = (id: string) => {
        onSubmit(id);
    };

    const handleModalClose = () => {
        onCancel();
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
        "z-40 bg-background-primary rounded-lg w-full md:w-1/3": status,
        "none": !status
    });

    return (
        <React.Fragment>
            <div className={baseClass}>
                <div className={modalClass}>
                    {status && <div className="flex flex-col items-start p-4">
                    <h2>Delete Tag ?</h2>
                    <div className="md:flex w-full shadow-lg m-2">
                        <div className="w-full flex flex-col
                                    px-4 py-4 bg-background-primary
                                    text-copy-primary rounded-lg">
                            <p>Are you sure you want to Delete Tag - &quot;<strong>{name}</strong>&quot; ?</p>
                            <p className="my-2 text-sm">
                                Once deleted, all references, search capabilities
                                to the tag &quot;<strong>{name}</strong>&quot; will be lost.
                                This action cannot be undone.
                            </p>
                            <div className="flex flex-row">
                                <button
                                    onClick={handleModalSubmit.bind(null, id)}
                                    className="w-full rounded cursor-pointer
                                                    shadow uppercase bg-green-500 text-white
                                                    text-lg py-2 px-2 tracking-wide shadow
                                                    focus:outline-none hover:bg-green-600
                                                    focus:bg-green-600 z-10 my-2 mr-2">
                                    Yes
                                </button>
                                <button
                                    onClick={handleModalClose}
                                    className="w-full rounded cursor-pointer
                                                        shadow uppercase bg-gray-300
                                                        text-black text-lg py-2 px-2
                                                        tracking-wide shadow focus:outline-none
                                                        hover:bg-gray-500 focus:bg-gray-500 z-10 my-2 ml-2">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>}
                </div>
            </div>
        </React.Fragment>
    );
};

export default DeleteTagModal;