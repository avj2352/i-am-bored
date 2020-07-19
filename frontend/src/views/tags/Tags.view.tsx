import React, {FunctionComponent, useCallback, useEffect, useState} from 'react';
import { FaSlackHash } from "react-icons/fa";
import BorderCard from "../../components/cards/border-card/BorderCard";
import WaveLoader from "../../components/loaders/wave-loader/WaveLoader";
import NoTags from "./sections/no-tags/NoTags";
import AddTag from "./sections/add/AddTag";
import {deleteTagById, getAllTags} from "../../common/async/AsyncCalls";
import TagCard from "./sections/list/TagCard";
import EditTagModal from "./modals/edit-tag/EditTagModal";
import DeleteTagModal from "./modals/delete-tag/DeleteTagModal";
import {showToasterTimed} from "../../common/util/ToasterHelper";

const TagsView: FunctionComponent = (props): JSX.Element => {
    // states
    const [loaderStatus, setLoaderStatus] = useState<boolean>(true);
    const [cardList, setCardList] = useState([]);
    const [deleteCardDetails, setDeleteCardDetails] = useState<{name: string, id: string}>({name:'', id: ''});
    const [deleteModalStatus, setDeleteModalStatus] = useState(false);
    const [editModalStatus, setEditModalStatus] = useState(false);
    const [ tagId, setTagId ] = useState('');
    // lifecycle methods
    const getAllTagsFlow = useCallback(()=>{
        getAllTags()
            .then((res: any)=> {
                setCardList(res.data);
            })
            .catch((err: any) => {
                console.log('Error retrieving tags', err);
            })
            .finally(()=>setLoaderStatus(false));
    },[]);

    // event handlers

    const handleModal = (status: boolean) => {
        setEditModalStatus(status);
        getAllTagsFlow();
    };

    const refreshCardList = () => {
        getAllTagsFlow();
    };

    const handleDeleteCardDisplay = (id: string, name: string) => {
        console.log('Tag View - Delete card: ', id);
        setDeleteCardDetails({id, name});
        setDeleteModalStatus(true);
    };

    const handleEditCardDisplay = (id: string) => {
        setTagId(id);
        setEditModalStatus(true);
    };

    const handleDeleteCardSubmit = (id: string) => {
        deleteTagById(id)
            .then((res: any)=>{
                showToasterTimed("success", `Card deleted successfully`);
                setDeleteModalStatus(false);
                getAllTagsFlow();
            })
            .catch((err: any)=>{
                console.log('Error deleting card: ', id, err);
            });
    };

    const handleDeleteCardCancel = () => {
      setDeleteModalStatus(false);
    };



    useEffect(()=>{
        getAllTagsFlow();
    },[getAllTagsFlow]);

    return (
        <React.Fragment>
            <div className="flex flex-col justify-center w-full mb-4">
                <h1 className="text-2xl flex mb-4">
                    <FaSlackHash className="m-2 mr-4"/>
                    Tags
                </h1>
                <BorderCard title={`Create New Tag`}>
                    <AddTag onSuccess={refreshCardList}/>
                    <DeleteTagModal
                        display={deleteModalStatus}
                        id={deleteCardDetails.id}
                        name={deleteCardDetails.name}
                        onSubmit={handleDeleteCardSubmit} onCancel={handleDeleteCardCancel}/>
                    <EditTagModal display={editModalStatus} id={tagId} onSubmit={handleModal}/>
                </BorderCard>
                <div className="mb-12">
                    <BorderCard title={`List of Tags`} borderBottom={true}>
                        <WaveLoader display={loaderStatus} color={'red'} title={'Loading'}/>
                        {!loaderStatus && cardList.length === 0 && <NoTags/>}
                        {!loaderStatus && cardList.length>0 && cardList.map((item: any, index: number) =>
                            <div key={index} className="w-full md:w-1/2">
                                <TagCard key={index}
                                     id={item._id}
                                     name={item.name}
                                     description={item.description}
                                     onEdit={handleEditCardDisplay}
                                     onDelete={handleDeleteCardDisplay.bind(null, item._id, item.name)}/>
                            </div>
                        )}
                    </BorderCard>
                </div>
            </div>
        </React.Fragment>
    );
};

export default TagsView;