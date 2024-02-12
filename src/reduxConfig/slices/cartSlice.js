import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    business: "gaurav",
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload.product);
        },
        removeProduct: (state, action) => {
            state.products.splice(action.payload.index, 1)
        }

    }
});

export const prodCurrentData = (state) => {
    return state.cartSlice;
}
export const { addProduct ,removeProduct} = cartSlice.actions;
export default cartSlice.reducer;