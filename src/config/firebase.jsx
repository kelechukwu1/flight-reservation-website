// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
	apiKey: "AIzaSyC-U5QlP41ay818deDHK8ac9LCOyS8pkrY",
	authDomain: "flight-reservation-29bf0.firebaseapp.com",
	projectId: "flight-reservation-29bf0",
	storageBucket: "flight-reservation-29bf0.appspot.com",
	messagingSenderId: "521649558876",
	appId: "1:521649558876:web:c61521badfe34b0f861d99",
	measurementId: "G-4FCT3550ZL",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
