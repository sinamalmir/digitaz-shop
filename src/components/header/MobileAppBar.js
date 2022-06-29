import React from 'react';

const MobileAppBar = () => {
    return (
        <div className=' md:hidden flex items-center justify-between mt-10 px-4 mb-6'>
            <div> digitaz </div>
            <div className='text-lg font-bold text-slate-800'> ساعت هوشمند </div>
            <div className='w-7 h-7 flex items-center justify-center shadow-lg bg-white rounded'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
        </div>
    );
};

export default MobileAppBar;