import React, {FunctionComponent} from 'react';
import {BsFillStarFill, BsPencil, BsTrash} from 'react-icons/bs';

interface IGroupCard {
    id: string;
    title: string;
    slug: string;
    description: string;
    premium: boolean;
    onDelete: (id: string) => void;
};

const GroupCard: FunctionComponent<IGroupCard> = (props): JSX.Element => {
    const { id, title, slug, description, premium, onDelete } = props;

    const handleDeleteClick = (id: string) => {
      onDelete(id);
    };

    return (
        <React.Fragment>
            <div className="md:flex shadow-lg max-w-lg m-2">
                <div className="w-full px-4 py-4 bg-background-primary text-copy-primary rounded-lg">
                    <div className="flex flex-col items-center">
                        <h2 className="text-xl font-medium mr-auto">{title}</h2>
                        <p
                            className="self-end text-sm font-semibold
                        tracking-tighter rounded-full px-2
                        py-1 border-solid border-2 border-gray-600">
                            /{slug}
                        </p>
                    </div>
                    <p className="text-sm mt-4 text-left">{description}</p>
                    {premium && <p className="flex text-sm italic mt-4 text-left text-orange-200">
                        <BsFillStarFill className="mr-2"/>Premium users
                    </p>}
                    <div className="relative flex justify-end mt-2">
                        <button
                            className="hover:bg-green-300 hover:text-gray-700 p-2
                                    mx-2 rounded-full focus:outline-none">
                            <BsPencil/>
                        </button>
                        <button
                            onClick={handleDeleteClick.bind(null, id)}
                            className="hover:bg-orange-100 hover:text-gray-700 p-2
                                    mx-2 rounded-full focus:outline-none">
                            <BsTrash/>
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default GroupCard;