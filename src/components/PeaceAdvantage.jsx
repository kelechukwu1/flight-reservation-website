const PeaceAdvantage = () => {
	return (
		<div className="bg-gray-100 px-10 py-20 md:justify-around items-center">
			<div className="w-full justify-between items-center md:grid md:grid-cols-2 lg:py-60">
				<div>
					<div className="mb-10 md:mb-0 md:ml-[5rem]">
						<h1 className="flex text-center justify-center font-semibold text-4xl px-3 md:text-4xl">
							Peace Advantage
						</h1>
					</div>

					<div className="text-center md:p-20 px-10">
						<p className="text-gray text-2xl lg:text-3xl lg:px-5">
							We fly to 20 major cities in Nigeria at the lowest fares. We also
							connect you via our regional service to Accra, Banjul, Dakar,
							Douala Freetown and Monrovia while globally expandong our network
							with international routes such as Johannesburg and Mumbai.
						</p>
					</div>
				</div>

				<div className="px-10 md:w-full">
					<div>
						<img src="/2.jpg" className="w-full bg-center mt-5 rounded" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default PeaceAdvantage;
