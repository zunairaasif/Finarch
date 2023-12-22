import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
  loading: true,
  activeStep: 0,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setImages: (state, action) => {
      state.images = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setActiveStep: (state, action) => {
      state.activeStep = action.payload;
    },
  },
});

export const { setImages, setLoading, setActiveStep } = homeSlice.actions;
export default homeSlice.reducer;
