import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "./slices/userSlice";

const store = configureStore({
    reducer: {
        userDataSlice,
    }
});

export default store;