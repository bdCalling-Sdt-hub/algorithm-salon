import { Image } from "antd";
import React, { useRef, useState } from "react";
import { FaArrowLeft, FaDownload } from "react-icons/fa6";
import { MdOutlineAttachFile } from "react-icons/md";
import { Link } from "react-router-dom";

const fakeChats = [
  {
    _id: "1",
    senderId: {
      _id: "user1",
      name: "John Doe",
      image: {
        publicFileURL: "https://i.ibb.co/QF5M4yw/service.png",
      },
    },
    messageType: "text",
    text: "Hello, how are you?",
    file: null,
    createdAt: "2024-07-25T12:34:56Z",
  },
  {
    _id: "2",
    senderId: {
      _id: "user2",
      name: "Jane Smith",
      image: {
        publicFileURL: "https://i.ibb.co/jTBcX2k/appoinment-logo.jpg",
      },
    },
    messageType: "image",
    text: "Check out this picture!",
    file: {
      publicFileURL: "https://i.ibb.co/jTBcX2k/appoinment-logo.jpg",
    },
    createdAt: "2024-07-25T12:35:56Z",
  },
  {
    _id: "3",
    senderId: {
      _id: "user1",
      name: "John Doe",
      image: {
        publicFileURL: "https://i.ibb.co/QF5M4yw/service.png",
      },
    },
    messageType: "video",
    text: "Watch this video!",
    file: {
      publicFileURL: "/path/to/video.mp4",
    },
    createdAt: "2024-07-25T12:36:56Z",
  },
  {
    _id: "4",
    senderId: {
      _id: "user2",
      name: "Jane Smith",
      image: {
        publicFileURL: "https://i.ibb.co/jTBcX2k/appoinment-logo.jpg",
      },
    },
    messageType: "application",
    text: "Here's the file you requested.",
    file: {
      publicFileURL: "/path/to/file.pdf",
    },
    createdAt: "2024-07-25T12:37:56Z",
  },
  {
    _id: "5",
    senderId: {
      _id: "user1",
      name: "John Doe",
      image: {
        publicFileURL: "https://i.ibb.co/QF5M4yw/service.png",
      },
    },
    messageType: "audio",
    text: "Listen to this audio.",
    file: {
      publicFileURL: "/path/to/audio.mp3",
    },
    createdAt: "2024-07-25T12:38:56Z",
  },
];

const getTimeAgo = (timestamp) => {
  const now = new Date();
  const date = new Date(timestamp);
  const secondsAgo = Math.floor((now - date) / 1000);
  const minutesAgo = Math.floor(secondsAgo / 60);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);
  const yearsAgo = Math.floor(daysAgo / 365);

  if (yearsAgo > 0) {
    return yearsAgo === 1 ? "1 year ago" : `${yearsAgo} years ago`;
  } else if (daysAgo > 0) {
    return daysAgo === 1 ? "1 day ago" : `${daysAgo} days ago`;
  } else if (hoursAgo > 0) {
    return hoursAgo === 1 ? "1 hour ago" : `${hoursAgo} hours ago`;
  } else if (minutesAgo > 0) {
    return minutesAgo === 1 ? "1 minute ago" : `${minutesAgo} minutes ago`;
  } else {
    return "just now";
  }
};

const Message = () => {
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState("");
  const chatContainerRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleMessageSend = () => {
    // if (messages) {
    //   let dataToSend = {
    //     roomId: chatId,
    //     senderId: UserData?._id,
    //     text: messages,
    //     messageType: "text",
    //   };
    //   setMessages("");
    //   if (chatContainerRef.current) {
    //     chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    //   }
    //   refetchGroups();
    //    // Attempt to refetch chat messages
    //    refetchMessage().then(() => {
    //     console.log("Chat messages refetched successfully.");
    //   }).catch((error) => {
    //     console.error("Error while refetching chat messages:", error);
    //   });
    //   socket.emit("chat/send", dataToSend, (response) => {
    //     console.log("Message sent:", response);
    //      // Clear message input
    //   setMessages("");
    //   // Refetch group data
    //   refetchGroups();
    //   // Refetch chat messages
    //   // refetchMessage();
    //   refetchMessage()
    //   });
    // }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      //   handleMessageSend();
    }
  };

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileUpload = async (e) => {
    // const file = e.target.files[0];
    // try {
    //   const formData = new FormData();
    //   let messageType = "text"; // Default messageType
    //   if (file) {
    //     const fileType = file.type.split("/")[0];
    //     if (
    //       fileType === "image" ||
    //       fileType === "audio" ||
    //       fileType === "video" ||
    //       fileType === "application"
    //     ) {
    //       formData.append("image", file);
    //       messageType = fileType;
    //     }
    //   }
    //   formData.append("messageType", messageType);
    //   formData.append("roomId", chatId);
    //   formData.append("senderId", UserData?._id);
    //   formData.append("text", "");
    //   const response = await setFile(formData);
    //   if (response?.data?.statusCode !== 200) {
    //     console.error(response.message);
    //     Swal.fire({
    //       icon: "error",
    //       title: "Oops...",
    //       text: response?.error?.data?.message,
    //     });
    //   } else {
    //     refetchGroups();
    //   }
    // } catch (error) {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: error?.data?.message,
    //   });
    // }
  };
  return (
    <div className="mt-[24px] relative border-secondary border-[1px] bg-white h-[780px] w-full rounded-2xl">
      <div className="p-[30px]">
        <div className="text-2xl font-semibold border-b-[1px] border-secondary pb-[20px] flex items-center">
          <Link to={`/chat-list/1`}>
            <FaArrowLeft />
          </Link>
          <img
            className="w-[52px] h-[52px] rounded-full p-2"
            // src={`${import.meta.env.VITE_BASE_URL}${
            //   chatDetails?.data?.attributes?.avatar?.publicFileURL
            // }`}
            src="https://i.ibb.co/jgHHRNY/image.jpg"
            alt=""
          />
          <h1>{"Chat List One"}</h1>
        </div>

        <div ref={chatContainerRef} className="h-[600px] overflow-y-scroll">
          {fakeChats
            .slice()
            .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
            .map((c) =>
              c?.senderId?._id === "user1" ? (
                <div
                  className="flex flex-row-reverse gap-5 mt-[32px] mr-5 mb-5"
                  key={c._id}
                >
                  <img
                    className="w-[60px] h-[60px] rounded-full border-2 border-primary"
                    // src={`${import.meta.env.VITE_BASE_URL}${
                    //     c?.senderId?.image?.publicFileURL
                    // }`}
                    src={c?.senderId?.image?.publicFileURL}
                    alt=""
                  />
                  <div className="flex flex-col gap-1 text-wrap">
                    <p className="text-end text-secondary font-bold">
                      {c?.senderId?.name}
                    </p>
                    {/* <p className="max-w-[500px] bg-primary border-[1px] border-secondary p-[20px] rounded-[10px] rounded-tr-none text-sm font-normal font-['Montserrat']"> */}
                    <p className="max-w-lg bg-primary border-secondary border-[1px] p-4 rounded-xl rounded-br-none shadow-lg text-sm">
                      {c?.messageType === "image" ? (
                        <div>
                          <p className="pb-2">{c?.text}</p>
                          <Image
                            width={300}
                            height={200}
                            className="rounded-[10px] rounded-tl-none text-zinc-800 text-sm font-['Montserrat']"
                            src={`${import.meta.env.VITE_BASE_URL}${
                              c?.file?.publicFileURL
                            }`}
                            alt=""
                          />
                        </div>
                      ) : c?.messageType === "text" ? (
                        <p>{c?.text}</p>
                      ) : c?.messageType === "video" ? (
                        <video width="320" height="240" controls>
                          <source
                            src={`${import.meta.env.VITE_BASE_URL}${
                              c?.file?.publicFileURL
                            }`}
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      ) : c?.messageType === "application" ? (
                        <a
                          href={`${import.meta.env.VITE_BASE_URL}${
                            c?.file?.publicFileURL
                          }`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="flex gap-2 items-center">
                            {" "}
                            <FaDownload /> Download File
                          </div>
                        </a>
                      ) : c?.messageType === "audio" ? (
                        <audio controls>
                          <source
                            src={`${import.meta.env.VITE_BASE_URL}${
                              c?.file?.publicFileURL
                            }`}
                            type="audio/mpeg"
                          />
                          Your browser does not support the audio element.
                        </audio>
                      ) : null}
                    </p>
                    <p className="text-end my-auto text-zinc-400 text-sm font-normal cursor-pointer">
                      {/* {getTimeAgo(c?.createdAt)} <span className="text-red-500 font-bold" onClick={()=>handleDelete({id:c?._id,loginId:UserData?._id})}>Delete</span>  */}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex gap-5 mt-[32px] ml-5 mb-5" key={c._id}>
                  <img
                    className="w-[60px] h-[60px] rounded-full border-2 border-primary"
                    // src={`${import.meta.env.VITE_BASE_URL}${
                    //   c?.senderId?.image?.publicFileURL
                    // }`}
                    src={c?.senderId?.image?.publicFileURL}
                    alt=""
                  />
                  <div className="flex flex-col gap-1 text-wrap">
                    <p className="text-start text-secondary font-bold">{`${c?.senderId?.name}`}</p>
                    <p className="max-w-[500px] font-medium border-[1px] border-secondary p-[8px] rounded-[10px] rounded-tl-none text-zinc-800 text-sm font-['Montserrat']">
                      {c?.messageType === "image" ? (
                        <div>
                          <p className="pb-2">{c?.text}</p>
                          <Image
                            width={300}
                            height={200}
                            className="rounded-[10px] rounded-tl-none text-zinc-800 text-sm font-['Montserrat']"
                            // src={`${import.meta.env.VITE_BASE_URL}${
                            //   c?.file?.publicFileURL
                            // }`}
                            src={c?.file?.publicFileURL}
                            alt=""
                          />
                        </div>
                      ) : c?.messageType === "text" ? (
                        <p>{c?.text}</p>
                      ) : c?.messageType === "video" ? (
                        <video width="320" height="240" controls>
                          <source
                            src={`${import.meta.env.VITE_BASE_URL}${
                              c?.file?.publicFileURL
                            }`}
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      ) : c?.messageType === "application" ? (
                        <a
                          href={`${import.meta.env.VITE_BASE_URL}${
                            c?.file?.publicFileURL
                          }`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="flex gap-2 items-center">
                            {" "}
                            <FaDownload /> Download File
                          </div>
                        </a>
                      ) : c?.messageType === "audio" ? (
                        <audio controls>
                          <source
                            src={`${import.meta.env.VITE_BASE_URL}${
                              c?.file?.publicFileURL
                            }`}
                            type="audio/mpeg"
                          />
                          Your browser does not support the audio element.
                        </audio>
                      ) : null}
                    </p>
                    <p className="text-start my-auto text-zinc-400 text-sm font-normal font-['Montserrat']">
                      {getTimeAgo(c?.createdAt)}
                    </p>
                  </div>
                </div>
              )
            )}
        </div>

        <div className="flex gap-2 items-center absolute bottom-3 w-[93%]">
          <MdOutlineAttachFile
            onClick={handleIconClick}
            size={30}
            className="cursor-pointer"
          />
          <input
            type="file"
            accept="image/*,video/*,audio/*,application/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileUpload}
          />
          <input
            value={messages}
            onChange={(e) => setMessages(e.target.value)}
            className="p-3 outline-primary bg-primary border-[1px] border-secondary w-full rounded-[20px]"
            placeholder="Enter your message"
            type="text"
            onKeyDown={handleKeyPress} // Handle key press event
          />
          <svg
            onClick={handleMessageSend}
            className=" cursor-pointer"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.50503 16.6818C7.85503 10.8468 13.8625 6.5618 19.17 9.0768L49.03 23.2218C54.75 25.9293 54.75 34.0693 49.03 36.7768L19.17 50.9243C13.8625 53.4393 7.85753 49.1543 8.50503 43.3193L9.70503 32.4993H30C30.6631 32.4993 31.299 32.2359 31.7678 31.7671C32.2366 31.2982 32.5 30.6623 32.5 29.9993C32.5 29.3363 32.2366 28.7004 31.7678 28.2315C31.299 27.7627 30.6631 27.4993 30 27.4993H9.70753L8.50753 16.6818H8.50503Z"
              fill="#217CC2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Message;
