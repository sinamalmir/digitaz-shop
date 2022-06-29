import React from 'react';

const MobileFilterBtn = () => {
    return (
        <div className='flex items-center justify-between px-4 gap-x-4 mb-9'>
            
            <div className='p-2 md:hidden flex items-center justify-start  bg-white rounded w-full'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                    </svg>
                </div>
                <span className="text-sm font-medium text-slate-800 mr-3 w-full">   محبوب ترین  </span>
            </div>

            <div className='p-2 md:hidden flex items-center justify-start bg-white rounded w-full'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                </div>
                <span className="text-sm font-medium text-slate-800 mr-3 w-full" > فیلتر : برنداپل </span>
            </div>

        </div>
    );
};

export default MobileFilterBtn;