import React from "react";

const BookedFlights = () => {
	return (
		<div className="mx-5 mb-5">
			{/* //position stylings, loginwith google tonight! */}
			<div className="bg-slate-900 h-[10rem] rounded p-10 mb-3 bg-center">
				<h1 className="text-white text-5xl font-semibold mb-2">My Booking</h1>
				<h1 className="text-white text-2xl">Reference: 142BDA</h1>
			</div>
			<div className="mx-20 card rounded p-3 bg-white w-full">
				<div className="flex justify-between">
					<div>
						<div>ABV</div>
						<h1>Abuja</h1>
					</div>
					<div>
						<div>ENU</div>
						<h1>Enugu</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookedFlights;
