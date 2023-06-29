import React from "react";
import Carousel from "./Carousel";

const OurDestinations = () => {
	const images = [
		"./public/img/3.jpg",
		"./public/img/4.jpg",
		"./public/img/3.jpg",
		"./public/img/4.jpg",
	];
	return (
		<div className="bg-gray-200 p-20 md:justify-between items-center rounded md:grid md:grid-cols-2">
			{/* <div className="flex"> */}
			<div className="md:ml-[5rem]">
				<div className="md:ml-[5rem]">
					<h1 className="font-semibold text-2xl p-3 md:text-4xl">
						Our Destinations
					</h1>
				</div>
				<div className="md:flex">
					<div className="max-w-lg">
						<Carousel autoSlide={true} autoSlideInterval={2000}>
							{images.map((src) => (
								<img src={src} />
							))}
						</Carousel>
					</div>
				</div>
			</div>

			<div className="text-center pt-10 items-center md:p-20">
				<p className="text-gray text-2xl lg:text-3xl">
					We fly to 20 major cities in Nigeria at the lowest fares. We also
					connect you via our regional service to Accra, Banjul, Dakar, Douala
					Freetown and Monrovia while globally expandong our network with
					international routes such as Johannesburg and Mumbai.
				</p>
			</div>
		</div>
	);
};

export default OurDestinations;

{
	/* <>
              {images.map((item) => (
                <img src={item} className="w-full h-[440px] object-cover" />

              ))}
            </> */
}

{
	/* <div className="max-w-[1400px] w-full py-10 px-4 relative justify-center">
                  <div
                    style={{ backgroundImage: `url(${item})` }}
                    className="md:w-[400px] h-96 md:h-[400px] rounded-2xl bg-center bg-cover bg-no-repeat duration-500"
                  ></div>
                </div> */
}
