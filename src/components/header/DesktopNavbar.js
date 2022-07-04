import React from 'react';
import HeaderLinksDesktop from './HeaderLinksDesktop';
import HeaderSearchBar from './HeaderSearchBar';

const DesktopNavbar = () => {
    return (
        <nav className='bg-white px-4 py-2 shadow-lg sticky top-0  flex items-center justify-between' >
            <HeaderLinksDesktop />
            <HeaderSearchBar />
        </nav>
    );
};

export default DesktopNavbar;