import React from 'react';
import MobileProducts from '../products/MobileProducts';
import Sidebar from '../Sidebar/Sidebar';
import SortProducts from '../SortProducts/SortProducts';

const GridArchiveProducts = () => {
    return (
        <div className='grid grid-cols-12 grid-rows-[55px_minmax(500px,_1fr)] md:gap-6'>
            <div className="hidden md:block col-span-4 lg:col-span-3 row-span-2"> 
                <Sidebar />
            </div>
            <div className="bg-white hidden md:block col-span-8 lg:col-span-9 rounded-lg">
                <SortProducts />
            </div>
            <div className="col-span-12 md:col-span-8 lg:col-span-9">
                <MobileProducts />
            </div>
        </div>
    );
};

export default GridArchiveProducts;