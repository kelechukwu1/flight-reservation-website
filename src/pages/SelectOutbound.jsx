import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const SelectOutbound = () => {
	const user = useSelector((state) => state.users.value);
	const { flyingFrom, flyingTo, adult, child, infant, departureDate } =
		user?.[user.length - 1];
	const adultNumber = parseInt(adult);
	const childNumber = parseInt(child);
	const infantNumber = parseInt(infant);
	const travelers = adultNumber + childNumber + infantNumber;
	const price = 40000 * travelers;
	const tax = 6700;
	const surCharge = 50000;
	const outStandingAmount = price + tax + surCharge;
	const formattedNumber = outStandingAmount.toLocaleString("en-US");
	//split airport abbreviations
	const flyingFromSplit = flyingFrom.split(" ");
	const flyingToSplit = flyingTo.split(" ");

	//get the current date
	let currentDate = new Date(departureDate);
	const options = { weekday: "short", day: "2-digit", month: "short" };
	const formattedDate = currentDate.toLocaleDateString("en-US", options);

	const navigate = useNavigate();

	//getting random flight numbers
	const flights = ["p4-7153", "p4-7157", "p4-7155", "p4-7158"];
	const [flight1, setFlight1] = useState("");
	const [flight2, setFlight2] = useState("");

	const getRandomFlight = () => {
		const randomIndex = Math.floor(Math.random() * flights.length);
		return flights[randomIndex];
	};

	useEffect(() => {
		const flightA = getRandomFlight();
		const flightB = getRandomFlight();
		setFlight1(flightA);
		setFlight2(flightB);
	}, []);

	//redirecting the page on flight selection
	const handleClick = () => {
		navigate(`/flight-details/${flight1}`);
	};
	return (
		<>
			<div className="h-[18rem] py-10 bg-contain bg-center bg-slate-900">
				{/* style={{ backgroundImage: `url(.public/img/1.jpg)` }} */}
				<div className="text-center">
					<h1 className="text-white text-3xl mb-4">Select Outbound</h1>
				</div>
				<div>
					<div className="flex justify-around">
						<div className="items-center text-center">
							<h1 className="text-4xl text-white font-bold">
								{flyingFromSplit[1]}
							</h1>
							<h1 className="text-white font-bold text-2xl justify-end">
								{flyingFromSplit[0]}
							</h1>
						</div>
						<div>
							<h1 className="text-4xl text-white font-bold mt-3">TO</h1>
						</div>
						<div className="items-center text-center">
							<h1 className="text-4xl text-white font-bold">
								{flyingToSplit[1]}
							</h1>
							<h1 className="text-white font-bold text-2xl">
								{flyingToSplit[0]}
							</h1>
						</div>
					</div>
				</div>
				<div className=" my-5 text-center">
					<h1 className="text-white text-2xl">
						{`${formattedDate} | ${travelers} Traveller(s) | 2 Flights Available Today`}
					</h1>
				</div>
			</div>

			<div className="p-7 md:p-20">
				<nav>
					<div onClick={handleClick}>
						<div className="flex mt-3">
							<div className="border rounded border-gray-500 mb-4 p-3 w-full md:w-full lg:w-full hover:cursor-pointer hover:bg-gray-100">
								<div className="flex justify-around items-center gap-2">
									<div className="text-center items-center">
										<img
											src="/5.jpg"
											alt="flyASAP logo"
											className="align-top w-20"
										/>
										{<div className="text-xl">{flight1}</div>}
									</div>
									<div>
										<h1 className="text-2xl">12:20 - 13:30</h1>
										<h1 className="text-2xl">Non-stop 1hr 0m</h1>
									</div>
								</div>
							</div>
							<div className="bg-slate-900 rounded-l-none rounded-r-xl p-3 mb-4 w-48 md:w-64 lg:w-80 text-white text-3xl text-center hover:cursor-pointer hover:bg-slate-950">
								<h1 className="items-center justify-center pb-3">
									&#x20A6;{formattedNumber}.00
								</h1>
								<ion-icon name="arrow-down" size="small"></ion-icon>
							</div>
						</div>
					</div>

					<div onClick={handleClick}>
						<div className="flex">
							<div className="border rounded border-gray-500 mb-4 p-3 mx-auto w-full md:w-full lg:w-full hover:cursor-pointer hover:bg-gray-100">
								<div className="flex justify-around items-center gap-2">
									<div className="items-center text-center">
										<img
											src="/5.jpg"
											alt="flyASAP logo"
											className="align-top w-20"
										/>
										{<div className="text-xl">{flight2}</div>}
									</div>
									<div>
										<h1 className="text-2xl">17:55 - 18:55</h1>
										<h1 className="text-2xl">Non-stop 1hr 0m</h1>
									</div>
								</div>
							</div>

							<div
								onClick={() => navigate("flightDetails")}
								className="bg-slate-900 rounded-l-none rounded-r-xl p-3 mb-4 w-48 md:w-64 lg:w-80 text-white text-3xl text-center hover:cursor-pointer hover:bg-slate-950"
							>
								<h1 className="items-center justify-center pb-3">
									&#x20A6;{formattedNumber}.00
								</h1>
								<ion-icon name="arrow-down" size="small"></ion-icon>
							</div>
						</div>
					</div>
				</nav>
			</div>
			{/* <Outlet/> */}
		</>
	);
};

export default SelectOutbound;
