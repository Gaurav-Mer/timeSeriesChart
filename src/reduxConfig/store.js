import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "./slices/userSlice";
import cartSlice from "./slices/cartSlice";
import productSlice from "./slices/productSlice";

const store = configureStore({
    reducer: {
        userDataSlice,
        cartSlice,
        productSlice
    }
});

export default store;