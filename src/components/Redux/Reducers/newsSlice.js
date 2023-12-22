import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  news: [],
  images: [],
  startX: null,
  animate: "",
  loading: true,
  scrollLeft: 0,
  isDragging: false,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action) => {
      state.news = action.payload;
    },
    setImages: (state, action) => {
      state.images = action.payload;
    },
    setStartX: (state, action) => {
      state.startX = action.payload;
    },
    setAnimate: (state, action) => {
      state.animate = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setScrollLeft: (state, action) => {
      state.scrollLeft = action.payload;
    },
    setIsDragging: (state, action) => {
      state.isDragging = action.payload;
    },
  },
});

export const {
  setNews,
  setImages,
  setStartX,
  setAnimate,
  setLoading,
  setScrollLeft,
  setIsDragging,
} = newsSlice.actions;
export default newsSlice.reducer;
