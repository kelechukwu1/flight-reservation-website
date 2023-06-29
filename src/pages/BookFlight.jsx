import React from "react";
import { Link } from "react-router-dom";

const BookFlight = () => {
	return (
		<div className="bg-blue-950 h-screen p-2">
			<div>
				<img
					className="mx-auto bg-no-repeat h-72 bg-center rounded-full bg-contain"
					src="./public/img/booked.png"
					alt="booked image"
				/>
			</div>
			<div className="text-center items-center p-5 text-gray-400 ">
				<h1 className="text-white text-3xl">Your booking is confirmed.</h1>
				<div className="text-2xl p-3">
					<p className="md:px-[10rem] lg:px-[20rem]">
						Pay with you payment reference number:
						<br />
						<span className="text-gray-200 font-bold">13JYDN</span>. Your
						booking will expire at 15 Jun, 04:55am. Payment must be made before
						expiration. Please make allowance for 30 minutes minium before the
						expiration time, for the bank to process your payment. Pay with
						Quickteller or at any bank branch.
					</p>
				</div>
				<div className="space-y-3">
					<p className="text-3xl">Booking Reference:</p>
					<div className="items-center flex text-center justify-center gap-2">
						<h1 className="text-3xl font-bold text-white">13JYDN</h1>
						<ion-icon name="copy-outline" size="small"></ion-icon>
					</div>
				</div>
				<div className="mt-3 mx-3 md:px-[20rem] lg:px-[30rem]">
					<button className="w-full bg-gray-100 hover:bg-gray-200 transition ease-in-out duration-500 p-3 text-3xl text-blue-950 rounded">
						View Booking
					</button>
				</div>
				<div className="mt-4">
					<Link to="/" className="text-3xl text-gray-300">
						Go Home
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BookFlight;
