import React from "react";
import { useParams } from "react-router-dom";
import ProductsDetails from "../components/products/ProductsDetails";



const ProductPage = () => {
    const {id} = useParams();

    // console.log("log param", id);

    return(

        <>
            <ProductsDetails 
                 id={id}
            />
        </>
    )
}

export default ProductPage;