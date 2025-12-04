import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers/mainReducer";
import searchReducer from "../reducers/searchReducer";

const store = configureStore({
  reducer: {
    mainReducer: mainReducer,
    searchReducer: searchReducer,
  },
});

export default store;
