import { createSlice } from "@reduxjs/toolkit";

// create a new slice
export const noteSlice = createSlice({
    name: "note",
    initialState: {
        notes: [],
        note: null
    },
    reducers: {
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setNote: (state, action) => {
            state.note = action.payload;
        }
    }
});

// export the action creators
export const { setNotes, setNote } = noteSlice.actions;

// export the selector
export const selectNotes = (state) => state.note.notes;

export const selectNote = (state) => state.note.note;

// export the reducer
export default noteSlice.reducer;