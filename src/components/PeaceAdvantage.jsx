import React from "react";

const PeaceAdvantage = () => {
	return (
		<div className="bg-gray-100 p-10 md:justify-around items-center">
			<div className="w-full justify-between md:grid md:grid-cols-2">
				<div>
					<div className="md:ml-[5rem]">
						<h1 className="font-semibold text-4xl mb-3 px-3 md:text-4xl">
							Peace Advantage
						</h1>
					</div>

					<div className="text-center md:p-20 px-3">
						<p className="text-gray text-2xl lg:text-3xl lg:px-5">
							We fly to 20 major cities in Nigeria at the lowest fares. We also
							connect you via our regional service to Accra, Banjul, Dakar,
							Douala Freetown and Monrovia while globally expandong our network
							with international routes such as Johannesburg and Mumbai.
						</p>
					</div>
				</div>

				<div className="max-w-xl md:ml-[5rem] md:px-10 md:w-full">
					<div>
						<img src="/2.jpg" className="w-full bg-center mt-5 rounded" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default PeaceAdvantage;
