import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  email: null,
  photo: null,
  name: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.photo = action.payload.photo;
      state.name = action.payload.name;
    },
    removeUser: (state, action) => {
      state.email = null;
      state.photo = null;
      state.name = null;
    },
  },
});
export const { setUser, removeUser } = userSlice.actions;
export const selectEmail = (state) => state.email;
export const selectphoto = (state) => state.photo;
export const selectname = (state) => state.name;
export default userSlice.reducer;
