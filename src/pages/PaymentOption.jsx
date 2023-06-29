import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const PaymentOption = () => {
	const user = useSelector((state) => state.users.value);
	const adult = user[user.length - 1].adult;
	const child = user[user.length - 1].child;
	const infant = user[user.length - 1].infant;
	const childNumber = parseInt(child);
	const infantNumber = parseInt(infant);
	const travelers = adult + childNumber + infantNumber;
	const price = 66800 * travelers;

	const [checked, setChecked] = useState(false);

	const handleCheckBox = () => {
		setChecked(!checked);
	};

	return (
		<>
			<div className="bg-slate-900 h-[10rem] p-10 bg-center">
				<h1 className="text-white text-5xl font-semibold">Payment</h1>
			</div>
			<div className="rounded-xl shadow m-10">
				<div className="items-center text-center py-4 space-y-4">
					<h1 className="text-3xl">Total Payable</h1>
					<h1 className="text-4xl">&#x20A6;{price}.00</h1>
				</div>
				<hr />
				<div className="p-5 flex gap-4">
					<input
						onChange={handleCheckBox}
						type="checkbox"
						checked={checked}
						name="policy"
						id="policy"
					/>
					<p className="text-xl text-gray-500">
						I have read and agree to the{" "}
						<span className="text-red-400">Terms and Condition</span> and{" "}
						<span className="text-red-400">Privacy Policy.</span>
					</p>
				</div>
			</div>

			<div className="rounded-xl shadow m-10">
				<div className="pb-4 pt-3 space-y-4 px-5">
					<h1 className="text-3xl">Payment Options</h1>
				</div>
				<hr />
				{checked && (
					<Link to={"/paystack"}>
						<div className="px-5 py-4 flex gap-4 cursor-pointer hover:bg-gray-200 items-center">
							<div>
								<ion-icon name="card-outline" size="large"></ion-icon>
							</div>
							<div>
								<h1 className="text-3xl">Credit/Debit Card</h1>
								<p className="text-xl text-gray-500">
									You can use all type of cards
								</p>
							</div>
						</div>
					</Link>
				)}
				{checked && (
					<Link to={"/bookFlight"}>
						<div className="px-5 py-[2rem] flex gap-4 cursor-pointer hover:bg-gray-200 items-center">
							<div>
								<ion-icon name="bookmark-outline" size="large"></ion-icon>
							</div>
							<div>
								<h1 className="text-3xl">Book on hold</h1>
							</div>
						</div>
					</Link>
				)}
			</div>
		</>
	);
};

export default PaymentOption;
