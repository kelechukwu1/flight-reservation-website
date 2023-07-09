import * as yup from "yup";

export const basicSchema = yup.object().shape({
	departureDate: yup.date().required("Enter departure date"),
	returnDate: yup.date().required("Enter return date"),
	// validDate: yup.date().required("Set a valid dates"),
});
