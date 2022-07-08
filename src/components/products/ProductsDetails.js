import React , { useEffect, useState }  from 'react';
import MobileAppBar from '../header/MobileAppBar';

import {  getDetail } from '../../api/api';

const ProductsDetails = (props) => {



    const [productDetail , setProductDetail] = useState([])

      useEffect (() => {
        const fetchDetail = async () => {
            setProductDetail(await getDetail(props.id));
        }
        fetchDetail();
    },[] )

    
    return (
        <div>
            <MobileAppBar />
            {/* {props.id} */}
            {/* { console.log(productDetail) } */}

            <h1> {productDetail} </h1>
        </div>
    );
};

export default ProductsDetails;