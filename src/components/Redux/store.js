import { configureStore } from "@reduxjs/toolkit";

import homeReducer from "../Redux/Reducers/homeSlice";
import teamReducer from "../Redux/Reducers/teamSlice";
import aboutReducer from "../Redux/Reducers/aboutSlice";
import contactReducer from "../Redux/Reducers/contactSlice";

const store = configureStore({
  reducer: {
    home: homeReducer,
    team: teamReducer,
    about: aboutReducer,
    contact: contactReducer,
  },
});

export default store;
