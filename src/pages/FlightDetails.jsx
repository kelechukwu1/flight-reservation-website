import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const FlightDetails = () => {
	const user = useSelector((state) => state.users.value);
	const {
		flyingFrom,
		flyingTo,
		returnDate,
		departureDate,
		adult,
		child,
		infant,
	} = user?.[user.length - 1];
	const adultNumber = parseInt(adult);
	const childNumber = parseInt(child);
	const infantNumber = parseInt(infant);
	const travelers = adultNumber + childNumber + infantNumber;
	const price = 40000 * travelers;
	const formattedPrice = price.toLocaleString("en-US");
	const tax = 6700;
	const formattedTax = tax.toLocaleString("en-US");
	const surCharge = 50000;
	const formattedsurCharge = surCharge.toLocaleString("en-US");
	const outStandingAmount = price + tax + surCharge;
	const formattedNumber = outStandingAmount.toLocaleString("en-US");

	//get the current date
	let currentDepartureDate = new Date(departureDate);
	const options = {
		weekday: "short",
		day: "2-digit",
		month: "short",
		year: "numeric",
	};
	const formattedDepartureDate = currentDepartureDate.toLocaleDateString(
		"en-US",
		options
	);

	//get the current return date
	let currentReturnDate = new Date(returnDate);
	const optionss = {
		weekday: "short",
		day: "2-digit",
		month: "short",
		year: "numeric",
	};
	const formattedReturnDate = currentReturnDate.toLocaleDateString(
		"en-US",
		optionss
	);

	//splitairport abbreviations
	const flyingFromSplit = flyingFrom.split(" ");
	const flyingToSplit = flyingTo.split(" ");

	const { flightId } = useParams();

	//get the current date

	return (
		<>
			<div className="bg-slate-900 h-[10rem] rounded p-10 mb-3 bg-center">
				<h1 className="text-white text-5xl font-semibold">Basket</h1>
			</div>
			<div className="card rounded-2xl bg-gray-100 mx-4 shadow">
				<div className="m-4 pt-5">
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
				<div className="text-center items-center justify-center">
					<hr className="mx-12" />
				</div>
				<div className="m-4">
					<h1 className="mx-4 my-2 text-3xl font-semibold">{`${flyingFromSplit[0]} to ${flyingToSplit[0]}`}</h1>
					<div className="flex justify-between mx-4">
						<p className="text-2xl">Flight No:</p>
						<p className="text-2xl">{flightId}</p>
					</div>

					<div className="flex justify-between mx-4">
						<p className="text-2xl">Departure Date:</p>
						<p className="text-2xl">{formattedDepartureDate}</p>
					</div>
					<div className="flex justify-between mx-4">
						<p className="text-2xl">Return Date:</p>
						<p className="text-2xl">{formattedReturnDate}</p>
					</div>
				</div>
				<div className="text-center items-center justify-center">
					<hr className="mx-12" />
				</div>
				<div className="m-4">
					<h1 className="mx-4 my-2 text-3xl font-semibold">Summary</h1>
					<div className="flex justify-between mx-4">
						<p className="text-2xl">Total Base Fare:</p>
						<p className="text-2xl">&#x20A6;{formattedPrice}.00</p>
					</div>

					<div className="flex justify-between mx-4">
						<p className="text-2xl">Total Tax:</p>
						<p className="text-2x2l">&#x20A6;{formattedTax}</p>
					</div>
					<div className="flex justify-between mx-4">
						<p className="text-2xl">Total Surcharge:</p>
						<p className="text-2x2l">&#x20A6;{formattedsurCharge}</p>
					</div>
					<div className="flex justify-between mx-4">
						<p className="text-2xl">Discount:</p>
						<p className="text-2xl">--</p>
					</div>
				</div>
				<div className="text-center items-center justify-center">
					<hr className="mx-12" />
				</div>
				<div className="items-center text-center m-4 p-5">
					<h1 className="text-3xl font-semibold">Outstanding Amount</h1>
					<h1 className="text-4xl font-bold pt-3">
						&#x20A6;{formattedNumber}.00
					</h1>
				</div>
			</div>
			<Link to="/payment">
				<div className="text-center p-4 mb-5">
					<button className="text-[2rem] py-6 rounded text-white w-full bg-slate-900 hover:bg-slate-950 transition ease-in-out duration-500">
						Check Out
					</button>
				</div>
			</Link>
		</>
	);
};

export default FlightDetails;
