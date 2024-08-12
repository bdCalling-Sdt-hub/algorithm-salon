import React from 'react';

import cartImg from '../assets/image.png';
import { useNavigate } from 'react-router-dom';

const PosterCart = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-primary  rounded-lg w-[450px] p-5'>
            <img className='w-[300px] mx-auto' src={cartImg} alt="" />
            <p className='text-textColor text-[18px] text-center my-2 font-semibold'>WELCOME TO BARBAR SHOP</p>
            <p className='text-textColor text-[12px] text-center my-1'>Get ready for a fresh look with us !</p>
            <div className='flex gap-2 justify-center mt-5'>
                <p className='text-primary cursor-pointer bg-red-500 border-2 border-secondary py-2 px-20 rounded-lg text-[12px]'>Delete</p>
               
            </div>
           
        </div>
    );
}

export default PosterCart;
