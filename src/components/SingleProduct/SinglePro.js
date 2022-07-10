import React from 'react';

import SelectColorProduct from '../products/SelectColorProduct';
import apple from '../../assets/img/Product-Image.png';

const SinglePro = () => {
    return (
        <>
            <div className="flex flex-col bg-white rounded-lg md:p-4">
                <div className='flex flex-col items-center gap-y-9 px-4  md:flex-auto md:flex-row md:justify-start md:items-start'>

                    <div className='w-4/5 max-w-xs'>
                        <img src={apple} alt="" className='w-full h-auto' />
                    </div>

                    <div className='w-full md:w-auto md:mr-8'>

                        {/* product title */}
                        <div className='mb-10 text-center md:text-right'>
                            <h1 className='text-slate-800 font-bold text-lg mb-1 md:text-2xl' > گوشی ایفون ۱۳ pro max </h1>
                            <h2 className='font-thin text-gray-500 md:text-lg'> Apple Iphone 13 pro max </h2>
                        </div>
                        <hr className='hidden md:block mb-8' />
                        {/* select colors */}
                        <div className='flex items-center w-full justify-evenly mb-4 md:justify-start'>
                            <SelectColorProduct text="انتخاب رنگ:" />
                        </div>
                        {/* seller product */}
                        <div className='md:hidden text-slate-800  flex flex-wrap gap-x-2 gap-y-2 text-xs mb-6'>
                            <div className='flex items-center flex-auto '>
                                <div className='flex items-center'>
                                    <span>
                                        <svg width="20" height="19" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="8" fill="#E2E2E2"/><path d="M1.756 11.545v2.62c0 2.618 1.05 3.668 3.669 3.668h3.144c2.62 0 3.67-1.05 3.67-3.669v-2.62" stroke="#222F5D" strokeWidth=".875" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 12c1.068 0 1.855-.87 1.75-1.937l-.385-3.897H5.641l-.39 3.897c-.106 1.067.682 1.936 1.75 1.936Z" stroke="#222F5D" strokeWidth=".875" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.681 12c1.178 0 2.042-.957 1.925-2.13l-.163-1.604c-.21-1.517-.794-2.1-2.322-2.1h-1.78l.41 4.09c.098.962.967 1.743 1.93 1.743ZM3.29 12c.963 0 1.832-.782 1.925-1.745l.128-1.289.28-2.8H3.844c-1.528 0-2.111.583-2.321 2.1L1.365 9.87C1.248 11.043 2.112 12 3.29 12ZM7 14.916c-.974 0-1.458.484-1.458 1.458v1.459h2.917v-1.459c0-.974-.485-1.458-1.459-1.458Z" stroke="#222F5D" strokeWidth=".875" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    </span>
                                    <span className='mr-1 font-medium'> فروشنده: </span>
                                </div>
                                <span className='font-light mr-2'> دیجی تایز </span>
                            </div>
                            <div className='flex items-center flex-auto'>
                                <div className='flex items-center'>
                                    <span>
                                    <svg width="20" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="8" fill="#E2E2E2"/><path d="M10 6.333V13c0 .733-.6 1.333-1.333 1.333H1.334V10.08a2.6 2.6 0 0 0 2.06.92 2.563 2.563 0 0 0 1.733-.707c.207-.173.38-.393.513-.633.24-.407.373-.887.36-1.387a2.655 2.655 0 0 0-.906-1.94H10Z" stroke="#222F5D" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.667 14.333v2c0 1.107-.893 2-2 2H12C12 17.6 11.4 17 10.667 17s-1.333.6-1.333 1.333H6.667c0-.733-.6-1.333-1.333-1.333C4.6 17 4 17.6 4 18.333h-.667c-1.106 0-2-.893-2-2v-2h7.334C9.4 14.333 10 13.733 10 13V8.333h1.227c.48 0 .92.26 1.16.673L13.527 11h-.86c-.367 0-.667.3-.667.666v2c0 .367.3.667.667.667h2Z" stroke="#222F5D" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/><path d="M5.333 19.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM10.667 19.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM14.667 13v1.333h-2a.669.669 0 0 1-.667-.666v-2c0-.367.3-.667.667-.667h.86l1.14 2Z" stroke="#222F5D" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 8.333c0 .8-.353 1.513-.906 2a2.666 2.666 0 1 1-1.76-4.667A2.666 2.666 0 0 1 6 8.333Z" stroke="#222F5D" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M3.5 7.499v1l-.833.5" stroke="#222F5D" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    </span>
                                    <span className='mr-1 font-medium'> ارسال توسط: </span>
                                </div>
                                <span className='font-light mr-2'> انبار تهران </span>
                            </div>
                            <div className='flex items-center justify-center  w-full'>
                                <div className='flex items-center'>
                                    <span>
                                        <svg width="21" height="19" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="13" cy="8" r="8" fill="#E2E2E2"/><path d="M7.43 3.58 3.897 4.91c-.815.305-1.48 1.268-1.48 2.132v5.263c0 .836.552 1.934 1.225 2.437l3.046 2.274c.999.75 2.642.75 3.64 0l3.046-2.274c.673-.503 1.226-1.6 1.226-2.437V7.043c0-.87-.666-1.834-1.48-2.139L9.583 3.58c-.602-.22-1.566-.22-2.153 0Z" stroke="#222F5D" strokeWidth="1.063" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    </span>
                                    <span className='mr-1 font-medium'> گارانتی: </span>
                                </div>
                                <span className='font-light mr-2'> ۱۸ ماه زرین خدمت  </span>
                            </div>
                        </div>

                        {/* product info */}
                        <div className='text-slate-700 font-bold bg-white p-4 rounded-lg md:bg-none md:p-0'>
                            <h2 className='text-base md:text-xl mb-5'> ویژگی های کالا </h2>
                            <ul className='list-disc text-sm md:text-lg flex flex-col gap-y-2 marker:text-orange-500 list-inside'>
                                <li className='flex flex-col gap-y-2 lg:flex-row lg:gap-x-2'>
                                    <span className='font-light text-slate-600'> حافظه داخلی: </span>
                                    <span> ۲۵۶ گیگابایت </span>
                                </li>
                                <li className='flex flex-col gap-y-2 lg:flex-row lg:gap-x-2'>
                                    <span className='font-light text-slate-600'> بازه ی اندازه ی صفحه نمایش: </span>
                                    <span> ۰.۶ اینچ و بزرگتر</span>
                                </li>
                                <li className='flex flex-col gap-y-2 lg:flex-row lg:gap-x-2'>
                                    <span className='font-light text-slate-600'> شبکه های ارتباطی: </span>
                                    <span> 2G &bull; 3G &bull; 4G &bull; 5G  </span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className='w-1/4 bg-red-100 hidden md:flex'>

                </div>
            </div>
        </>
    );
};

export default SinglePro;