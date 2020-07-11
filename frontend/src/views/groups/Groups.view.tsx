import React, { FunctionComponent, useState, useEffect, useCallback } from 'react';
import {BsFolderPlus} from "react-icons/bs";
import NoGroups from "./sections/no-groups/NoGroups";
import BorderCard from "../../components/cards/border-card/BorderCard";
import AddGroup from "./sections/add/AddGroup";
import {deleteCardById, getAllCardList} from "../../common/async/AsyncCalls";
import GroupCard from "./sections/list/GroupCard";
import {showToasterTimed} from "../../common/util/ToasterHelper";

const GroupsView: FunctionComponent = (props): JSX.Element => {
    const [cardList, setCardList] = useState([]);

    // life-cycle methods
    const getAllCards = useCallback(()=>{
        getAllCardList()
            .then((res: any)=> {
                console.log('Groups: ', res.data);
                setCardList(res.data);
            })
            .catch((err: any) => {
                console.log('Error retrieving groups', err);
            });
    },[]);

    const deleteCard = useCallback((id:string)=>{
        deleteCardById(id)
            .then((res: any)=>{
                showToasterTimed("success", `Card deleted successfully`);
                getAllCards();
            })
            .catch((err: any)=>{
                console.log('Error deleting card: ', id, err);
            });
    },[]);

    // event handlers
    const handleDeleteCard = (id: string) => {
      console.log('Group View - Delete card: ', id);
      deleteCard(id);
    };

    const refreshCardList = () => {
        getAllCards();
    };

    // side-effects
    useEffect(()=>{
        getAllCards();
    },[]);

    return (
        <React.Fragment>
            <div className="flex flex-col justify-center w-full mb-4">
                <h1 className="text-2xl flex mb-4">
                    <BsFolderPlus className="m-2 mr-4"/>
                    Groups
                </h1>
                <BorderCard title={`Create New Group`}>
                    <AddGroup onSuccess={refreshCardList}/>
                </BorderCard>
                <div className="mb-12">
                    <BorderCard title={`List of Groups`} borderBottom={true}>
                        {cardList.length === 0 && <NoGroups/>}
                        {cardList.length>0 && cardList.map((item: any, index: number) =>
                            <div key={index} className="w-full md:w-1/2">
                                <GroupCard key={index}
                                    id={item._id}
                                    title={item.title}
                                    slug={item.slug}
                                    description={item.description}
                                    premium={item.premium}
                                    onDelete={handleDeleteCard}
                                />
                            </div>
                        )
                        }
                    </BorderCard>
                </div>
            </div>
        </React.Fragment>
    );
};

export default GroupsView;