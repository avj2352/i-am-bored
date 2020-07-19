import React, { FunctionComponent, useState, useEffect, useCallback } from 'react';
import {BsFolderPlus} from "react-icons/bs";
import NoGroups from "./sections/no-groups/NoGroups";
import BorderCard from "../../components/cards/border-card/BorderCard";
import AddGroup from "./sections/add/AddGroup";
import {deleteGroupById, getAllGroups} from "../../common/async/AsyncCalls";
import GroupCard from "./sections/list/GroupCard";
import {showToasterTimed} from "../../common/util/ToasterHelper";
import EditGroupModal from "./modals/edit-group/EditGroupModal";
import WaveLoader from "../../components/loaders/wave-loader/WaveLoader";

const GroupsView: FunctionComponent = (props): JSX.Element => {
    const [cardList, setCardList] = useState([]);
    const [editModalStatus, setEditModalStatus] = useState(false);
    const [groupId, setGroupId] = useState('');
    const [loaderStatus, setLoaderStatus] = useState<boolean>(true);

    // life-cycle methods
    const getAllCards = useCallback(()=>{
        getAllGroups()
            .then((res: any)=> {
                setCardList(res.data);
            })
            .catch((err: any) => {
                console.log('Error retrieving groups', err);
            })
            .finally(()=>setLoaderStatus(false));
    },[]);

    const deleteCard = useCallback((id:string)=>{
        deleteGroupById(id)
            .then((res: any)=>{
                showToasterTimed("success", `Card deleted successfully`);
                getAllCards();
            })
            .catch((err: any)=>{
                console.log('Error deleting card: ', id, err);
            });
    },[getAllCards]);

    // event handlers
    const handleModal = (status: boolean) => {
        setEditModalStatus(status);
        getAllCards();
    };

    const handleDeleteCard = (id: string) => {
      console.log('Group View - Delete card: ', id);
      deleteCard(id);
    };

    const handleEditCard = (id: string) => {
        setGroupId(id);
        setEditModalStatus(true);
    };


    const refreshCardList = () => {
        getAllCards();
    };

    // side-effects
    useEffect(()=>{
        getAllCards();
    },[getAllCards]);

    return (
        <React.Fragment>
            <div className="flex flex-col justify-center w-full mb-4">
                <h1 className="text-2xl flex mb-4">
                    <BsFolderPlus className="m-2 mr-4"/>
                    Groups
                </h1>
                <BorderCard title={`Create New Group`}>
                    <AddGroup onSuccess={refreshCardList}/>
                    <EditGroupModal display={editModalStatus} id={groupId} onSubmit={handleModal}/>
                </BorderCard>
                <div className="mb-12">
                    <BorderCard title={`List of Groups`} borderBottom={true}>
                        <WaveLoader display={loaderStatus} color={'red'} title={'Loading'}/>
                        {!loaderStatus && cardList.length === 0 && <NoGroups/>}
                        {!loaderStatus && cardList.length>0 && cardList.map((item: any, index: number) =>
                            <div key={index} className="w-full md:w-1/2">
                                <GroupCard key={index}
                                    id={item._id}
                                    title={item.title}
                                    slug={item.slug}
                                    description={item.description}
                                    premium={item.premium}
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

export default GroupsView;