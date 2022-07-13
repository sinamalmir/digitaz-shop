import React from 'react';

const CartSummery = () => {
    return (
        <>
            <div className="md:block hidden w-1/3 max-w-sm mt-10 md:mt-[80px]  ">
            <div className="bg-white mb-5 px-4 py-5 rounded-lg w-full text-slate-800 font-medium">
            <div className="flex items-center justify-between mb-5">
                <span className="text-sm">مجموع قیمت :</span>
                <span className="text-orange-500">۳۵,۴۵۰,۰۰۰ تومان</span>
            </div>
            <div className="flex items-center justify-between mb-5">
                <span className="font-light text-sm">کد تخفیف:</span>
                <div className="flex items-stretch justify-between rounded-xl overflow-hidden bg-gray-200">
                <input type="text" dir="ltr" className="border-0 w-full max-w-[150px] bg-transparent p-2 text-gray-700 outline-none focus:outline-none" placeholder="AS-DSE" />
                <button className="border-0 bg-orange-500 px-4 text-white outline-none">تایید</button>
                </div>
            </div>
            <div className="flex items-center justify-between mb-11">
                <span className="text-sm">تخفیف:</span>
                <span className="text-orange-500">۴۵۰,۰۰۰ تومان</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-sm">قیمت نهایی:</span>
                <span className="text-orange-500">۴۵۰,۰۰۰ تومان</span>
            </div>
            </div>
            <div>
            <button className="w-full mb-4 py-2 text-white bg-orange-500 rounded-md text-sm">اضافه به سبد خرید</button>
            <button className="w-full py-2 text-orange-500 border-2 border-orange-500 rounded-md text-sm">انصراف از خرید</button>
            </div>
            </div>
        
            <div className='md:hidden m-4 '>
                <div className='bg-white flex items-start justify-between p-2 rounded-lg shadow-lg'>
                    <div className='flex flex-col gap-y-2'>
                        <span className='text-slate-900'> مجموع قیمت :</span>
                        <span className='text-slate-700 font-thin text-sm'> کد تخفیف دارید؟ </span>
                    </div>
                    <div className='flex flex-col items-start'>
                        <span className='  text-orange-500 '  > 6,640,000 تومان </span>
                    </div>
                </div>
            </div>
        </>

        

    );
};

export default CartSummery;