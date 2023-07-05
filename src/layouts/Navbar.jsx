import React, { useState } from "react";

import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
// import NewsLetter from "../components/NewsLetter";
// import OurDestinations from "../components/OurDestinations";
// import BookFlightForm from "../components/BookFlightForm";
// import PeaceAdvantage from "../components/PeaceAdvantage";

const NavBar = () => {
	const menuData = [
		{
			id: 1,
			path: "/",
			name: "Flights",
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

	return (
		<>
			<header>
				<nav>
					<div>
						<div className="md:flex md:px-10 justify-between items-center">
							<div className="flex justify-between md:items-center p-4">
								<div className="ml-10 md:items-center cursor-pointer pt-2 md:py-0">
									<Link
										to="/"
										onClick={() => {
											!open ? setOpen(!open) : open;
										}}
									>
										{/* logo */}
										<img
											src="/5.jpg"
											alt="flyASAP logo"
											className="d-inline-block align-top w-16"
										/>
										<span className="text-green-900 text-4xl font-bold">
											fly
										</span>
										<span className="text-blue-900 text-4xl font-bold">
											ASAP
										</span>
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

									<button className="nav-buttons md:ml-10 ml-10" to="/login">
										<h6 className="text-2xl font-semibold">Get Started</h6>
									</button>
								</ul>
							</div>
						</div>
					</div>
				</nav>
			</header>

			<main>
				<Outlet />
			</main>
			<Footer />
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
