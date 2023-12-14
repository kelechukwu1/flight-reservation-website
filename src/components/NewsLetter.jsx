import React from "react";

const NewsLetter = () => {
	return (
		<div className=" bg-gray-100 w-full rounded text-center p-10">
			<div className="bg-gray-50 rounded p-10 lg:py-60">
				<h1 className="text-3xl md:text-6xl font-bold md:pb-5 lg:mb-10">
					Like travel deals?
				</h1>
				<p className="text-grey md:text-3xl text-2xl pt-3 md:pt-0 lg:mb-20">
					Enter your email and we'll send them your way.
				</p>
				<div className="md:flex  md:px-52 mt-5 justify-center lg:mb-20">
					<div className=" rounded text-white md:mr-3">
						<input
							className="text-2xl py-9 lg:px-32 px-3 my-2 w-full md:w-[30rem] lg:w-[50rem] border border-gray-400 focus:outline-none text-gray-500"
							type="text"
							placeholder="Enter your email address."
						/>
					</div>
					<div>
						<button className="py-9 px-32 text-white w-full my-2 text-3xl md:px-14 hover:bg-slate-950  bg-slate-900 rounded transition ease-in-out duration-500">
							Subscribe
						</button>
					</div>
				</div>
				<div className="xl:px-48 px-[2.5rem] mt-4">
					<p className="text-grey text-2xl md:text-2xl md:p-12 md:px-[12rem] md:pt-0">
						Your privacy is important to us, so we'll never spam you or share
						your info with third parties. Take a look at our privacy policy. You
						can unsubscribe at any time.
					</p>
				</div>
			</div>
		</div>
	);
};

export default NewsLetter;
