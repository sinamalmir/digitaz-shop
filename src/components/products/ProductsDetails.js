import React , { useEffect, useState }  from 'react';

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
            {props.id}
            { console.log(productDetail) }
            {/* <h1> {productDetail.title_fa} </h1> */}
        </div>
    );
};

export default ProductsDetails;