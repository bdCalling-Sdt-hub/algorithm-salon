import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChatListCart = ({item}) => {
    const navigate = useNavigate();
    const {
      lastMessage,
      roomId,
      participantsId,
      name,
      avatar,
      groupType,
      adminId,
      _id,
      unreadCount
    } = item;
    return (
      <div className="bg-primary cursor-pointer rounded-lg p-2 my-3">
    <div className="flex justify-between items-center">
      <div
        onClick={() => navigate(`/chats/${roomId}`)}
        className="flex items-center gap-2 p-2 w-[90%]"
      >
        <img
          className="w-[52px] h-[52px] rounded-full p-2"
        //   src={`${import.meta.env.VITE_BASE_URL}${avatar?.publicFileURL}`}
        src={avatar}
          alt=""
        />
        <div>
          <h1 className="text-[22px] font-medium">{name}</h1>
          <p className="text-[14px] text-[#979797]">
            {lastMessage?.messageType === "text"
              ? lastMessage?.message?.length > 20
                ? `${lastMessage?.message.slice(0, 20)}...`
                : lastMessage?.message
              : lastMessage?.messageType === "image"
              ? "Image"
              : lastMessage?.messageType === "video"
              ? "Video"
              : "File"}
          </p>
        </div>
      </div>
    </div>
  </div>
    );
  };

export default ChatListCart;
