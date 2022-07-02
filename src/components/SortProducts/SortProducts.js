import React from 'react';

const SortProducts = () => {
    return (
        <div className='bg-white px-4 flex items-center gap-x-4 text-gray-400 rounded-xl'>
            <div className='bg-orange-100 p-2 rounded-md flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 stroke-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                </svg>
            </div>
            <button className='py-4' > محبوب ترین </button>
            <button className='py-4' > پرفروش ترین </button>
            <button className='py-4' > گران ترین </button>
            <button className='py-4' > ارزان ترین </button>
        </div>
    );
};

export default SortProducts;