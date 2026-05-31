import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import noteServices from "../../services/noteServices";

// GET /notes
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

// GET /notes/:id
export const fetchNoteByID = createAsyncThunk(
    'note/fetchNoteByID',
    async (id, thunkAPI) => {
        try {
            const response = await noteServices.getNotesById(id);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to fetch note"
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
        note: null,
        loadingNote: false,
        noteError: null
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
        
            .addCase(fetchNoteByID.pending, (state) => {
                state.loadingNote = true;
                state.noteError = null;
            })
            .addCase(fetchNoteByID.fulfilled, (state, action) => {
                state.loadingNote = false;
                state.note = action.payload;
            })
            .addCase(fetchNoteByID.rejected, (state, action) => {
                state.loadingNote = false;
                state.note = null;
                state.noteError = action.payload || "Failed to fetch note";
            })
    }
});

// export the selector
export const selectNotes = (state) => state.note.notes;
export const selectLoadingNotes = (state) => state.note.loadingNotes;
export const selectNotesError = (state) => state.note.notesError;

export const selectNote = (state) => state.note.note;
export const selectLoadingNote = (state) => state.note.loadingNote;
export const selectNoteError = (state) => state.note.noteError;

// export the reducer
export default noteSlice.reducer;