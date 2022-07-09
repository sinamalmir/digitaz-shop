import React from 'react';

// components
import MobileAppBar from '../components/header/MobileAppBar';
import MobileFilterBtn from '../components/MobileFilterBtn/MobileFilterBtn';
import GridArchiveProducts from '../components/GridArchiveProducts/GridArchiveProducts';
import DesktopNavbar from '../components/header/DesktopNavbar';
import BottomNavigation from '../components/BottomMobileNavigation/BottomNavigation';

import Logo from '../assets/img/Logo.png';

const ArchiveProducts = (props) => {

    

    return (
        <>
            <DesktopNavbar />
            <MobileAppBar title="گوشی موبایل" icon="Logo" />
            <MobileFilterBtn />
            <GridArchiveProducts />
            <BottomNavigation />
        </>
    );
};

export default ArchiveProducts;