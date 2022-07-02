import React from 'react';
import SelectColorProduct from "./SelectColorProduct";
import AppleWatch7 from "../../assets/img/apple-watch7.png";

const MobileProduct = () => {
    

    

    return (
        <div className='bg-white rounded p-2 shadow-md'>
            <div className='mb-3 bg-gray-100 rounded-xl p-2'>
                <img src={AppleWatch7} alt="" />
            </div>
            <div className='flex justify-between items-center mb-4'>
                <span className='text-slate-200 text-sm font-medium md:text-base'> اپل </span>
                <SelectColorProduct />
            </div>
            <div className='mb-2 text-xs text-slate-800 font-bold sm:text-base'> ساعت هوشمند اپل سری ۶ </div>
            <div className='text-orange-600 text-center font-medium sm:text-lg text-sm mb-2'> ۱۲.۳۵۰.۰۰۰ تومان </div>
            <hr className='' />
            <button className='font-bold text-orange-600 mt-1 text-center w-full py-1 md:text-lg'> مشاهده و سفارش </button>

        </div>
    );
};

export default MobileProduct;