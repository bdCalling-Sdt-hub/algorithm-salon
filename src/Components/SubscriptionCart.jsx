import React, { useState } from "react";
import cartImg from "../assets/service.png";
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { Button, Modal } from "antd";
import { useRemoveSubscriptionMutation } from "../redux/subscription/subscriptionApi";

const ServicesCart = ({data}) => {
  const [open, setOpen] = useState(false);
  const [removeSubscription,{isLoading,isError}]=useRemoveSubscriptionMutation()
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const {_id,packageName,amount,expirationType,expirationLapse,tagCount,type,features=[]}=data
  // console.log(features);
  const handleDeleteSubscription=(id)=>{
    removeSubscription(id)
    .then(res=>{
      if(res.data){
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: res.message || 'Subscription deleted successfully',
        showConfirmButton: false,
        timer: 1500,
      });
    }
    }).catch(error=>{
      Swal.fire({
        icon: 'error',
        title: 'Try Again...',
        text: error.message || 'Subscription not deleted successfully',
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    })

    setOpen(false);
  }
  
  const navigate = useNavigate();
  return (
    <>
    <div className="bg-secondary  rounded-lg w-[400px] p-5 my-4">
      <div className="border-b-2 border-white">
        <p className="text-white text-[22px] text-center my-2 font-semibold">
          {type}
        </p>
        <p className="text-white text-[18px] text-center my-2 font-semibold">
          ${amount}/{expirationType.slice(0,2)}
        </p>
      </div>
      <div className="mt-4 text-xl text-white space-y-2">
        {features?.map(feature=> <p className="flex items-center gap-2" key={feature._id}><FiArrowRight/>{feature.title}</p>)}
        {/* <p className="flex items-center gap-2"><FiArrowRight/>Exclusive Deals</p>
        <p className="flex items-center gap-2"><FiArrowRight/>Event Giveaways</p>
        <p className="flex items-center gap-2"><FiArrowRight/>Save Money</p>
        <p className="flex items-center gap-2"><FiArrowRight/>Discover Places</p> */}
      </div>

      <div className="flex gap-2 justify-center mt-4">
        <p
          onClick={() => navigate(`/subscription/edit-subscription/${_id}`)}
          className="text-black cursor-pointer bg-primary py-2 px-14 rounded-lg text-[12px]"
        >
          Edit
        </p>

        <p className="text-white cursor-pointer bg-black border-2 border-secondary py-2 px-14 rounded-lg text-[12px]"  type="primary" onClick={showModal}>
          Delete
        </p>
      </div>
    </div>
    <Modal
      centered
      open={open}
      onOk={handleDeleteSubscription}
      onCancel={hideModal}
      okText="Yes"
      cancelText="No"
      bodyStyle={{ padding: '2em', textAlign: 'center' }}
      footer={[
        
        <Button key="cancel" className="m-4" onClick={hideModal}>
          No
        </Button>,
        <Button key="ok" type="primary" className="m-4" onClick={()=>handleDeleteSubscription(_id)}>
          Yes
        </Button>
      ]}
    >
      <p style={{ margin: 0 }}>Do you want to remove the subscription?</p>
    </Modal>
    </>
  );
};

export default ServicesCart;
