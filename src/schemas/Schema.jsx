import * as yup from "yup";

export const basicSchema = yup.object().shape({
	departureDate: yup.string().required("Enter departure date"),
	returnDate: yup.string().required("Enter return date"),
});
