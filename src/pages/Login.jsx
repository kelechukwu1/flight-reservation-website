import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<section className="bg-gray-100 min-h-[50rem] flex items-center justify-center">
			<div className="bg-white flex rounded-2xl shadow-lg w-[30rem] md:w-full md:mx-20 lg:mx-40 p-3 my-5 items-center">
				<div className="w-full md:w-1/2 px-12 py-4 text-center items-center">
					<div className="font-bold text-3xl md:text-5xl text-slate-900">
						Login
					</div>
					<div className="mt-4 text-slate-900 text-xl md:text-2xl">
						If you're already a member, easily log in
					</div>

					<form className="flex flex-col gap-4">
						<input
							className="p-3 md:text-2xl mt-8 rounded border text-xl"
							type="email"
							name="email"
							placeholder="Email"
						/>
						<div>
							<input
								className="w-full md:text-2xl p-3 rounded border text-xl"
								type="password"
								name="password"
								placeholder="Password"
							/>
							{/* eye svg logo here */}
						</div>
						<Link to={"/FlightForm"}>
							<div className="bg-slate-900 text-white md:text-2xl text-xl font-semibold py-3 rounded hover:scale-105 duration-300">
								Login
							</div>
						</Link>
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
								Login with Google
							</div>
						</Link>
					</div>
					<Link to={""}>
						<div className="text-xl md:text-2xl mt-3 border-b py-6 border-gray-500">
							forgot your password?
						</div>
					</Link>
					<div className="flex text-xl md:text-2xl justify-between items-center mt-3">
						<div>Don't have an account?</div>
						<Link to={"/signUp"}>
							<div className="py-2 md:text-2xl px-4 bg-slate-200 border rounded hover:scale-110 duration-300">
								Register
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

export default Login;