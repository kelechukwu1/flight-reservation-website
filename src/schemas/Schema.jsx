import * as yup from "yup";

export const basicSchema = yup.object().shape({
	departureDate: yup.date().required("Enter departure date"),
	returnDate: yup
		.date()
		.max(new Date(), "date must be current")
		.required("Enter return date"),
});
