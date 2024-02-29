import React from 'react'
import ProductList from '../components/product/productList';

const ProductThunkEx = () => {
    ///here fetching the product from the api using Thunk in RTK
    return (
        <div>
            <h4 style={{ marginLeft: 20 }}>
                Product thunk example
                <ProductList/>
            </h4>
        </div>
    )
}

export default ProductThunkEx;
