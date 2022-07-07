import React from 'react';

const AccordionSidebar = () => {
    return (
        <div className='mb-2'>
            {/* header */}
            <div className="flex items-center justify-between w-full hover:bg-gray-50 rounded-lg   py-2 cursor-pointer mb-4" >
                <div className='flex items-center'>
                    <svg width="20" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10.5" cy="9.5" r="9.5" fill="#AFAFAF" fillOpacity=".29"/><path d="M12.833 21.271H1.167a.44.44 0 0 1-.438-.438.44.44 0 0 1 .438-.437h11.666a.44.44 0 0 1 .438.438.44.44 0 0 1-.438.437Z" fill="#222F5D"/><path d="M2.158 20.833h-.875l.03-7.017c0-.496.227-.957.618-1.26l4.083-3.18a1.61 1.61 0 0 1 1.972 0l4.083 3.174c.385.303.619.776.619 1.266v7.017h-.875v-7.012a.747.747 0 0 0-.28-.577L7.449 10.07a.735.735 0 0 0-.898 0L2.468 13.25a.727.727 0 0 0-.28.571l-.03 7.012Z" fill="#222F5D"/><path d="M9.917 21.27H4.083a.44.44 0 0 1-.437-.437v-5.541c0-.724.589-1.313 1.312-1.313h4.084c.723 0 1.312.59 1.312 1.313v5.541a.44.44 0 0 1-.437.438Zm-5.396-.874h4.958V15.29a.44.44 0 0 0-.437-.437H4.958a.44.44 0 0 0-.437.438v5.104Z" fill="#222F5D"/><path d="M5.833 18.791a.44.44 0 0 1-.437-.437v-.875a.44.44 0 0 1 .437-.438.44.44 0 0 1 .438.438v.875a.44.44 0 0 1-.438.438ZM7.875 12.813h-1.75a.44.44 0 0 1-.438-.438.44.44 0 0 1 .438-.438h1.75a.44.44 0 0 1 .438.438.44.44 0 0 1-.438.438Z" fill="#222F5D"/></svg>
                    <span className='mr-2'> برند محصول </span>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path className='transition-all duration-700' fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </div>

            {/* content */}
            <div className="px-2 flex flex-col gap-y-2">
                <label htmlFor="apple" className='flex items-center py-1 cursor-pointer' >
                    <input type="checkbox" name='brand' id='apple' className='form-checkbox rounded  text-orange-500 focus:ring-orange-500'  />
                    <span className='mr-2'> اپل </span>
                </label>

                <label htmlFor="xiaumi" className='flex items-center py-1 cursor-pointer' >
                    <input type="checkbox" name='brand' id='xiaumi' className='form-checkbox rounded  text-orange-500 focus:ring-orange-500'  />
                    <span className='mr-2'> شیائومی </span>
                </label>
            </div>
        </div>
    );
};

export default AccordionSidebar;