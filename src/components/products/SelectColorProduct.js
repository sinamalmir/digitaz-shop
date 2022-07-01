import React from 'react';

const SelectColorProduct = () => {
    return (
        <div  className="flex items-center">
            <div  className='w-6 h-6 sm:w-8 sm:h-8 rounded-full  flex items-center justify-center cursor-pointer border-2 border-white bg-red-400'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:w-5 sm:h-5 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"> 
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <div className='w-6 h-6 sm:w-8 sm:h-8 rounded-full cursor-pointer border-2 border-white bg-blue-400 -mr-1.5 flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:w-5 sm:h-5 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"> 
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
            </div>
            <div className='w-6 h-6 sm:w-8 sm:h-8 rounded-full cursor-pointer border-2 border-white bg-green-400 -mr-1.5 flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:w-5 sm:h-5 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"> 
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </div>
        </div>
    );
};

export default SelectColorProduct;