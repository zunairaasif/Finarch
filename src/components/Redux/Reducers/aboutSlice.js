import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  services: [],
  loading: false,
  hoveredIndex: null,
};

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    setServices: (state, action) => {
      state.services = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setHoveredIndex: (state, action) => {
      state.hoveredIndex = action.payload;
    },
  },
});

export const { setServices, setLoading, setHoveredIndex } = aboutSlice.actions;
export default aboutSlice.reducer;
