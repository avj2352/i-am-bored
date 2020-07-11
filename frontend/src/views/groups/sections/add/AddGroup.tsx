import React, {FunctionComponent, useCallback} from 'react';
import { useForm } from 'react-hook-form';
import { addGroupDetails } from "../../../../common/async/AsyncCalls";
import {showToasterTimed} from "../../../../common/util/ToasterHelper";

interface IAddGroup {
    onSuccess: () => void;
}

const AddGroup: FunctionComponent<IAddGroup> = (props): JSX.Element => {
    const { onSuccess } = props;
    const { register, handleSubmit, errors } = useForm();

    // lifecycle methods
    const clearFormFields = useCallback(()=>{
        const titleRef: any = document.getElementById('title');
        const slugRef: any = document.getElementById('slug');
        const descRef: any = document.getElementById('description');
        const premiumRef: any = document.getElementById('premium');
        if (titleRef && slugRef && descRef && premiumRef) {
            titleRef.value = '';
            slugRef.value = '';
            descRef.value = '';
            premiumRef.checked = false;
        }
    },[]);

    //event handlers
    const onFormSubmit = (data: any) => {
      console.log('Form submitted is: ', data);
      if (data) {
          showToasterTimed('info', `Posting data`)
          const { title, slug, description, premium } = data;
          addGroupDetails({
              title,
              slug,
              description,
              premium
          }).then(()=>{
              showToasterTimed('success', `Group added successfully`);
              clearFormFields();
              onSuccess();
          }).catch((err: any) => {
              showToasterTimed('error', `Error - Group already exists`);
              clearFormFields();
          })
      }
    };

    // toggle checkbox
    const toggleCheckbox = () => {
        const checkBoxRef: any = document.getElementById('premium');
        checkBoxRef.checked = !checkBoxRef.checked;
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
                                className="form-checkbox text-blue-500 bg-gray-800 border-gray-600 cursor-pointer"/>
                                <span className="mx-2 text-sm cursor-pointer" onClick={toggleCheckbox}>
                                    Check if group is only for premium users
                                </span>
                        </div>
                        {errors.title && <div className="px-2 py-1 rounded bg-orange-300 my-2 text-sm text-white">
                            Title is required and should be a minimum of 4 characters
                        </div>}
                        {errors.slug && <div className="px-2 py-1 rounded bg-orange-300 my-2 text-sm text-white">
                            slug is required and should be a minimum of 2 characters
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
                                value="Create Group"
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

export default AddGroup;