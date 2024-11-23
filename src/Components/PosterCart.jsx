import React, { useState } from "react";

import cartImg from "../assets/image.png";
import { useNavigate } from "react-router-dom";
import { useRemovePosterMutation } from "../redux/poster/posterApi";
import { Button, Modal } from "antd";
import ApiErrorAlert from "../utils/ApiErrorAlert";

const PosterCart = ({ data }) => {
    const [open, setOpen] = useState(false);
    const [removePoster, { isLoading, isError, error }] =useRemovePosterMutation();
    const showModal = () => {
      setOpen(true);
    };
    const hideModal = () => {
      setOpen(false);
    };
 
  return (
    <div className="bg-primary  rounded-lg w-[450px] p-5 m-5">
        <ApiErrorAlert isError={isError} errorMessage={error?.error.message}/>
      <img
        className="w-[300px] mx-auto"
        src={`${import.meta.env.VITE_IMAGE_BASE_URL}/${data.imageUrl}`}
        alt=""
      />
      <p className="text-textColor text-[18px] text-center my-2 font-semibold">
        {data?.headline}
      </p>
      <p className="text-textColor text-[12px] text-center my-1">
        {data?.status}
      </p>
      <div className="flex gap-2 justify-center mt-5">
        <p
          className="text-primary cursor-pointer bg-red-500 border-2 border-secondary py-2 px-20 rounded-lg text-[12px]"
          onClick={showModal}
        >
          Delete
        </p>
      </div>
      <Modal
        centered
        open={open}
        onOk={removePoster}
        onCancel={hideModal}
        okText="Yes"
        cancelText="No"
        style={{ padding: "2em", textAlign: "center" }}
        // className="p-6"
        footer={[
          <Button key="cancel" className="m-4" onClick={hideModal}>
            No
          </Button>,
          <Button
            key="ok"
            type="primary"
            className="m-4"
            onClick={() =>removePoster(data?._id)}
          >
            Yes
          </Button>,
        ]}
      >
        <p style={{ margin: 0 ,fontSize:"1.2rem"}}>Do you want to remove the Splash Poster?</p>
      </Modal>
    </div>
  );
};

export default PosterCart;
