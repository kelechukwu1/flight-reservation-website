import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div>
			<footer>
				<div className="content bg-slate-900">
					<div className="left box">
						<div className="upper">
							<div className="topic px-10">About Us</div>
							<p className="text-2xl px-10 font-semibold">
								We are determined to provide efficient centralized flight
								reservation system that gives you the best services.
							</p>
						</div>

						<div className="lower px-10">
							<div className="topic">Contact Us</div>
							<div className="phone">
								<Link to="+2349063646331">
									<i className="bx bx-phone text-2xl font-semibold">
										+2349063646331
									</i>
								</Link>
							</div>

							<div className="email">
								<Link to="https://www.gmail.com/paparazzip8@gmail.com">
									<i className="bx bx-envelope text-2xl items-center font-semibold">
										paparazzip8@gmail.com
									</i>
								</Link>
							</div>
						</div>
					</div>

					<div className="middle box">
						<div className="topic px-10">Our Services</div>
						<div className="text-2xl px-10 font-semibold">
							<Link to="#">Chatter Services</Link>
						</div>
						<div className="text-2xl px-10 font-semibold">
							<Link to="#">Cross Travels</Link>
						</div>
						<div className="text-2xl px-10 font-semibold">
							<Link to="#">Inflight Magazines</Link>
						</div>
					</div>

					<div className="right box px-10">
						<div className="topic">Subscribe Us</div>
						<form>
							<input type="text" placeholder="Enter email address" />
							<input type="submit" name="" value="send" />

							<div className="media-icons flex gap-4">
								<div>
									<a href="#">
										<i className="bx bxl-facebook text-6xl"></i>
									</a>
								</div>
								<div>
									<a href="#">
										<i className="bx bxl-whatsapp text-6xl"></i>
									</a>
								</div>
								<div>
									<a href="#">
										<i className="bx bxl-linkedin text-6xl"></i>
									</a>
								</div>
								<div>
									<a href="#">
										<i className="bx bxl-instagram text-6xl"></i>
									</a>
								</div>
								<div>
									<a href="#">
										<i className="bx bxl-slack text-6xl"></i>
									</a>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div className="bottom p-4">
					<p className="justify-center text-center text-2xl font-semibold">
						Copyright &copy; <span id="year"></span>{" "}
						<Link to="/">Kelechukwu</Link> All Rights Reserved.
					</p>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
