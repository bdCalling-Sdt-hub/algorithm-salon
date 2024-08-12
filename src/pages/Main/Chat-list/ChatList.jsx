import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

// import { useGetAllGroupQuery } from '../../../redux/Features/getAllGroupApi';
// import Loading from '../../../Components/Loading';
// import { io } from 'socket.io-client';
import ChatListCart from './ChatListCart';


const chatList = [
    {
        id: 1,
        name: "Message List One",
        avatar: "https://i.ibb.co/jgHHRNY/image.jpg",

        lastMessage:{
            messageType:"text",
            message:"Stock rate increased 30%"
        },
        time: "5 min ago",
        roomId:"1"
    },
    {
        id: 2,
        name: "Message List Two",
        avatar: "https://i.ibb.co/jgHHRNY/image.jpg",
        lastMessage:{
            messageType:"text",
            message:"Stock rate increased 30%"
        },
        time: "5 min ago",
        roomId:"2"
    },
    {
        id: 3,
        name: "Message List Three",
        avatar: "https://i.ibb.co/jgHHRNY/image.jpg",
        lastMessage:{
            messageType:"text",
            message:"Stock rate increased 30%"
        },
        time: "5 min ago",
        roomId:"3"
    }
]

const ChatList = () => {
    const navigate = useNavigate();
    // const {data,isSuccess,isLoading,isError,error,refetch} = useGetAllGroupQuery();
    const [groups, setGroups] = useState([]);


    // useEffect(() => {
    //     if (isSuccess && data?.data?.attributes) {
    //         setGroups(data.data.attributes);
    //     }
    // }, [data, isSuccess]);


    // useEffect(() => {
    //     // Establish socket connection
    //     const socket = io("http://192.168.10.46:3032");

    //     // Listen for the `groups/updated` event
    //     socket.on('groups/updated', (updatedGroup) => {
    //         console.log('Updated group:', updatedGroup);
    //         setGroups((prevGroups) => {
    //             const groupIndex = prevGroups.findIndex(group => group._id === updatedGroup._id);
    //             if (groupIndex > -1) {
    //                 // Remove the existing group from its current position
    //                 const newGroups = prevGroups.filter(group => group._id !== updatedGroup._id);
    //                 // Add the updated group to the top of the list
    //                 return [updatedGroup, ...newGroups];
    //             } else {
    //                 // Add the new group to the top of the list
    //                 return [updatedGroup, ...prevGroups];
    //             }
    //         });
    //     });

    //     // Clean up the socket connection on unmount
    //     return () => {
    //         socket.disconnect();
    //     };
    // }, []);

    // useEffect(() => {
    //     refetch()
    // },[data])
    // console.log(data?.data?.attributes);
    // if(isLoading){
    //     return <Loading/>
    // }
   
    return (
        <div>
            <div className="flex justify-between items-center my-5">
        <p className=" text-[24px] font-medium">Chat List</p>
        
        {/* <div
          onClick={(e) => navigate("/chats/add-chat")}
          className="flex gap-2 items-center py-[15px]
                  px-[40px]
                  bg-secondary
                  rounded-lg
                  text-white
                  cursor-pointer
                  "
        >
          <FaPlus size={17} />
          <p>Create New Chat</p>
        </div> */}
            </div>
            <div >
                {
                    chatList.map((item) => {
                        return <ChatListCart key={item.id} item={item} />
                    })
                }
                {/* <ChatListCart/> */}
            </div>
        </div>
    );
}

export default ChatList;