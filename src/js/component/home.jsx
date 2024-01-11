import React from "react";

import Header from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";
import MyCard from "./cards.jsx";

const Home = () => {
	return (
		<div className="text-center">
			<Header />
			<Jumbotron />
			<MyCard />
			<Footer />
		</div>
	);
};

export default Home;