import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState = {
    name: "garry here",
}

useEffect(() => {
    console.log("GAURAV MER IS HERE ");
}, [])
const userSlice = createSlice({
    name: "userData", initialState: initialState, reducers: {
        updateUsername: (state, action) => {
            state.name = action.username;
        }
    }
});
export const { updateUsername } = userSlice.actions;
export default userSlice.reducer;