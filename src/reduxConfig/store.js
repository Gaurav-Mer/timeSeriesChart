import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "./slices/userSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
    reducer: {
        userDataSlice,
        cartSlice
    }
});

export default store;