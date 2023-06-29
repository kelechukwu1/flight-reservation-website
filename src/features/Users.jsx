import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    value: {
      firstName: "kelechukwu",
      lastName: "ikechukwu",
    },
  },
  reducers: {
    addUser: (state, action) => {
      //logic for adding a user
    },
  },
});
export default userSlice.reducer