import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FlightDetails = () => {
	const user = useSelector((state) => state.users.value);
	// const flightType = (user[user.length - 1].flightType);
	const flyingFrom = user[user.length - 1].flyingFrom;
	const flyingTo = user[user.length - 1].flyingTo;
	const adult = user[user.length - 1].adult;
	const child = user[user.length - 1].child;
	const infant = user[user.length - 1].infant;
	const childNumber = parseInt(child);
	const infantNumber = parseInt(infant);
	const travelers = adult + childNumber + infantNumber;
	const price = 66800 * travelers;
	const departureDate = user[user.length - 1].departureDate;
	const returnDate = user[user.length - 1].returnDate;
	//split the dates and airport abbreviations
	const departureDateSplit = departureDate.split("-");
	const flyingFromSplit = flyingFrom.split(" ");
	const flyingToSplit = flyingTo.split(" ");
	const splitedDate = Number(departureDateSplit[2]);
	// const splitedMonth = dateSplit[1]

	//get the current date
	let currentDate = new Date();
	const options = { month: "short" };
	const month = currentDate.toLocaleString("en-US", options);
	return (
		<>
			<div className="bg-slate-900 h-[10rem] rounded p-10 mb-3 bg-center">
				<h1 className="text-white text-5xl font-semibold">Basket</h1>
			</div>
			<div className="card rounded-2xl bg-gray-100 mx-4 shadow">
				<div className="m-4">
					<h1 className="mx-4 my-2 text-3xl font-semibold">Passengers</h1>
					<div className="flex justify-between mx-4">
						<p className="text-2xl">No of Adults:</p>
						<p className="text-2xl">{adult}</p>
					</div>

					<div className="flex justify-between mx-4">
						<p className="text-2xl">No of Children:</p>
						<p className="text-2xl">{child}</p>
					</div>

					<div className="flex justify-between mx-4">
						<p className="text-2xl">No of Infants:</p>
						<p className="text-2xl">{infant}</p>
					</div>
				</div>
				<hr />
				<div className="m-4">
					<h1 className="mx-4 my-2 text-3xl font-semibold">{`${flyingFromSplit[0]} to ${flyingToSplit[0]}`}</h1>
					<div className="flex justify-between mx-4">
						<p className="text-2xl">Flight No:</p>
						<p className="text-2xl">p4-7153</p>
					</div>

					<div className="flex justify-between mx-4">
						<p className="text-2xl">Departure Date:</p>
						<p className="text-2xl">{departureDate}</p>
					</div>
					<div className="flex justify-between mx-4">
						<p className="text-2xl">Return Date:</p>
						<p className="text-2xl">{returnDate}</p>
					</div>
				</div>
				<hr />
				<div className="m-4">
					<h1 className="mx-4 my-2 text-3xl font-semibold">Summary</h1>
					<div className="flex justify-between mx-4">
						<p className="text-2xl">Total Base Fare:</p>
						<p className="text-2xl">&#x20A6;{price}.00</p>
					</div>

					<div className="flex justify-between mx-4">
						<p className="text-2xl">Total Tax:</p>
						<p className="text-2x2l">&#x20A6;3000</p>
					</div>
					<div className="flex justify-between mx-4">
						<p className="text-2xl">Discount:</p>
						<p className="text-2xl">--</p>
					</div>
				</div>
				<hr />
				<div className="items-center text-center m-4">
					<h1 className="text-3xl font-semibold">Outstanding Amount</h1>
					<h1 className="text-4xl font-bold pt-3">&#x20A6;{price}.00</h1>
				</div>
			</div>
			<Link to="/payment">
				<div className="text-center p-4">
					<button className="text-[2rem] py-6 rounded text-white w-full bg-slate-900 hover:bg-slate-950 transition ease-in-out duration-500">
						Check Out
					</button>
				</div>
			</Link>
		</>
	);
};

export default FlightDetails;
