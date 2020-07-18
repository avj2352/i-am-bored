import React, {FunctionComponent} from 'react';
import { BsPencil, BsTrash } from 'react-icons/bs';

interface ITagCard {
    id: string;
    name: string;
    description: string;
    onDelete: (id: string) => void;
    onEdit: (id: string) => void;
};

const TagCard: FunctionComponent<ITagCard> = (props): JSX.Element => {
    const { id, name, description, onDelete, onEdit } = props;

    const handleDeleteClick = (id: string) => {
        onDelete(id);
    };

    const handleEditClick = (id: string) => {
        onEdit(id);
    };

    return (
        <React.Fragment>
            <div className="md:flex shadow-lg max-w-lg m-2">
                <div className="w-full px-4 py-4 bg-background-primary text-copy-primary rounded-lg">
                    <div className="flex flex-col items-center">
                        <h2 className="text-xl font-medium mr-auto">{name}</h2>
                    </div>
                    <p className="text-sm mt-4 text-left">{description}</p>
                    <div className="relative flex justify-end mt-2">
                        <button
                            onClick={handleEditClick.bind(null, id)}
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

export default TagCard;