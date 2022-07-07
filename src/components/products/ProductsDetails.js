import React from 'react';

const ProductsDetails = (props) => {

    console.log("props details", props);
    
    return (
        <div>
            {props.id}
        </div>
    );
};

export default ProductsDetails;