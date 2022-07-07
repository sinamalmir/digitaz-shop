import React from 'react';
import SelectColorProduct from "./SelectColorProduct";
import { Link } from 'react-router-dom';

// functions
import { shorten } from '../../helper/functions';

const MobileProduct = ({productData}) => {

    console.log("product data", productData);
    
//   const id = productData.id

    return (
        <div className='bg-white rounded p-2 shadow-md'>
            <div className='mb-3 bg-gray-100 rounded-xl p-2'>
                <img src={productData.images.main} alt="products" />
            </div>
            <div className='flex justify-between items-center mb-4'>
                <span className=' text-slate-200 text-sm font-medium md:text-base'> اپل</span>
                <SelectColorProduct />
            </div>
            <div className='md:hidden  mb-2 text-xs text-slate-800 font-bold sm:text-base'> {shorten(productData.title_fa)} </div>
            <div className='hidden md:block  mb-2 text-xs text-slate-800 font-bold sm:text-base'> {
                productData.title_fa
            } </div>
            <div className='text-orange-600 text-center font-medium sm:text-lg text-sm mb-2'> {productData.price.selling_price } تومان </div>
            <hr className='' />
            <Link to={'/product/' + productData.id}>
                <button className='font-bold text-orange-600 mt-1 text-center w-full py-1 md:text-lg'> مشاهده و سفارش </button>            
            </Link>

        </div>
    );
};

export default MobileProduct;