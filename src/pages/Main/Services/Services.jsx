import React from 'react';
import { FaPlus } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import CategoriesCart from '../../../Components/SubscriptionCart';
import ServicesCart from '../../../Components/SubscriptionCart';

const Services = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex justify-between items-center">
        <p className=" text-[24px]">Services</p>
        <div
          onClick={(e) => navigate("/services/add-services")}
          className="flex gap-2 items-center py-[15px]
                 px-[40px]
                  bg-secondary
                  rounded-lg
                  text-white
                  cursor-pointer
                  "
        >
          <FaPlus size={17} />
          <p>Add Services</p>
        </div>
            </div>
            <div className='grid grid-cols-6 gap-4 my-4'>
                <ServicesCart/>
                <ServicesCart/>
                <ServicesCart/>
                <ServicesCart/>
                <ServicesCart/>
                <ServicesCart/>
                <ServicesCart/>
                <ServicesCart/>
                <ServicesCart/>
                <ServicesCart/>
                <ServicesCart/>
                <ServicesCart/>
            </div>
        </div>
    );
}

export default Services;
