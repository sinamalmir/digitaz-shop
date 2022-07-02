import React from 'react';
import MobileProduct from './MobileProduct';

const MobileProducts = () => {
    return (
        <div className='grid gap-x-2 gap-y-8 grid-cols-2 lg:grid-cols-4 px-2 md:p-0 sm:gap-x-4 md:gap-x-4 md:gap-y-10'>
            <MobileProduct />
            <MobileProduct />
            <MobileProduct />
            <MobileProduct />
        </div>
    );
};

export default MobileProducts;