import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchListProd, productData } from '../../reduxConfig/slices/productSlice';

const ProductList = () => {
    const data = useSelector(productData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchListProd())
    }, []);

    console.log("data is -> ",data);
    return (
        <div>
            <h5>Product List:-</h5>
            <button onClick={() => dispatch(fetchListProd())
            }>fetch data</button>
        </div>
    )
}

export default ProductList
