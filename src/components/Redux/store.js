import { configureStore } from "@reduxjs/toolkit";

import homeReducer from "../Redux/Reducers/homeSlice";
import teamReducer from "../Redux/Reducers/teamSlice";
import newsReducer from "../Redux/Reducers/newsSlice";
import aboutReducer from "../Redux/Reducers/aboutSlice";
import contactReducer from "../Redux/Reducers/contactSlice";
import projectsReducer from "../Redux/Reducers/projectsSlice";

const store = configureStore({
  reducer: {
    home: homeReducer,
    team: teamReducer,
    news: newsReducer,
    about: aboutReducer,
    contact: contactReducer,
    projects: projectsReducer,
  },
});

export default store;
