// this is where we will create our state, and reducers, and actions

import { createSlice } from "@reduxjs/toolkit";

// create the slice
export const reactionSlice = createSlice({
    name: "reaction",
    initialState: {
        likes: 0,
        dislikes: 0,
        reactions: []
    },
    reducers: {
        setLikes: (state, action) => {
            state.likes = state.likes + 1;
        },
        setDislikes: (state, action) => {
            state.dislikes = state.dislikes + 1;
        },
        setReactions: (state, action) => {
            state.reactions.push(action.payload);
        }
    }
});

// export the actions
export const { setLikes, setDislikes, setReactions } = reactionSlice.actions;

// export the selector
export const selectLikes = (state) => state.reaction.likes;

export const selectDislikes = (state) => state.reaction.dislikes;

export const selectReactions = (state) => state.reaction.reactions;

// export the reducer
export default reactionSlice.reducer;