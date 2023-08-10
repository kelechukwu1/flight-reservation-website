import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { userSlice } from "./store.jsx";
//import firebase
import "firebase/auth";
import "firebase/database";
// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration object
const firebaseConfig = {
	apiKey: "AIzaSyC-U5QlP41ay818deDHK8ac9LCOyS8pkrY",
	authDomain: "flight-reservation-29bf0.firebaseapp.com",
	databaseURL: "flight-reservation-29bf0",
	projectId: "flight-reservation-29bf0.appspot.com",
	storageBucket: "521649558876",
	messagingSenderId: "1:521649558876:web:c61521badfe34b0f861d99",
	appId: "G-4FCT3550ZL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
//redux store reducers
const store = configureStore({
	reducer: {
		users: userSlice.reducer,
	},
});
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
