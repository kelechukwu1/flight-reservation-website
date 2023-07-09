import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [signupErr, setSignupErr] = useState("");

	const SignIn = async () => {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			navigate("/FlightForm");
			console.log(email, "has been created");
			// auth?.currentUser.email === email
		} catch (err) {
			setSignupErr(err.message);
		}
	};

	useEffect(() => {
		let timeoutId;

		if (signupErr) {
			timeoutId = setTimeout(() => {
				setSignupErr("");
			}, 3000);
		}

		return () => {
			clearTimeout(timeoutId);
		};
	}, [signupErr]);

	return (
		<section className="bg-gray-200 min-h-[50rem] flex items-center justify-center">
			<div className="bg-white flex rounded-2xl shadow-lg w-[30rem] md:w-full md:mx-20 lg:mx-40 p-3 my-5 items-center">
				<div className="w-full md:w-1/2 px-12 py-4 text-center items-center">
					<div className="font-bold text-3xl md:text-5xl text-slate-900">
						Sign Up
					</div>
					<div className="mt-4 text-slate-900 text-xl md:text-2xl">
						Register and enjoy our quality services.
					</div>

					<form className="flex flex-col gap-4">
						<input
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							className="p-3 md:text-2xl mt-8 rounded border text-xl"
							type="email"
							name="email"
							placeholder="Email"
						/>
						<div>
							<input
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								className="w-full md:text-2xl p-3 rounded border text-xl"
								type="password"
								name="password"
								placeholder="Password"
							/>
							{/* eye svg logo here */}
						</div>
						<Link onClick={SignIn}>
							<div className="bg-slate-900 text-white md:text-2xl text-xl font-semibold py-3 rounded hover:scale-105 duration-300">
								Sign Up
							</div>
						</Link>
						{signupErr && (
							<div className="text-red-500 text-xl">{signupErr}</div>
						)}
					</form>
					<div className="grid grid-cols-3 items-center justify-center mt-10 text-gray-500">
						<hr className="border-gray-500" />
						<div className="text-center text-xl">OR</div>
						<hr className="border-gray-500" />
					</div>
					<div>
						<Link to={"/FlightForm"}>
							<div className="w-full py-3 bg-slate-200 text-xl md:text-2xl rounded border justify-center items-center mt-5 hover:scale-105 duration-300">
								{/* google svg logo here */}
								SignUp with Google
							</div>
						</Link>
					</div>

					<div className="flex text-xl md:text-2xl justify-between items-center mt-5">
						<div>Existing user?</div>
						<Link to={"/login"}>
							<div className="py-2 md:text-2xl px-4 bg-slate-200 border rounded hover:scale-110 duration-300">
								Login
							</div>
						</Link>
					</div>
				</div>
				{/* image div */}
				<div className="w-1/2 md:block hidden">
					<img className="rounded-2xl h-full" src="/1.png" alt="login photo" />
				</div>
			</div>
		</section>
	);
};

export default SignUp;
