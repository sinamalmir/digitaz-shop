import React, { useEffect, useState, createContext } from 'react';
import { Link } from 'react-router-dom';
// components
import MobileAppBar from '../header/MobileAppBar';
import MobileFilterBtn from '../MobileFilterBtn/MobileFilterBtn';
import DesktopNavbar from '../header/DesktopNavbar';
import BottomNavigation from '../BottomMobileNavigation/BottomNavigation';

import { getDetail } from '../../api/api';
import SingleProduct from './SingleProduct';
import FixAddToCart from '../FixAddToCart/FixAddToCart';

export const productDetails = createContext();

const ProductsDetails = (props) => {

    const [productDetail, setProductDetail] = useState([])

    useEffect(() => {
        fetchDetail();

    }, [])

    const fetchDetail = async () => {
        setProductDetail(await getDetail(props.id));
    }

    const arrow =
        <div className='bg-white border w-6 h-6 shadow-lg'>
            <Link to='/products'>
                <svg className="h-5 w-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
            </Link>
        </div>

    // console.log(productDetail);

    return (
        <div>
            {/* { console.log(productDetail) } */}
            <productDetails.Provider value={productDetail}>
                <DesktopNavbar />
                <MobileAppBar title="گوشی ایفون ۱۳ " icon={arrow} />
                <MobileFilterBtn />
                <SingleProduct 
                    productId = {props.id}
                />
                <FixAddToCart />
                {/* <BottomNavigation /> */}
            </productDetails.Provider>
        </div>
    );
};

export default ProductsDetails;