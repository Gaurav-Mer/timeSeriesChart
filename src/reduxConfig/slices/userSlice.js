import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: {}
};

const userSlice = createSlice({
    name: "userData",
    initialState: initialState,
    reducers: {
        updateUsername: (state, action) => {
            state.userData = action.userData;
        }
    }
});

export const { updateUsername } = userSlice.actions;
export default userSlice.reducer;