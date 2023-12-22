import { configureStore } from "@reduxjs/toolkit";

import aboutReducer from "../Redux/Reducers/aboutSlice";
import contactReducer from "../Redux/Reducers/contactSlice";

const store = configureStore({
  reducer: {
    contact: contactReducer,
    about: aboutReducer,
  },
});

export default store;
