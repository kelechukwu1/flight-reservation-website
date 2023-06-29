import React from "react";

const PayStack = () => {
	return (
		<div className="h-screen md:px-40 lg:px-[28rem]">
			<div>
				<img
					className="mx-auto bg-no-repeat h-72 bg-center rounded-full bg-contain"
					src="/visa2.jpg"
					alt="booked image"
				/>
			</div>
			<div className="border rounded m-4">
				<div className="p-3 text-center space-y-4">
					<h1 className="text-3xl text-gray-600">Total Payable</h1>
					<h1 className="font-semibold text-5xl">&#x20A6;64,000.00</h1>
					<p className="text-red-600 text-xl">
						*additional transaction fee may apply
					</p>
				</div>
			</div>
			<div className="m-4 pt-3">
				<input
					type="text"
					name="cardNumber"
					className="border w-full p-4 text-3xl"
					placeholder="Card number"
				/>
			</div>
			<div className="flex gap-2 m-4 py-3">
				<div className="">
					<input
						type="text"
						name="cardNumber"
						className="border w-full p-4 text-3xl"
						placeholder="MM"
					/>
				</div>
				<div className="">
					<input
						type="text"
						name="cardNumber"
						className="border w-full p-4 text-3xl"
						placeholder="YY"
					/>
				</div>
				<div className="">
					<input
						type="text"
						name="cardNumber"
						className="border w-full p-4 text-3xl"
						placeholder="CVV"
					/>
				</div>
			</div>
			<div className="m-4">
				<button className="w-full bg-slate-900 hover:bg-slate-950 transition ease-in-out duration-500 p-3 text-center text-white text-3xl">
					Pay Now
				</button>
			</div>
			<div className="text-center m-4">
				<div>
					<ion-icon name="lock-closed-outline" size="large"></ion-icon>
				</div>
				<p className="text-2xl text-gray-500">Secured by Paystack</p>
			</div>
		</div>
	);
};

export default PayStack;
