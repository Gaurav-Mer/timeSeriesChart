import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, prodCurrentData, removeProduct } from '../reduxConfig/slices/cartSlice';

const Product = () => {
    const { products, business } = useSelector(prodCurrentData);
    const dispatch = useDispatch();
    const dummyProductList = [{
        name: "Laptop",
        price: 200
    },
    { name: "Iphone", price: 230 },
    { name: "Ukelele", price: 450 }
    ]

    function totalSum(products) {
        if (products?.length > 0) {
            return products.reduce((acc, curr) => acc + curr?.price, 0)
        } else {
            return 0
        }
    }
    // const overAllSum = products?.length > 0 ? totalSum(products) : 0;
    const overAllSum = useMemo(() => {
        return products?.length > 0 ? totalSum(products) : 0;
    }, [products])
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div>
                    <h4>Product List :-</h4>
                    {dummyProductList?.map((item, index) => {
                        return <div key={index} style={{ background: "orange", marginBottom: 10, padding: "2px 10px", borderRadius: 10 }}>
                            <h6 >{item?.name} <span style={{ marginLeft: 20 }}>$ {item?.price}</span></h6>
                            <button onClick={() => dispatch(addProduct({ product: item }))} style={{ background: "purple", color: "white", border: "none", width: "100%", cursor: "pointer" }}>add to cart</button>
                        </div>
                    })

                    }
                </div>
                <div>
                    <h4>My Cart : -</h4>
                    <div >
                        {products?.map((item, index) => {
                            return (
                                <div key={index} style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
                                    <h6>{item?.name}</h6>
                                    <h6 style={{ color: "green" }}>${item?.price} </h6>
                                    <button onClick={() => dispatch(removeProduct(index))} style={{ border: "none", paddingY: 1, margin: 6, height: 50, color: 'red', cursor: "pointer" }}>Remove</button>
                                </div>
                            )
                        })}
                    </div>
                    <hr />
                    <h5>Total :<span style={{ marginLeft: 10, color: "green" }}>${overAllSum}</span></h5>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default React.memo(Product)
