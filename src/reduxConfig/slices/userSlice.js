import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: {}
};

const userSlice = createSlice({
    name: "userData",
    initialState: initialState,
    reducers: {
        updateUsername: (state, action) => {
            state.userData = action.payload;
        }
    }
});

export const { updateUsername } = userSlice.actions;
export default userSlice.reducer;