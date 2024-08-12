import React from "react";
import cartImg from "../assets/service.png";
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const ServicesCart = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-secondary  rounded-lg w-[400px] p-5 my-4">
      <div className="border-b-2 border-white">
        <p className="text-white text-[22px] text-center my-2 font-semibold">
          Basic
        </p>
        <p className="text-white text-[18px] text-center my-2 font-semibold">
          $6.99/mo
        </p>
      </div>
      <div className="mt-4 text-xl text-white space-y-2">
        <p className="flex items-center gap-2"><FiArrowRight/>Exclusive Deals</p>
        <p className="flex items-center gap-2"><FiArrowRight/>Event Giveaways</p>
        <p className="flex items-center gap-2"><FiArrowRight/>Save Money</p>
        <p className="flex items-center gap-2"><FiArrowRight/>Discover Places</p>
      </div>

      <div className="flex gap-2 justify-center mt-4">
        <p
          onClick={() => navigate("/subscription/edit-subscription/:id")}
          className="text-black cursor-pointer bg-primary py-2 px-14 rounded-lg text-[12px]"
        >
          Edit
        </p>

        <p className="text-white cursor-pointer bg-black border-2 border-secondary py-2 px-14 rounded-lg text-[12px]">
          Delete
        </p>
      </div>
    </div>
  );
};

export default ServicesCart;
