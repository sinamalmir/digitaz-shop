import React from 'react';

const HeaderSearchBar = () => {
    return (
        <div className="flex-1 max-w-xl mr-2">
            <div className="bg-gray-100 p-1 rounded-lg flex items-center">
                <span className='ml-3 mr-1' >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </span>
                <input type="text" placeholder=' نام محصول،برند یا رنگ ... ' className='focus:outline-none bg-transparent p-2 w-full text-slate-800' />
            </div>
        </div>
    );
};

export default HeaderSearchBar;