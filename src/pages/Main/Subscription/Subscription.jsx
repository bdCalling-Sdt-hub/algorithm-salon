import React from 'react';
import { FaPlus } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import SubscriptionCart from '../../../Components/SubscriptionCart';

const Subscription = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex justify-between items-center">
        <p   onClick={(e) => navigate("/subscription/add-coupon")}   className="flex gap-2 items-center py-[15px]
                 px-[40px]
                  bg-secondary
                  rounded-lg
                  text-white
                  cursor-pointer
                  ">Coupon Code</p>
        <div
          onClick={(e) => navigate("/subscription/add-subscription")}
          className="flex gap-2 items-center py-[15px]
                 px-[40px]
                  bg-secondary
                  rounded-lg
                  text-white
                  cursor-pointer
                  "
        >
          <FaPlus size={17} />
          <p>Add New Subscription</p>
        </div>
            </div>
            <div className='lg:grid grid-cols-3  gap-4 my-4'>
              <SubscriptionCart/>
              <SubscriptionCart/>
              <SubscriptionCart/>
            </div>
        </div>
    );
}

export default Subscription;
