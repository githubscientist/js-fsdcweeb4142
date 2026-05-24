// this is where we will create our state, and reducers, and actions

import { createSlice } from "@reduxjs/toolkit";

// create the slice
export const reactionSlice = createSlice({
    name: "reaction",
    initialState: {
        likes: 0,
    },
    reducers: {
        setLikes: (state, action) => {
            state.likes = state.likes + 1;
        }
    }
});

// export the actions
export const { setLikes } = reactionSlice.actions;

// export the selector
export const selectLikes = (state) => state.reaction.likes;

// export the reducer
export default reactionSlice.reducer;