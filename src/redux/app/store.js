import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/registerSlice";
import loginReducer from "../features/loginSlice";
import noteReducer from "../features/noteSlice";

// create a store
const store = configureStore({
    reducer: {
        // add reducers here
        register: registerReducer,
        login: loginReducer,
        note: noteReducer
    }
});

// export the store
export default store;