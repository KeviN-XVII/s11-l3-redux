import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers/mainReducer";
import searchReducer from "../reducers/searchReducer";
import loErReducer from "../reducers/loErReducer";

const store = configureStore({
  reducer: {
    mainReducer: mainReducer,
    searchReducer: searchReducer,
    loErReducer: loErReducer,
  },
});

export default store;
