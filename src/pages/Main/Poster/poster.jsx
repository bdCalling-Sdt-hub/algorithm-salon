import React from 'react';
import { useNavigate } from 'react-router-dom';

const Poster = () => {
    const navigate = useNavigate();
    return (
        <div className='lg:flex text-white gap-3 justify-center my-6'>
            <p onClick={() => {navigate('/poster/user-screen-poster-add')}} className='text-3xl bg-[#00A572] px-20 py-5 rounded-md cursor-pointer'>USER SCREEN POSTER</p>
            <p onClick={() => {navigate('/poster/splash-screen')}} className='text-3xl bg-[#29A5CC] px-20 py-5 rounded-md cursor-pointer'>SPLASH SCREEN POST</p>
        </div>
    );
}

export default Poster;
