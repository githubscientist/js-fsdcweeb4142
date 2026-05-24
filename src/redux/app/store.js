import { configureStore } from "@reduxjs/toolkit";
import reactionReducer from "../features/reactionSlice";

// this is where we will organize our store and import all the reducers
const store = configureStore({
    reducer: {
        reaction: reactionReducer,
    }
});

// export the store
export default store;