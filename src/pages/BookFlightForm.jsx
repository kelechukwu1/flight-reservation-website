import { Form, useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addUser } from "../store";
import { v4 as uuidv4 } from "uuid";
// import { basicSchema } from "../schemas/Schema";
import { useState, useRef } from "react";

const BookFlightForm = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const id = uuidv4();

	const [flightType, setFlightType] = useState("One-Way");
	const [flyingFrom, setFlyingFrom] = useState("Owerri (QOW)");
	const [flyingTo, setFlyingTo] = useState("Lagos (LOS)");
	const [departureDate, setDepartureDate] = useState("");
	const [returnDate, setReturnDate] = useState("");
	const [adult, setAdult] = useState("1");
	const [child, setChild] = useState("0");
	const [infant, setInfant] = useState("0");
	const [isValid, setIsValid] = useState(true);

	const handleDateInput = (e) => {
		setDepartureDate(e.target.value);
		const departureDatevar = new Date(departureDate).getTime();
		const today = new Date().getTime();

		console.log("Departure Date: " + departureDatevar);
		console.log("Today: " + today);

		if (departureDatevar >= today) {
			setIsValid(true);
			console.log(true);
		} else {
			setIsValid(false);
			console.log(false);
		}
	};

	const handleSubmit = () => {
		const values = {
			flightType,
			flyingFrom,
			flyingTo,
			departureDate,
			returnDate,
			adult,
			child,
			infant,
		};
		console.log(values);
		if (isValid) {
			dispatch(addUser({ values, id: id }));
			navigate("/selectOutbound");
		}
	};

	return (
		<>
			<div className="bg-slate-900 px-12 py-5  rounded-tr-3xl">
				<div className="w-full lg:w-[80rem]  md:w-[65rem] md:h-[50rem] md:my-[5rem]  md:mx-[auto] shadow-lg rounded-md px-6">
					<div className="items-center justify-center w-full">
						<h1 className="text-center text-2xl font-semibold text-white">
							Book Flights
						</h1>
					</div>

					<Form
						// onSubmit={handleSubmit}
						className="justify-center items-center w-full"
					>
						<div className="w-full flex">
							<div className="mt-3 w-full p-2">
								<label
									htmlFor="flight-type"
									className="block text-xl mb-2 text-white md:text-2xl font-semibold"
								>
									Flight type
								</label>
								<select
									onChange={(e) => setFlightType(e.target.value)}
									value={flightType}
									name="flightType"
									className="w-full p-2 border-2 font-semibold h-16 text-xl border-blue-900 focus:border-blue-500 focus:ring-blue-500 rounded"
								>
									<option>One-Way</option>
									<option>Round Trip</option>
									<option>Multi-City</option>
								</select>
							</div>
						</div>
						{/* <div> */}
						<div className="flex px-2 gap-3">
							<div className="mt-3 w-full">
								<div>
									<label
										htmlFor="flyingFrom"
										className="block text-xl mb-2 text-white md:text-2xl font-semibold"
									>
										Flying From
									</label>
								</div>
								<div className="w-full">
									<select
										value={flyingFrom}
										onChange={(e) => setFlyingFrom(e.target.value)}
										name="flyingFrom"
										className="p-2 border-2 font-semibold w-full mr-2  h-16 text-xl border-blue-900 focus:border-blue-500 focus:ring-blue-500 rounded"
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
										<option>Uyo (QUO)</option>
										<option>Warri (QRW)</option>
										<option>Yola (YOL)</option>
									</select>
								</div>
							</div>
							<div className="w-full mt-3">
								<div>
									<label
										htmlFor="flyingTo"
										className="font-semibold block text-xl mb-2 text-white md:text-2xl"
									>
										Flying To
									</label>
								</div>
								<div>
									<select
										value={flyingTo}
										onChange={(e) => setFlyingTo(e.target.value)}
										name="flyingTo"
										className="p-2 border-2 font-semibold w-full  h-16 text-xl border-blue-900 focus:border-blue-500 focus:ring-blue-500 rounded"
									>
										<option>Abuja (ABV)</option>
										<option>Lagos (LOS)</option>
										<option>Portharcourt (PHC)</option>
									</select>
								</div>
							</div>
						</div>

						<div className="px-2 flex">
							<div className="mt-3 w-full">
								<div>
									<label
										htmlFor="departureDate"
										className="block text-xl mb-2 text-white md:text-2xl font-semibold"
									>
										Departure Date
									</label>
								</div>
								<div>
									<input
										onChange={handleDateInput}
										value={departureDate}
										type="date"
										name="departureDate"
										placeholder={departureDate}
										// errors.departureDate && touched.departureDate &&
										className={
											!isValid
												? "border-red-500 p-2 border-2 font-semibold h-16 text-xl focus:border-blue-500 focus:ring-blue-500 rounded"
												: "p-2 border-2 font-semibold h-16 text-xl border-blue-900 focus:border-blue-500 focus:ring-blue-500 rounded"
										}
									/>
									{!isValid && (
										<div className="text-red-500 text-xl">
											Set a valid date.
										</div>
									)}
									{/* {errors.departureDate && touched.departureDate && (
										<div className="text-red-500 text-xl">
											{errors.departureDate}
										</div>
									)} */}
								</div>
							</div>

							<div className="mt-3 w-[1/2]">
								<div>
									<label
										htmlFor="returnDate"
										className="block text-xl mb-2 text-white md:text-2xl font-semibold"
									>
										Return Date
									</label>
								</div>
								<div>
									<input
										onChange={handleDateInput}
										value={returnDate}
										type="date"
										name="returnDate"
										// errors.returnDate && touched.returnDate &&
										className={
											!isValid
												? "border-red-500 p-2 border-2 font-semibold  h-16 text-xl focus:border-blue-500 focus:ring-blue-500 rounded"
												: "p-2 border-2 font-semibold  h-16 text-xl border-blue-900 focus:border-blue-500 focus:ring-blue-500 rounded"
										}
									/>
									{!isValid && (
										<div className="text-red-500 text-xl">
											Set a valid date.
										</div>
									)}
									{/* {errors.returnDate && touched.returnDate && (
										<div className="text-red-500 text-xl">
											{errors.returnDate}
										</div>
									)} */}
								</div>
							</div>
						</div>

						<div className="md:flex justify-center md:justify-between md:p-2">
							<div className="mt-3 px-2">
								<label
									htmlFor="adult"
									className="block font-semibold text-xl mb-2 text-white md:text-xl"
								>
									Adult
								</label>
								<select
									value={adult}
									onChange={(e) => setAdult(e.target.value)}
									name="adult"
									className="p-2 border-2 font-semibold w-full mr-2 md:w-[18rem] lg:w-[20rem] h-16 text-xl border-blue-900 focus:border-blue-500 focus:ring-blue-500 rounded"
								>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
								</select>
							</div>
							<div className="mt-3 px-2">
								<label
									htmlFor="child"
									className="block text-xl mb-2 text-white md:text-xl"
								>
									Child
								</label>
								<select
									value={child}
									onChange={(e) => setChild(e.target.value)}
									name="child"
									className="p-2 border-2 font-semibold w-full mr-2 md:w-[18rem] lg:w-[20rem] h-16 text-xl border-blue-900 focus:border-blue-500 focus:ring-blue-500 rounded"
								>
									<option>0</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</select>
							</div>
							<div className="mt-3 px-2">
								<label
									htmlFor="infant"
									className="block text-xl mb-2 text-white md:text-xl"
								>
									Infant
								</label>
								<select
									value={infant}
									onChange={(e) => setInfant(e.target.value)}
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
								onSubmit={handleSubmit}
								type="submit"
								className="w-full uppercase p-3 mt-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-950 text-xl ease-in-out duration-500"
							>
								Search For Flight
							</button>
						</div>
						{/* </div> */}
					</Form>
				</div>
			</div>
			<hr className="bg-white" />
		</>
	);
};
export default BookFlightForm;
