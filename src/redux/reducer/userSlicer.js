import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userCredentials: {},
    isPending: false,
    isError: null,
  },
  reducers: {
    startGet: (state, action) => {
      state.isPending = true;
    },
    successGet: (state, action) => {
      state.isPending = false;
      state.isError = false;
      state.userCredentials = action.payload;
    },
    updateCredentials: (state, action) => {
      state.userCredentials.username = action.payload;
    },
    changePhotoPath: (state, action) => {
      state.userCredentials.photo_path = action.payload;
    },
    errorGet: (state, action) => {
      state.isPending = true;
      state.isError = true;
    },
  },
});

//login
export const { startGet, successGet, changePhotoPath, updateCredentials, errorGet } = userSlice.actions;
export default userSlice.reducer;
