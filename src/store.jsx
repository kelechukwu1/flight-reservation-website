import { createSlice } from "@reduxjs/toolkit";

const localStorageUser =
  localStorage.getItem("user") != null
    ? JSON.parse(localStorage.getItem("user"))
    : [];

const initialState = {
  value: localStorageUser,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      // state = action.payload
      state.value.push(action.payload);
      localStorage.setItem(
        "user",
        JSON.stringify(state.value.map((user) => user))
      );
    },
  },
});
export const { addUser } = userSlice.actions;
