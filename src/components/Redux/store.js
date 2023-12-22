import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../Redux/Reducers/contactSlice";

const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});

export default store;
