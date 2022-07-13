import React from 'react';
import { Link } from 'react-router-dom';

const CartHeader = () => {
    return (
        <div className='flex items-center justify-between m-4 w-3/4 md:w-3/5 absolute top-[80px]'>
            <span className='text-slate-800 font-bold'> سبد خرید </span>
            <span className='text-orange-500 mr-5'>
                <Link to='/products'>
                     بازگشت به فروشگاه 
                </Link>
            </span>
        </div>
    );
};

export default CartHeader;