import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contact: [],
  loading: false,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setContact(state, action) {
      state.contact = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setContact, setLoading } = contactSlice.actions;

export default contactSlice.reducer;
