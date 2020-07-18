import React, {FunctionComponent, useCallback} from 'react';
import { useForm } from 'react-hook-form';
import { showToasterTimed } from "../../../../common/util/ToasterHelper";
import {addTagDetails} from "../../../../common/async/AsyncCalls";

interface IAddTag {
    onSuccess: () => void;
}

const AddTag: FunctionComponent<IAddTag> = (props): JSX.Element => {
    const { onSuccess } = props;
    const { register, handleSubmit, errors, setValue } = useForm();

    // lifecycle methods
    const clearFormFields = useCallback(() => {
        setValue("title", '', false);
        setValue("description", '', false);
    },[setValue]);

    //event handlers
    const onFormSubmit = (data: any) => {
        if (data) {
            showToasterTimed('info', `Posting data`)
            const { title, description } = data;
            const payload = {name: title, description}
            addTagDetails(payload)
                .then(()=>{
                    showToasterTimed('success', `Tag added successfully`);
                    clearFormFields();
                    onSuccess();
                }).catch((err: any) => {
                    showToasterTimed('error', `Error - Tag already exists`);
                    clearFormFields();
            });
        }
    };

    return (
        <React.Fragment>
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
                            placeholder="Enter Tag Name*"
                            className="px-1 my-1 md:mr-1 py-1 placeholder-gray-500
                                          text-gray-700 relative bg-gray-200
                                          rounded text-sm shadow outline-none focus:outline-none
                                          focus:shadow-outline w-full md:w-2/3"/>
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
                        {errors.title && <div className="px-2 py-1 rounded bg-orange-300 my-2 text-sm text-white">
                            Title is required and should be a minimum of 4 characters
                        </div>}
                        {
                            errors.description && <div
                                className="px-2 py-1 rounded bg-orange-300 my-2 text-sm text-white">
                                Description is required and should be a minimum of 4 characters
                            </div>
                        }
                        <div className="flex flex-row">
                            <input
                                id="submit"
                                name="submit"
                                type="submit"
                                value="Create Tag"
                                className="w-full rounded cursor-pointer
                                    shadow uppercase bg-green-500
                                    text-white
                                    text-lg py-2 px-2 tracking-wide shadow
                                    focus:outline-none hover:bg-green-600 focus:bg-green-600 z-10 mt-4"/>
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
};

export default AddTag;