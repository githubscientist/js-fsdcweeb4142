import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/registerSlice";

// create a store
const store = configureStore({
    reducer: {
        // add reducers here
        register: registerReducer
    }
});

// export the store
export default store;