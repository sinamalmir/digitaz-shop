import React , { useEffect, useState }  from 'react';
// components
import MobileAppBar from '../header/MobileAppBar';
import MobileFilterBtn from '../MobileFilterBtn/MobileFilterBtn';
import DesktopNavbar from '../header/DesktopNavbar';
import BottomNavigation from '../BottomMobileNavigation/BottomNavigation';

import {  getDetail } from '../../api/api';


const ProductsDetails = (props) => {

    const [productDetail , setProductDetail] = useState([])

      useEffect (() => {
        const fetchDetail = async () => {
            setProductDetail(await getDetail(props.id));
        }
        fetchDetail();
    },[] )

    const arrow= <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
  </svg>

    return (
        <div>
            {/* {props.id} */}
            {/* { console.log(productDetail) } */}
            {/* <h1> {productDetail} </h1> */}

            <DesktopNavbar />
            <MobileAppBar title="گوشی ایفون ۱۳ " icon={arrow} />
            <MobileFilterBtn />

            <BottomNavigation />

        </div>
    );
};

export default ProductsDetails;