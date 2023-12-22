import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  team: [],
  loading: true,
  hover: null,
};

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    setTeam: (state, action) => {
      state.team = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setHover: (state, action) => {
      state.hover = action.payload;
    },
  },
});

export const { setTeam, setLoading, setHover } = teamSlice.actions;
export default teamSlice.reducer;
