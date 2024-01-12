import React from "react";

import Header from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";
import MyCard from "./cards.jsx";

const Home = () => {
	return (
		<div className="text-center">
			<Header />
			<Jumbotron 
				title ="Welcome to this nice page designed by 3 amazing devs"
				description="Pellentesque non erat ac nisl pharetra fermentum ac et quam. Quisque vitae odio eu orci eleifend placerat eu id tortor. Proin nec est eget velit suscipit euismod. Integer non ultrices lacus. Ut ullamcorper convallis ultrices. Pellentesque dignissim malesuada ex sit amet ornare. Cras purus est, tincidunt id feugiat sed, ullamcorper eu est. Nullam vulputate odio mi, vitae imperdiet justo euismod eget. Pellentesque mollis pellentesque purus sit amet tristique.
				Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur, adipisci velit...
				There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.."
				buttonLabel="Click here if you want a free JavaScript ebook"
				buttonURL="https://eloquentjavascript.net/"
				/>
			<MyCard />
			<Footer />
		</div>
	);
};

export default Home;