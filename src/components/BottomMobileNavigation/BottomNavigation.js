import React, { useState } from 'react';

const BottomNavigation = () => {

    return (
        <div className='md:hidden shadow-[0_-4px_8px_0_rgba(0,0,0,0.1)] bg-white px-4 border border-t-2 fixed bottom-0 left-0 right-0 w-full rounded-tr-lg rounded-tl-lg flex items-center '>
            <nav className='w-full'>
            <ul className='flex items-center justify-between  gap-x-2 px-4 w-full'>
                <li className='flex-auto text-xs text-gray-400 '>
                    <a href="#" className='flex justify-center items-center py-4 w-full'>
                        <span>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.72 9.09358L19.04 3.72024C16.9467 2.25358 13.7333 2.33358 11.72 3.89358L5.03999 9.10691C3.70665 10.1469 2.65332 12.2802 2.65332 13.9602V23.1602C2.65332 26.5602 5.41332 29.3336 8.81332 29.3336H23.1867C26.5867 29.3336 29.3467 26.5736 29.3467 23.1736V14.1336C29.3467 12.3336 28.1867 10.1202 26.72 9.09358ZM17 24.0002C17 24.5469 16.5467 25.0002 16 25.0002C15.4533 25.0002 15 24.5469 15 24.0002V20.0002C15 19.4536 15.4533 19.0002 16 19.0002C16.5467 19.0002 17 19.4536 17 20.0002V24.0002Z" fill="#222F5D"/>
                            </svg>
                        </span>
                        <span className='mr-1'> خانه </span>
                    </a>
                </li>
                <li className='flex-auto text-xs text-gray-400 '>
                    <a href="#" className='flex justify-center items-center py-4 w-full'>
                        <span>
                         <svg width="34" height="34" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity=".4" fill="#222F5D"><path d="M10.257 2.833H7.565c-3.102 0-4.732 1.63-4.732 4.718v2.692c0 3.088 1.63 4.717 4.718 4.717h2.692c3.088 0 4.717-1.629 4.717-4.717V7.55c.014-3.088-1.615-4.718-4.703-4.718ZM26.45 2.833h-2.692c-3.089 0-4.718 1.63-4.718 4.718v2.692c0 3.088 1.63 4.717 4.718 4.717h2.691c3.088 0 4.718-1.629 4.718-4.717V7.55c0-3.088-1.63-4.718-4.718-4.718ZM26.45 19.026h-2.692c-3.089 0-4.718 1.629-4.718 4.717v2.692c0 3.088 1.63 4.718 4.718 4.718h2.691c3.088 0 4.718-1.63 4.718-4.718v-2.692c0-3.088-1.63-4.717-4.718-4.717ZM10.257 19.026H7.565c-3.102 0-4.732 1.629-4.732 4.717v2.692c0 3.103 1.63 4.732 4.718 4.732h2.692c3.088 0 4.717-1.63 4.717-4.718v-2.692c.014-3.102-1.615-4.731-4.703-4.731Z"/></g></svg>
                        </span>
                        {/* <span> دسته بندی </span> */}
                    </a>
                </li>
                <li className='flex-auto text-xs text-gray-400 '>
                    <a href="#" className='flex justify-center items-center py-4 w-full'>
                        <span>
                             <svg width="34" height="34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.277 12.693c-.95-1.048-2.38-1.657-4.364-1.87V9.747a6.9 6.9 0 0 0-2.266-5.114c-1.46-1.332-3.358-1.955-5.327-1.771-3.386.326-6.233 3.598-6.233 7.14v.821c-1.984.213-3.415.822-4.364 1.87-1.374 1.53-1.331 3.57-1.176 4.987l.992 7.89c.298 2.763 1.417 5.597 7.508 5.597h7.905c6.092 0 7.211-2.834 7.509-5.582l.992-7.92c.155-1.402.184-3.442-1.176-4.972ZM16.518 4.831c1.417-.128 2.763.312 3.811 1.26a4.925 4.925 0 0 1 1.615 3.656v.991h-9.888v-.736c0-2.522 2.082-4.944 4.462-5.171Zm-4.59 13.798h-.014a1.42 1.42 0 0 1-1.416-1.416 1.424 1.424 0 0 1 2.848 0 1.42 1.42 0 0 1-1.418 1.416Zm9.917 0h-.014a1.42 1.42 0 0 1-1.417-1.416 1.424 1.424 0 0 1 2.848 0 1.42 1.42 0 0 1-1.417 1.416Z" fill="#222F5D" fillOpacity=".4"/></svg>
                        </span>
                        {/* <span> سبد خرید </span> */}
                    </a>
                </li>
                <li className='flex-auto text-xs text-gray-400 '>
                    <a href="#" className='flex justify-center items-center py-4 w-full'>
                        <span>
                             <svg width="29" height="25" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.834.333a7.702 7.702 0 0 0-6.156 3.09A7.701 7.701 0 0 0 8.522.332C4.278.333.833 3.8.833 8.067c0 1.644.267 3.178.712 4.578 2.177 6.91 8.933 11.066 12.266 12.2.467.155 1.245.155 1.711 0 3.334-1.134 10.09-5.267 12.267-12.2.467-1.423.711-2.934.711-4.578C28.522 3.8 25.078.333 20.834.333Z"/></svg>
                        </span>
                        {/* <span> علاقمندی </span> */}
                    </a>
                </li>
            </ul>
            </nav>
        </div>
    );
};

export default BottomNavigation;