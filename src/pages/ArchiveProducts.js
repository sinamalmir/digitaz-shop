import React from 'react';

// components
import MobileAppBar from '../components/header/MobileAppBar';
import MobileFilterBtn from '../components/MobileFilterBtn/MobileFilterBtn';
import GridArchiveProducts from '../components/GridArchiveProducts/GridArchiveProducts';
import DesktopNavbar from '../components/header/DesktopNavbar';
import BottomNavigation from '../components/BottomMobileNavigation/BottomNavigation';

const ArchiveProducts = () => {
    return (
        <>
            <DesktopNavbar />
            <MobileAppBar />
            <MobileFilterBtn />
            <GridArchiveProducts />
            <BottomNavigation />
        </>
    );
};

export default ArchiveProducts;