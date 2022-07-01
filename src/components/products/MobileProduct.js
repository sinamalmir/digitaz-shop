import React from 'react';
import AppleWatch7 from "../../assets/img/apple-watch7.png";

const MobileProduct = () => {
    

    

    return (
        <div className='bg-white rounded p-2 shadow-md'>
            <div className='mb-3 bg-gray-100 rounded-xl p-2'>
                <img src={AppleWatch7} alt="" />
            </div>
            <div className='flex justify-between items-center mb-4'>
                <span className='text-slate-200 text-sm font-medium md:text-base'> اپل </span>
                <div  className="flex items-center">
                    <div  className='w-6 h-6 rounded-full  flex items-center justify-center cursor-pointer border-2 border-white bg-red-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"> 
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <div className='w-6 h-6 rounded-full cursor-pointer border-2 border-white bg-blue-400 -mr-1.5'></div>
                    <div className='w-6 h-6 rounded-full cursor-pointer border-2 border-white bg-green-400 -mr-1.5'></div>
                </div>
            </div>
            <div className='mb-2 text-xs text-slate-800 font-bold md:text-base'> ساعت هوشمند اپل سری ۶ </div>
            <div className='text-orange-600 text-center font-medium text-sm mb-2'> ۱۲.۳۵۰.۰۰۰ تومان </div>
            <hr className='' />
            <button className='font-bold text-orange-600 mt-1 text-center w-full py-1 md:text-lg'> مشاهده و سفارش </button>

        </div>
    );
};

export default MobileProduct;