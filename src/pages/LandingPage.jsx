import React from "react";
import BookFlightForm from "../components/BookFlightForm";
import OurDestinations from "../components/OurDestinations";
import PeaceAdvantage from "../components/PeaceAdvantage";
import NewsLetter from "../components/NewsLetter";

const LandingPage = () => {
	return (
		<>
			<BookFlightForm />
			<OurDestinations />
			<PeaceAdvantage />
			<NewsLetter />
		</>
	);
};

export default LandingPage;
