import React from 'react';
import AccordionSidebar from './AccordionSidebar';

const Sidebar = () => {
    return (
        <div className='bg-white p-5 rounded-xl '>
            <div className="mb-7">
                <div className='text-xl font-bold text-orange-500 mb-5'> دسته بندی </div>
                <ul>
                    <li className='mb-1 hover:bg-gray-50 cursor-pointer rounded-md'>
                        <a href="#" className='flex items-cente py-2'>
                            <svg className='w-5 h-6' fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 12.75v7.5c0 3-.75 3.75-3.75 3.75h-4.5c-3 0-3.75-.75-3.75-3.75v-7.5C1 9.75 1.75 9 4.75 9h4.5c3 0 3.75.75 3.75 3.75ZM8.5 11.625h-3" stroke="#222F5D" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 21.825A1.163 1.163 0 1 0 7 19.5a1.163 1.163 0 0 0 0 2.325Z" stroke="#222F5D" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/><circle cx="10.5" cy="9.5" r="9.5" fill="#AFAFAF" fillOpacity=".29"/></svg>
                            <span className="mr-2"> تلفن همراه </span>
                        </a>
                    </li>

                    <li className='mb-1 hover:bg-gray-50 cursor-pointer rounded-md'>
                        <a href="#" className='flex items-cente py-2'>
                            <svg className='w-5 h-6'  fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11.5" cy="9.5" r="9.5" fill="#AFAFAF" fillOpacity=".29"/><path d="M4.293 8.334H11.7c2.373 0 2.967.593 2.967 2.96v4.22c0 2.373-.594 2.96-2.96 2.96H4.293c-2.366.006-2.96-.587-2.96-2.954v-4.226c0-2.367.594-2.96 2.96-2.96ZM8 18.48v3.187M1.333 15.666h13.334M5 21.666h6" stroke="#222F5D" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            <span className="mr-2"> لپ تاپ </span>
                        </a>
                    </li>

                    <li className='mb-1 hover:bg-gray-50 cursor-pointer rounded-md'>
                        <a href="#" className='flex items-cente py-2'>
                             <svg className='w-5 h-6' fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11.5" cy="9.5" r="9.5" fill="#AFAFAF" fillOpacity=".29"/><path d="M5.666 18.667h4.667c1.553 0 2.333-.78 2.333-2.334v-4.666c0-1.553-.78-2.333-2.333-2.333H5.666c-1.553 0-2.333.78-2.333 2.333v4.667c0 1.553.78 2.333 2.333 2.333ZM10.666 7.333H5.333M10.666 20.666H5.333" stroke="#222F5D" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.667 12.334v2h2" stroke="#222F5D" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            <span className="mr-2"> ساعت هوشمند </span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="mb-7">
                <div className='text-xl font-bold text-orange-500 mb-5'> فیلتر </div>
                <AccordionSidebar />
            </div>

        </div>
    );
};

export default Sidebar;