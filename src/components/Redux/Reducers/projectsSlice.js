import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
  images: [],
  startX: null,
  animate: "",
  value: 0,
  isLoading: true,
  scrollLeft: 0,
  isDragging: false,
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
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
    setValue: (state, action) => {
      state.value = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
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
  setProjects,
  setImages,
  setStartX,
  setAnimate,
  setValue,
  setLoading,
  setScrollLeft,
  setIsDragging,
} = projectsSlice.actions;
export default projectsSlice.reducer;
