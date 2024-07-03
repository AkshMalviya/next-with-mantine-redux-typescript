import { createSlice, nanoid } from "@reduxjs/toolkit";

// This will be initial value of the store
const initialState = {
    counter: 0,
};
export const slice1 = createSlice({
    name: "slice1",
    initialState,
    reducers: {
        // All reducer will have to 2 props 1.state which will have initail State value with types
        // 2.action contains payload which will be when we call that function with actual props
        increment: (state, action) => {
            state.counter++;
        },
    },
});

// exporting all reducer
export const { increment } = slice1.actions;

export default slice1.reducer;
