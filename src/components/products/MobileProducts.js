import React from 'react';
import MobileProduct from './MobileProduct';

const MobileProducts = () => {
    return (
        <div className='grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            <MobileProduct />
            <MobileProduct />
            <MobileProduct />
            <MobileProduct />
        </div>
    );
};

export default MobileProducts;