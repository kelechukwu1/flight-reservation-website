import { Form, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addUser } from "../store";
import { v4 as uuidv4 } from "uuid";

const BookFlightForm = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const id = uuidv4();

	const formik = useFormik({
		initialValues: {
			flightType: "One-Way",
			flyingFrom: "Owerri (QOW)",
			flyingTo: "Lagos (LOS)",
			departureDate: "",
			returnDate: "",
			adult: 1,
			child: 0,
			infant: 0,
		},

		//form submit
		onSubmit: (values) => {
			// formik.initialValues()
			dispatch(addUser({ ...values, id }));
			navigate("selectOutbound");
		},
	});

	return (
		<div className="bg-slate-900 p-12 rounded-es-3xl rounded-tr-3xl bg-center">
			<div className="w-full lg:w-[80rem]  md:w-[65rem] md:h-[50rem] md:my-[5rem]  md:mx-[auto] shadow-lg rounded-md p-6">
				<div className="items-center justify-center w-full">
					<h1 className="text-center mb-3 text-2xl font-semibold text-white">
						Book Flights
					</h1>
				</div>
				<hr />
				<Form
					onSubmit={formik.handleSubmit}
					className="justify-center items-center w-full"
				>
					<div className="flex justify-center">
						<div className="mt-3 w-full p-2">
							<label
								htmlFor="flight-type"
								className="block text-xl mb-2 text-white md:text-2xl font-semibold"
							>
								Flight type
							</label>
							<select
								onChange={formik.handleChange}
								value={formik.values.flightType}
								name="flightType"
								className="w-full p-2 border-2 font-semibold mr-2 h-16 text-xl border-blue-900 focus:border-blue-500 focus:ring-blue-500 rounded"
							>
								<option>One-Way</option>
								<option>Round Trip</option>
								<option>Multi-City</option>
							</select>
						</div>
					</div>
					<div>
						<div className="flex gap-3 justify-between">
							<div className="mt-3">
								<label
									htmlFor="flyingFrom"
									className="block text-xl mb-2 text-white md:text-2xl font-semibold"
								>
									Flying From
								</label>
								<select
									value={formik.values.flyingFrom}
									onChange={formik.handleChange}
									name="flyingFrom"
									className="p-2 border-2 font-semibold w-full mr-2 md:w-[30rem] lg:w-[35rem] h-16 text-xl border-blue-900 focus:border-blue-500 focus:ring-blue-500 rounded"
								>
									<option>Abuja (ABV)</option>
									<option>Akura (AKR)</option>
									<option>Anambra (ANA)</option>
									<option>Asaba (ABB)</option>
									<option>Benin (BNI)</option>
									<option>Enugu (ENU)</option>
									<option> Gombe (GMO)</option>
									<option>Ibadan (IBA)</option>
									<option>Ilorin (ILR)</option>
									<option>Kano (KAN)</option>
									<option>Lagos (LOS)</option>
									<option>Maiduguri (MIU)</option>
									<option>Markurdi (MDI)</option>
									<option>Owerri (QOW)</option>
									<option>Portharcourt (PHC)</option>
									<option>Uyo (QUO)</option>
									<option>Warri (QRW)</option>
									<option>Yola (YOL)</option>
								</select>
							</div>
							<div className="mt-3">
								<label
									htmlFor="flyingTo"
									className="font-semibold block text-xl mb-2 text-white md:text-2xl"
								>
									Flying To
								</label>
								<select
									value={formik.values.flyingTo}
									onChange={formik.handleChange}
									name="flyingTo"
									className="p-2 border-2 font-semibold w-full md:w-[30rem] lg:w-[35rem] h-16 text-xl border-blue-900 focus:border-blue-500 focus:ring-blue-500 rounded"
								>
									<option>Abuja (ABV)</option>
									<option>Lagos (LOS)</option>
									<option>Portharcourt (PHC)</option>
								</select>
							</div>
						</div>

						<div className="flex gap-3 justify-center items-center">
							<div className="mt-3">
								<label
									htmlFor="departureDate"
									className="block text-xl mb-2 text-white md:text-2xl font-semibold"
								>
									Departure Date
								</label>
								<input
									onChange={formik.handleChange}
									value={formik.values.departureDate}
									type="date"
									name="departureDate"
									className="p-2 border-2 font-semibold w-[14rem] md:w-[30rem] lg:w-[35rem] h-16 text-xl border-blue-900 focus:border-blue-500 focus:ring-blue-500 rounded"
								/>
							</div>
							<div className="mt-3">
								<label
									htmlFor="returnDate"
									className="block text-xl mb-2 text-white md:text-2xl font-semibold"
								>
									Return Date
								</label>
								<input
									onChange={formik.handleChange}
									value={formik.values.returnDate}
									type="date"
									name="returnDate"
									className="p-2 border-2 font-semibold w-[14rem] md:w-[30rem] lg:w-[35rem] h-16 text-xl border-blue-900 focus:border-blue-500 focus:ring-blue-500 rounded"
								/>
							</div>
						</div>

						<div className="md:flex justify-center md:justify-between md:p-2">
							<div className="mt-3 mr-2">
								<label
									htmlFor="adult"
									className="block font-semibold text-xl mb-2 text-white md:text-xl"
								>
									Adult
								</label>
								<select
									value={formik.values.adult}
									onChange={formik.handleChange}
									name="adult"
									className="p-2 border-2 font-semibold w-full mr-2 md:w-[18rem] lg:w-[20rem] h-16 text-xl border-blue-900 focus:border-blue-500 focus:ring-blue-500 rounded"
								>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
								</select>
							</div>
							<div className="mt-3 mr-2">
								<label
									htmlFor="child"
									className="block text-xl mb-2 text-white md:text-xl"
								>
									Child
								</label>
								<select
									onChange={formik.handleChange}
									value={formik.values.child}
									name="child"
									className="p-2 border-2 font-semibold w-full mr-2 md:w-[18rem] lg:w-[20rem] h-16 text-xl border-blue-900 focus:border-blue-500 focus:ring-blue-500 rounded"
								>
									<option>0</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</select>
							</div>
							<div className="mt-3">
								<label
									htmlFor="infant"
									className="block text-xl mb-2 text-white md:text-xl"
								>
									Infant
								</label>
								<select
									onChange={formik.handleChange}
									value={formik.values.infant}
									name="infant"
									className="p-2 border-2 font-semibold w-full mr-2 md:w-[18rem] lg:w-[20rem] h-16 text-xl border-blue-900 focus:border-blue-500 focus:ring-blue-500 rounded"
								>
									<option>0</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</select>
							</div>
						</div>

						<div className="mt-3 mx-2 md:mx-[10rem]">
							<button
								type="submit"
								className="w-full uppercase p-3 mt-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-950 text-xl ease-in-out duration-500"
							>
								Search For Flight
							</button>
						</div>
					</div>
				</Form>
			</div>
		</div>
	);
};

export default BookFlightForm;
