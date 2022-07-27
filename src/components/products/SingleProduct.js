import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import SinglePro from '../SingleProduct/SinglePro';
import Sidebar from '../Sidebar/Sidebar';

const SingleProduct = (props) => {



    return (
        <>
             <div className='md:hidden'>
                <Breadcrumb />
             </div>

            <div className='md:px-4 lg:px-6 container mx-auto max-w-screen-2xl  grid grid-cols-12 grid-rows-[55px_minmax(500px,_1fr)] md:gap-6'>
                <div className="hidden md:block col-span-4 lg:col-span-2 xl:col-span-2 row-span-2"> 
                    <Sidebar />
                </div>
                <div className="bg-white hidden md:block items-center col-span-8 lg:col-span-10 xl:col-span-10 rounded-lg">
                    <div className='bg-white px-4 items-center flex rounded-lg md:p-5'>
                         <Breadcrumb />
                    </div>
                </div>
                <div className="col-span-12 md:col-span-8 lg:col-span-10 xl:col-span-10 mt-3 md:mt-0">
                    <SinglePro 
                        productDetails = {props.productId}
                    />
                </div>
          </div>
        </>
    );
};

export default SingleProduct;