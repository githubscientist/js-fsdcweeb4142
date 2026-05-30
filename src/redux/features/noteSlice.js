import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import noteServices from "../../services/noteServices";

export const fetchNotes = createAsyncThunk(
    'note/fetchNotes',
    async (_, thunkAPI) => {
        try {
            const response = await noteServices.getNotes();
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to fetch notes"
            )
        }
    }
)

// create a new slice
export const noteSlice = createSlice({
    name: "note",
    initialState: {
        notes: [],
        loadingNotes: false,
        notesError: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        // fetchNotes
        builder
            .addCase(fetchNotes.pending, (state) => {
                state.loadingNotes = true;
                state.notesError = null;
            })
            .addCase(fetchNotes.fulfilled, (state, action) => {
                state.loadingNotes = false;
                state.notes = action.payload;
            })
            .addCase(fetchNotes.rejected, (state, action) => {
                state.loadingNotes = false;
                state.notes = [];
                state.notesError = action.payload || "Failed to fetch notes";
            })
    }
});

// export the selector
export const selectNotes = (state) => state.note.notes;
export const selectLoadingNotes = (state) => state.note.loadingNotes;
export const selectNotesError = (state) => state.note.notesError;

// export the reducer
export default noteSlice.reducer;