import React, {FunctionComponent, useCallback, useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import clsx from "clsx";
import {showToasterTimed} from "../../../../common/util/ToasterHelper";
import {getGroupDetailsById, updateGroupById} from "../../../../common/async/AsyncCalls";
import WaveLoader from "../../../../components/loaders/wave-loader/WaveLoader";

interface IEditGroupModalProps {
    display: boolean;
    id: string;
    onSubmit: (status: boolean) => void;
};

const EditGroupModal: FunctionComponent<IEditGroupModalProps> = (props):JSX.Element => {
    const { display, id, onSubmit } = props;
    const { register, handleSubmit, errors, setValue, getValues } = useForm();
    const [status, setStatus] = useState<boolean>(display);
    const [loaderStatus, setLoaderStatus] = useState<boolean>(true);

    //event handlers
    const handleClose = () => {
        onSubmit(false);
    };

    // lifecycle methods
    const getGroupDetails = useCallback((id: string)=>{
        setLoaderStatus(true);
        console.log('Selected Group Id is: ', id);
        getGroupDetailsById(id)
            .then((res: any) => {
                const {title, slug, description, premium} = res.data[0];
                setValue("title", title, true);
                setValue("slug", slug, true);
                setValue("description", description, true);
                setValue("premium", premium, true);
            })
            .catch((err: any)=> console.log('Error retrieving group details: ', err))
            .finally(()=> setLoaderStatus(false));
    },[setValue]);

    const clearFormFields = useCallback(() => {
            setValue("title", '', false);
            setValue("slug", '', false);
            setValue("description", '', false);
            setValue("premium", false, false);
    },[setValue]);

    // toggle checkbox
    const toggleCheckbox = () => {
        const value = getValues('premium');
        setValue('premium', !value);
    };

    //event handlers
    const onFormSubmit = (data: any) => {
        if (data) {
            showToasterTimed('info', `Posting data`)
            const { title, slug, description, premium } = data;
            updateGroupById( id, {
                title,
                slug,
                description,
                premium
            }).then(()=>{
                showToasterTimed('success', `Group updated successfully`);
                clearFormFields();
                onSubmit(false);
            }).catch((err: any) => {
                showToasterTimed('error', `Error - Error updating group`);
                clearFormFields();
            })
        }
    };

    // side-effect
    useEffect(()=>{
        setStatus(display);
        if (display) {
            getGroupDetails(id);
        }
    },[display, getGroupDetails, id]);

    const baseClass = clsx({
        "z-30 flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-800 bg-opacity-75": status,
        "none": !status
    });

    const modalClass = clsx({
        "z-40 bg-background-primary rounded-lg w-full md:w-1/2": status,
        "none": !status
    });

    return (
        <React.Fragment>
            <div className={baseClass}>
                <div className={modalClass}>
                    {status && <div className="flex flex-col items-start p-4">
                        <h2>Edit Group Details</h2>
                        <WaveLoader display={loaderStatus} color={'red'}/>
                        <div className="md:flex w-full shadow-lg m-2">
                            <form className="w-full flex flex-col
                                    px-4 py-4 bg-background-primary
                                    text-copy-primary rounded-lg" onSubmit={handleSubmit(onFormSubmit)}>
                                <div className="flex flex-col md:flex-row w-full mb-2">
                                    <input
                                        id="title"
                                        name="title"
                                        type="text"
                                        ref={register({required: true, minLength: 4})}
                                        placeholder="Enter Title*"
                                        className="px-1 my-1 md:mr-1 py-1 placeholder-gray-500
                                          text-gray-700 relative bg-gray-200
                                          rounded text-sm shadow outline-none focus:outline-none
                                          focus:shadow-outline w-full md:w-2/3"/>
                                    <input
                                        id="slug"
                                        name="slug"
                                        type="text"
                                        ref={register({required: true, minLength: 2})}
                                        placeholder="slug (lowercase)*"
                                        className="px-1 my-1 md:ml-1 py-1 placeholder-gray-500
                                          text-gray-700 relative bg-gray-200
                                          rounded text-sm shadow outline-none focus:outline-none
                                          focus:shadow-outline w-full md:w-1/3"/>
                                </div>
                                <input
                                    id="description"
                                    name="description"
                                    type="text"
                                    placeholder="Provide Description*"
                                    ref={register({required: true, minLength: 4})}
                                    className="px-1 py-1 placeholder-gray-500
                                          text-gray-700 relative bg-gray-200
                                          rounded text-sm shadow outline-none focus:outline-none
                                          focus:shadow-outline w-full"/>
                                <div className="flex flex-col w-full mt-4">
                                    <div className="flex items-center">
                                        <input
                                            id="premium"
                                            name="premium"
                                            type="checkbox"
                                            ref={register({required: false})}
                                            className="form-checkbox text-blue-500
                                                        bg-gray-800 border-gray-600 cursor-pointer"/>
                                        <span className="mx-2 text-sm cursor-pointer" onClick={toggleCheckbox}>
                                    Check if group is only for premium users
                                </span>
                                    </div>
                                    {errors.title && <div className="px-2 py-1 rounded bg-orange-300
                                                                        my-2 text-sm text-white">
                                        Title is required and should be a minimum of 4 characters
                                    </div>}
                                    {errors.slug && <div className="px-2 py-1 rounded
                                                                        bg-orange-300 my-2 text-sm text-white">
                                        slug is required and should be a minimum of 2 characters
                                    </div>}
                                    {
                                        errors.description && <div
                                            className="px-2 py-1 rounded
                                                                        bg-orange-300 my-2 text-sm text-white">
                                            Description is required and should be a minimum of 4 characters
                                        </div>
                                    }
                                    <div className="flex flex-row">
                                        <input
                                            id="submit"
                                            name="submit"
                                            type="submit"
                                            value="Update"
                                            className="w-full rounded cursor-pointer
                                    shadow uppercase bg-green-500
                                    text-white
                                    text-lg py-2 px-2 tracking-wide shadow
                                    focus:outline-none hover:bg-green-600 focus:bg-green-600 z-10 my-2 mr-2"/>
                                        <button
                                            onClick={handleClose}
                                            className="w-full rounded cursor-pointer
                                                        shadow uppercase bg-gray-300
                                                        text-black text-lg py-2 px-2
                                                        tracking-wide shadow focus:outline-none
                                                        hover:bg-gray-500 focus:bg-gray-500 z-10 my-2 ml-2">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>}
                </div>
            </div>
        </React.Fragment>
    );
};

export default EditGroupModal;