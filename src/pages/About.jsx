import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const About = () => {
	return (
		<div>
			<div className="m-2 px-4 py-10">
				<h1 className="text-3xl font-bold">Who We Are</h1>
				<h1 className="text-2xl">
					We are determined to provide efficient centralized flight reservation
					system that gives you the best services.
				</h1>
			</div>
			<nav>
				<div className="flex justify-center p-3 gap-5 py-16">
					<NavLink
						to="vision"
						className="text-3xl text-center border-2 border-blue-950 rounded px-4 py-1 hover:border-slate-950"
					>
						Vision
					</NavLink>
					<NavLink
						to="contact"
						className="text-3xl border-2 border-blue-950 rounded px-4 py-1 hover:border-slate-950"
					>
						Contact
					</NavLink>
				</div>
			</nav>
			<Outlet />
		</div>
	);
};

export default About;
