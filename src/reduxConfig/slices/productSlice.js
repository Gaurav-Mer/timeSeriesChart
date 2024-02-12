import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    status: "completed"

}
const productSlice = createSlice({
    name: "productList",
    initialState,
    reducers: {
        editProduct: (state, action) => {
            state.list[action.payload.id] = action.payload.editData;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchListProd.pending, (state, action) => {
            state.status = "pending"
        });
        builder.addCase(fetchListProd.fulfilled, (state, action) => {
            state.list = action.payload;
            state.status = "completed"
        });
        builder.addCase(fetchListProd.rejected, (state, action) => {
            state.status = "rejected"
        })
    }
});

export const fetchListProd = createAsyncThunk("products/productList", async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts").then(data => data.json())
    return resp
});

export const productData = state => state.productSlice;
export const { editProduct } = productSlice.actions;
export default productSlice.reducer;