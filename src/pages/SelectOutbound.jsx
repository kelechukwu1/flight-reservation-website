import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const SelectOutbound = () => {
	const user = useSelector((state) => state.users.value);
	console.log(user);
	// const flightType = (user[user.length - 1].flightType);
	const flyingFrom = user[user.length - 1].flyingFrom;
	const flyingTo = user[user.length - 1].flyingTo;
	const adult = user[user.length - 1].adult;
	const child = user[user.length - 1].child;
	const infant = user[user.length - 1].infant;
	const adultNumber = parseInt(adult);
	const childNumber = parseInt(child);
	const infantNumber = parseInt(infant);
	const travelers = adultNumber + childNumber + infantNumber;
	const price = 66800 * travelers;
	const date = user[user.length - 1].departureDate;
	//split the dates and airport abbreviations
	const dateSplit = date.split("-");
	const flyingFromSplit = flyingFrom.split(" ");
	const flyingToSplit = flyingTo.split(" ");
	const splitedDate = Number(dateSplit[2]);
	// const splitedMonth = dateSplit[1]

	//get the current date
	let currentDate = new Date();
	const options = { month: "short" };
	const month = currentDate.toLocaleString("en-US", options);
	const navigate = useNavigate();
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
						{`${month} ${splitedDate} | ${travelers} Traveller(s) | 2 Flights`}
					</h1>
				</div>
			</div>

			<div className="p-7 md:p-20">
				<nav>
					<Link to="/flightDetails">
						<div className="flex mt-3">
							<div className="border rounded border-gray-500 mb-4 p-3 w-full md:w-full lg:w-full hover:cursor-pointer hover:bg-gray-100">
								<div className="flex justify-around items-center gap-2">
									<div className="text-center items-center">
										<img
											src="./public/img/5.jpg"
											alt="flyASAP logo"
											className="align-top w-20"
										/>
										<span className="text-2xl">p4-7153</span>
									</div>
									<div>
										<h1 className="text-2xl">12:20 - 13:30</h1>
										<h1 className="text-2xl">Non-stop 1hr 0m</h1>
									</div>
								</div>
							</div>
							<div className="bg-slate-900 rounded-l-none rounded-r-xl p-3 mb-4 w-48 md:w-64 lg:w-80 text-white text-3xl text-center hover:cursor-pointer hover:bg-slate-950">
								<h1 className="items-center justify-center pb-3">
									&#x20A6;{price}.00
								</h1>
								<ion-icon name="arrow-down" size="small"></ion-icon>
							</div>
						</div>
					</Link>

					<Link to="/flightDetails">
						<div className="flex">
							<div className="border rounded border-gray-500 mb-4 p-3 mx-auto w-full md:w-full lg:w-full hover:cursor-pointer hover:bg-gray-100">
								<div className="flex justify-around items-center gap-2">
									<div className="items-center text-center">
										<img
											src="./public/img/5.jpg"
											alt="flyASAP logo"
											className="align-top w-20"
										/>
										<span className="text-2xl">p4-7157</span>
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
									&#x20A6;{price}.00
								</h1>
								<ion-icon name="arrow-down" size="small"></ion-icon>
							</div>
						</div>
					</Link>
				</nav>
			</div>
			{/* <Outlet/> */}
		</>
	);
};

export default SelectOutbound;
