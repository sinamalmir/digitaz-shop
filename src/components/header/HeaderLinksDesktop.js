import React from 'react';

const HeaderLinksDesktop = () => {
    return (
        <ul className='flex items-center gap-x-4 text-slate-800'>
            <li>
                <a className='block px-4 py-2.5 hover:bg-gray-100 rounded-md transition-all duration-500' href="#"> لوگو </a>
            </li>
            <li>
                <a className='block px-4 py-2.5 hover:bg-gray-100 rounded-md transition-all duration-500' href="#"> خانه </a>
            </li>
            <li>
                <a className='block px-4 py-2.5 hover:bg-gray-100 rounded-md transition-all duration-500' href="#"> تلفن همراه </a>
            </li>
            <li>
                <a className='block px-4 py-2.5 hover:bg-gray-100 rounded-md transition-all duration-500' href="#"> لپ تاپ </a>
            </li>
            <li>
                <a className='block px-4 py-2.5 hover:bg-gray-100 rounded-md transition-all duration-500' href="#"> ساعت هوشمند </a>
            </li>
        </ul>
    );
};

export default HeaderLinksDesktop;