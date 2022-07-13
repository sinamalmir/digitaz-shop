import React from 'react';
import { Link } from 'react-router-dom';

const FixAddToCart = () => {
    return (
        <div className='md:hidden fixed left-0 right-0 bottom-0 flex items-center justify-between bg-white w-full shadow-[0_-4px_8px_0_rgba(0,0,0,0.1)] px-4 py-2 gap-x-2'>
             <button className='flex-auto p-4 text-white bg-orange-500 rounded-md '>
                <Link to='/product/:id/cart'> 
                افزودن به سبد خرید 
                </Link>          
            </button>
            <div className='flex flex-col items-end text-slate-800'>
                <span className='font-bold'> 28,345,900 </span>
                <span className='text-gray-400 text-sm'> تومان </span>
            </div>
        </div>
    );
};

export default FixAddToCart;