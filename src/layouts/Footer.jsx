import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<footer>
				<div className="content bg-slate-900">
					<div className="left box">
						<div className="upper">
							<div className="topic px-10">About Us</div>
							<p className="text-2xl px-10">
								We are determined to provide efficient centralized flight
								reservation system that gives you the best services.
							</p>
						</div>

						<div className="lower px-10">
							<div className="topic">Contact Us</div>
							<div className="text-2xl">
								<Link to="+2349063646331">+2349063646331</Link>
							</div>

							<div className="text-2xl items-center">
								<Link to="https://www.gmail.com/paparazzip8">
									paparazzip8@gmail.com
								</Link>
							</div>
						</div>
					</div>

					<div className="middle box">
						<div className="topic px-10">Our Services</div>
						<div className="text-2xl px-10">
							<Link to="#">Chatter Services</Link>
						</div>
						<div className="text-2xl px-10">
							<Link to="#">Cross Travels</Link>
						</div>
						<div className="text-2xl px-10">
							<Link to="#">Inflight Magazines</Link>
						</div>
						<div className="right box px-4 lg:pt-8">
							<div className="media-icons flex gap-10">
								<div>
									<a href="#">
										<i className="bx bxl-twitter text-6xl"></i>
									</a>
								</div>
								<div>
									<a href="#">
										<i className="bx bxl-facebook text-6xl"></i>
									</a>
								</div>
								<div>
									<a href="linkedin.com/in/kelechukwu-ikechukwu-9b7615225">
										<i className="bx bxl-linkedin text-6xl"></i>
									</a>
								</div>
								<div>
									<a href="#">
										<i className="bx bxl-instagram text-6xl"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="bottom p-4 py-10">
						<p className="flex justify-center text-center text-2xl font-semibold">
							Copyright &copy; <span id="year"></span>{" "}
							<Link to="/">Kelechukwu</Link>
						</p>
					</div>
				</div>
			</footer>
		</>
	);
};
export default Footer;
