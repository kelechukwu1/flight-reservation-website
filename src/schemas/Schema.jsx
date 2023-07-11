import * as yup from "yup";

export const basicSchema = yup.object().shape({
	departureDate: yup
		.date()
		.min(new Date(), "Date must be current")
		.required("Enter departure date"),
	returnDate: yup
		.date()
		.min(new Date(), "Date must be current")
		.required("Enter return date"),
	// validDate: yup.date().required("Set a valid dates"),
});
