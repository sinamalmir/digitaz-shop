import React from 'react';
import HeaderLinksDesktop from './HeaderLinksDesktop';
import HeaderSearchBar from './HeaderSearchBar';

const DesktopNavbar = () => {
    return (
        <nav className='bg-white hidden md:block px-4 py-2 shadow-lg sticky top-0 ' >
            <div className=' container max-w-screen-2xl mx-auto  flex items-center justify-between'>
                <HeaderLinksDesktop />
                <HeaderSearchBar />
            </div>
        </nav>
    );
};

export default DesktopNavbar;