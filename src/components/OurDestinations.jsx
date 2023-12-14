// import { Link } from "react-router-dom";
// import Carousel from "./Carousel";
// import { v4 } from "uuid";

const OurDestinations = () => {
	// const images = ["/2.jpg", "/2.jpg", "/2.jpg", "/2.jpg"];
	return (
		<>
			<main className="h-[100dvh] bg-blue-900">
				{/* <div
					style={{
						backgroundImage: `url(/2.jpg)`,
					}}
					className="bg-cover md:h-[1/2] text-center md:text-2xl items-center justify-center bg-gray-100  font-semibold w-full bg-no-repeat bg-center relative flex flex-col after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:bg-opacity-70 showcase"
				>
					<div className="text-5xl md:mb-10 text-gray-200 font-bold text-center">
						Book a flight with us today!
					</div>

					<div>
						<h5 className="text-gray-300 md:mb-10 mt-3 text-2xl text-center">
							<b>We are ready to fly with you.</b>
						</h5>
					</div>

					<div className="mt-3 flex justify-center">
						<Link to="/login">
							<h6 className="text-white px-10 py-4 rounded text-2xl bg-blue-900 hover:bg-blue-950 duration-500 ease-in-out">
								GET STARTED
							</h6>
						</Link>
					</div>
				</div>
				{/* <div className="bg-gray-200 px-20 py-28 md:justify-between items-center rounded md:grid md:grid-cols-2"> */}
				{/* <div className="">
						<div className="">
							<h1 className=" mb-10 flex justify-center font-semibold text-4xl md:text-4xl">
								Our Destinations
							</h1>
						</div>
						<div className="md:flex">
							<div>
								<Carousel autoSlide={true} autoSlideInterval={2000}>
									{images.map((src) => (
										<img
											key={`${src + v4}`}
											src={src}
											width={100}
											height={100}
											className="w-auto h-auto"
										/>
									))}
								</Carousel>
							</div>
						</div>
					</div> */}
				{/* <div className="w-full justify-between items-center md:grid md:grid-cols-2 h-[1/2] py-24">
					<div className="px-10 md:w-full">
						<div>
							<Carousel autoSlide={true} autoSlideInterval={2000}>
								{images.map((src) => (
									<img
										key={`${src + v4}`}
										src={src}
										// width={100}
										height={100}
										className="bg-center mt-5 rounded h-[35rem] w-[200rem]"
									/>
								))}
							</Carousel>
						</div>
					</div>
					<div className="text-center pt-10 items-center md:p-20">
						<p className="text-gray text-2xl lg:text-3xl">
							We fly to 20 major cities in Nigeria at the lowest fares. We also
							connect you via our regional service to Accra, Banjul, Dakar,
							Douala Freetown and Monrovia while globally expandong our network
							with international routes such as Johannesburg and Mumbai.
						</p>
					</div>
				</div> */}
			</main>
		</>
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
