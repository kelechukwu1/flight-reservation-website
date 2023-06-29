import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { value: [] },
  reducers: {
    addUser: (state, action) => {
      // state = action.payload
      state.value.push(action.payload)
    },
  },
});
export const { addUser } = userSlice.actions;
