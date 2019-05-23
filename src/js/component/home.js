import React from "react";
import Nav from "./nav";
import Ad from "./ad";
import Footer from "./footer";
import Carousel from "./carousel";
import Cards from "./cards";
import Jumbotron from "./jumbotron";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div>
				<Nav />
				<Ad />
				<Carousel />
				<Cards />
				<Jumbotron />
				<Footer />
			</div>
		);
	}
}
