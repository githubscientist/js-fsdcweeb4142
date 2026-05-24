import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/registerSlice";
import loginReducer from "../features/loginSlice";

// create a store
const store = configureStore({
    reducer: {
        // add reducers here
        register: registerReducer,
        login: loginReducer,
    }
});

// export the store
export default store;