import React from 'react';

import SelectColorProduct from '../products/SelectColorProduct';
import apple from '../../assets/img/Product-Image.png';

const SinglePro = () => {
    return (
        <>
            <div className='flex flex-col items-center gap-y-9 px-4  mt-5'>

                <div className='w-4/5 max-w-xs'>
                    <img src={apple} alt="" className='w-full h-auto' />
                </div>

                <div className='w-full'>

                    <div className='mb-10 text-center'>
                        <h1 className='text-slate-800 font-bold text-lg mb-1' > گوشی ایفون ۱۳ pro max </h1>
                        <h2 className='font-thin text-gray-500'> Apple Iphone 13 pro max </h2>
                    </div>
                    {/* select colors */}
                    <div className='flex items-center w-full justify-evenly mb-3 '>
                        <SelectColorProduct text="انتخاب رنگ:" />
                    </div>

                    <div className='text-slate-800 mb-4 flex flex-wrap gap-x-2'>
                        <div className='flex items-center bg-red-100'>
                            <div className='flex items-center'>
                                <span>
                                    <svg width="20" height="19" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="8" fill="#E2E2E2"/><path d="M1.756 11.545v2.62c0 2.618 1.05 3.668 3.669 3.668h3.144c2.62 0 3.67-1.05 3.67-3.669v-2.62" stroke="#222F5D" strokeWidth=".875" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 12c1.068 0 1.855-.87 1.75-1.937l-.385-3.897H5.641l-.39 3.897c-.106 1.067.682 1.936 1.75 1.936Z" stroke="#222F5D" strokeWidth=".875" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.681 12c1.178 0 2.042-.957 1.925-2.13l-.163-1.604c-.21-1.517-.794-2.1-2.322-2.1h-1.78l.41 4.09c.098.962.967 1.743 1.93 1.743ZM3.29 12c.963 0 1.832-.782 1.925-1.745l.128-1.289.28-2.8H3.844c-1.528 0-2.111.583-2.321 2.1L1.365 9.87C1.248 11.043 2.112 12 3.29 12ZM7 14.916c-.974 0-1.458.484-1.458 1.458v1.459h2.917v-1.459c0-.974-.485-1.458-1.459-1.458Z" stroke="#222F5D" strokeWidth=".875" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </span>
                                <span className='mr-1 font-medium'> فروشنده: </span>
                            </div>
                            <span className='font-light mr-2'> دیجی تایز </span>
                        </div>
                        <div className='flex items-center bg-red-100'>
                            <div className='flex items-center'>
                                <span>
                                    <svg width="20" height="19" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="8" fill="#E2E2E2"/><path d="M1.756 11.545v2.62c0 2.618 1.05 3.668 3.669 3.668h3.144c2.62 0 3.67-1.05 3.67-3.669v-2.62" stroke="#222F5D" strokeWidth=".875" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 12c1.068 0 1.855-.87 1.75-1.937l-.385-3.897H5.641l-.39 3.897c-.106 1.067.682 1.936 1.75 1.936Z" stroke="#222F5D" strokeWidth=".875" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.681 12c1.178 0 2.042-.957 1.925-2.13l-.163-1.604c-.21-1.517-.794-2.1-2.322-2.1h-1.78l.41 4.09c.098.962.967 1.743 1.93 1.743ZM3.29 12c.963 0 1.832-.782 1.925-1.745l.128-1.289.28-2.8H3.844c-1.528 0-2.111.583-2.321 2.1L1.365 9.87C1.248 11.043 2.112 12 3.29 12ZM7 14.916c-.974 0-1.458.484-1.458 1.458v1.459h2.917v-1.459c0-.974-.485-1.458-1.459-1.458Z" stroke="#222F5D" strokeWidth=".875" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </span>
                                <span className='mr-1 font-medium'> فروشنده: </span>
                            </div>
                            <span className='font-light mr-2'> دیجی تایز </span>
                        </div>
                        <div className='flex items-center bg-red-100'>
                            <div className='flex items-center'>
                                <span>
                                    <svg width="20" height="19" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="8" fill="#E2E2E2"/><path d="M1.756 11.545v2.62c0 2.618 1.05 3.668 3.669 3.668h3.144c2.62 0 3.67-1.05 3.67-3.669v-2.62" stroke="#222F5D" strokeWidth=".875" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 12c1.068 0 1.855-.87 1.75-1.937l-.385-3.897H5.641l-.39 3.897c-.106 1.067.682 1.936 1.75 1.936Z" stroke="#222F5D" strokeWidth=".875" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.681 12c1.178 0 2.042-.957 1.925-2.13l-.163-1.604c-.21-1.517-.794-2.1-2.322-2.1h-1.78l.41 4.09c.098.962.967 1.743 1.93 1.743ZM3.29 12c.963 0 1.832-.782 1.925-1.745l.128-1.289.28-2.8H3.844c-1.528 0-2.111.583-2.321 2.1L1.365 9.87C1.248 11.043 2.112 12 3.29 12ZM7 14.916c-.974 0-1.458.484-1.458 1.458v1.459h2.917v-1.459c0-.974-.485-1.458-1.459-1.458Z" stroke="#222F5D" strokeWidth=".875" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </span>
                                <span className='mr-1 font-medium'> فروشنده: </span>
                            </div>
                            <span className='font-light mr-2'> دیجی تایز </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SinglePro;