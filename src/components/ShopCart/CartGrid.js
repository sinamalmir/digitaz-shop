import React from 'react';
import DesktopNavbar from '../header/DesktopNavbar';
import MobileAppBar from '../header/MobileAppBar';
import { Link } from 'react-router-dom';
import CartItems from './CartItems';
import CartSummery from './CartSummery';
import CartHeader from './CartHeader';

const CartGrid = () => {

    const arrow= 
    <div className='bg-white border w-6 h-6 shadow-lg'>
        <Link to='/product/:id'>
            <svg className="h-5 w-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
        </Link>
    </div>


    return (
        <>
            <DesktopNavbar />
            <MobileAppBar title="سبد خرید" icon={arrow} />   
            
            <div className="flex flex-col  gap-y-4 md:flex-row   container mx-auto 2xl:max-w-screen-2xl">
                <CartHeader />
                
                <CartItems />
                <CartSummery />

            </div>


        </>
    );
};

export default CartGrid;