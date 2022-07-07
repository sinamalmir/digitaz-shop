import React , { useContext } from 'react';
// components 
import MobileProduct from './MobileProduct';

// context
import { ProductContext } from '../../context/ProductContextProvider';

const MobileProducts = () => {

    const products = useContext(ProductContext);


    return (
        <div className='grid gap-x-2 gap-y-8 grid-cols-2 lg:grid-cols-4 px-2 md:p-0 sm:gap-x-4 md:gap-x-4 md:gap-y-10'>

            {  products.map(product => <MobileProduct key={product.id} productData={product} /> )  }
                    
        </div>

    );
};

export default MobileProducts;