import { createSlice } from "@reduxjs/toolkit";

// create a new slice
export const noteSlice = createSlice({
    name: "note",
    initialState: {
        notes: []
    },
    reducers: {
        setNotes: (state, action) => {
            state.notes = action.payload;
        }
    }
});

// export the action creators
export const { setNotes } = noteSlice.actions;

// export the selector
export const selectNotes = (state) => state.note.notes;

// export the reducer
export default noteSlice.reducer;