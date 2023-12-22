import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contact: [],
  loading: false,
  errorSnackbar: false,
  successSnackbar: false,
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
    setSuccessSnackbar(action, state) {
      state.successSnackbar = action.payload;
    },
    setErrorSnackbar(action, state) {
      state.errorSnackbar = action.payload;
    },
  },
});

export const { setContact, setLoading, setSuccessSnackbar, setErrorSnackbar } =
  contactSlice.actions;

export default contactSlice.reducer;
