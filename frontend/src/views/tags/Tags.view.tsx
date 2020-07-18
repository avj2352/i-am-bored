import React, {FunctionComponent, useCallback, useEffect, useState} from 'react';
import { FaSlackHash } from "react-icons/fa";
import BorderCard from "../../components/cards/border-card/BorderCard";
import WaveLoader from "../../components/loaders/wave-loader/WaveLoader";
import NoTags from "./sections/no-tags/NoTags";
import AddTag from "./sections/add/AddTag";
import { getAllTags } from "../../common/async/AsyncCalls";
import TagCard from "./sections/list/TagCard";
import EditTagModal from "./modals/edit-tag/EditTagModal";

const TagsView: FunctionComponent = (props): JSX.Element => {
    // states
    const [loaderStatus, setLoaderStatus] = useState<boolean>(true);
    const [cardList, setCardList] = useState([]);
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

    const handleDeleteCard = (id: string) => {
        console.log('Tag View - Delete card: ', id);
    };

    const handleEditCard = (id: string) => {
        console.log('Tag View - Update card: ', id);
        setTagId(id);
        setEditModalStatus(true);
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
                                           onEdit={handleEditCard}
                                           onDelete={handleDeleteCard}
                                />
                            </div>
                        )}
                    </BorderCard>
                </div>
            </div>
        </React.Fragment>
    );
};

export default TagsView;