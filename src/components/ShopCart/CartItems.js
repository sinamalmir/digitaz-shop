import React from 'react';

import Watch from "../../assets/img/Cart/1.png"


const CartDetails = () => {
    return (
        <div className='flex flex-col px-4 gap-y-2 md:gap-y-4 flex-1 mt-10 md:mt-[80px]'>
            <div className='bg-white rounded-lg p-2 px-4 flex items-stretch shadow-lg justify-between'>

                <div className=' w-[40px] md:w-[58px]'>
                    <img className='w-full h-auto' src={Watch} alt="" />
                </div>

                <div className=' flex flex-col justify-between text-xs md:text-sm flex-1'>
                    <span className='font-bold text-slate-800'> ساعت هومند اپل سری ۷  </span>
                    <span className='text-orange-500'> 12,349,000 تومان </span>
                </div>

                <div className='flex flex-col justify-between items-end'>
                    <span className='hover:shadow-lg'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-orange-500 hover:stroke-red-600 hover:h-[22px] hover:w-[22px] transition-all duration-300" fill="none" viewBox="0 0 24 24"  strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </span>
                    
                    <div className='flex items-center gap-x-1 md:gap-x-3'>
                        <span className='cursor-pointer hover:shadow-xl flex items-center justify-center w-5 h-5 md:h-6 md:w-6 bg-gray-200 rounded-full '>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:w-5 md:h-5 "  viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"> 
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        </span>

                        <span className='flex items-center justify-center border border-orange-500 rounded w-5 h-6 md:w-6 md:h-7'> 1 </span>

                        <span className='cursor-pointer hover:shadow-xl flex items-center justify-center w-5 h-5 md:h-6 md:w-6 bg-orange-400 rounded-full '>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                            </svg>
                        </span>
                    </div>
                </div>

            </div>

           
        </div>

    );
};

export default CartDetails;