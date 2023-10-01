import React, { useState } from "react";

import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";

const NavBar = () => {
	const menuData = [
		{
			id: 1,
			path: "/",
			name: "Home",
		},
		{
			id: 2,
			path: "/covid",
			name: "Covid-19 Info",
		},
		{
			id: 3,
			path: "/about",
			name: "About",
		},
	];
	const [open, setOpen] = useState(true);

	// Get the current location using the useLocation hook
	const location = useLocation();

	// Define an array of paths where you want to hide the footer
	const hideFooter = ["/signUp", "/login"];

	// Check if the current location's pathname is in the hideFooter array
	const shouldHideFooter = hideFooter.includes(location.pathname);

	return (
		<>
			<header>
				<nav>
					<div>
						<div className="md:flex md:px-10 justify-between items-center">
							<div className="flex justify-between md:items-center p-4">
								<div className="ml-10 md:items-center cursor-pointer pt-2 md:py-0">
									<Link
										className="flex"
										to="/"
										onClick={() => {
											!open ? setOpen(!open) : open;
										}}
									>
										<div>
											{/* logo */}
											<img
												src="/5.jpg"
												alt="flyASAP logo"
												className="align-top w-16"
											/>
										</div>
										<div>
											<span className="text-green-900 text-4xl font-bold">
												fly
											</span>
											<span className="text-blue-900 text-4xl font-bold">
												ASAP
											</span>
										</div>
									</Link>
								</div>

								<div
									className="md:hidden cursor-pointer"
									onClick={() => setOpen(!open)}
								>
									<ion-icon
										name={open ? "menu" : "close"}
										size="large"
									></ion-icon>
								</div>
							</div>

							{/* Nav Links */}
							{/* top-20 opacity-100 absolute md:static*/}
							<div className="md:flex">
								<ul
									className={`md:flex md:items-center md:justify-between pb-12 md:pb-0 bg-white md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
										open ? "hidden" : "top-[-490px] md:opacity-100 opacity-100"
									}`}
								>
									<div className="md:flex">
										{menuData.map((item) => (
											<li key={item.id} className="md:py-0 my-7">
												<Link
													to={item.path}
													// key={item.id}
													className="navlink"
													onClick={() => setOpen(!open)}
												>
													{item.name}
												</Link>
											</li>
										))}
									</div>

									<Link
										onClick={() => setOpen(!open)}
										className="nav-buttons md:ml-10 ml-10"
										to="/login"
									>
										<h6 className="text-2xl font-semibold">Get Started</h6>
									</Link>
								</ul>
							</div>
						</div>
					</div>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
			{/* Conditionally render the footer */}
			{!shouldHideFooter && <Footer />}
		</>
	);
};
export default NavBar;
{
	/* <BookFlightForm />
<OurDestinations />
<PeaceAdvantage />
<Vision />
<NewsLetter /> */
}
