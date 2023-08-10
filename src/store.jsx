import { createSlice } from "@reduxjs/toolkit";

const localStorageUser = localStorage.getItem("user");
const parsedLocalStorageUser = localStorageUser
	? JSON.parse(localStorageUser)
	: [];

const initialState = {
	value: parsedLocalStorageUser,
};
export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		addUser: (state, action) => {
			state.value.push(action.payload);
			localStorage.setItem("user", JSON.stringify(state.value));
		},
	},
});
export const { addUser } = userSlice.actions;
