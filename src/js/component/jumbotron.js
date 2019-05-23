import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export default class Carousel extends React.Component {
	render() {
		return (
			<div>
				<div className="jumbotron jumbotron-fluid ml-10">
					<div className="container">
						<h1 className="display-4">Fluid jumbotron</h1>
						<p className="lead">
							This is a modified jumbotron that occupies the
							entire horizontal space of its parent.
						</p>
					</div>
				</div>
			</div>
		);
	}
}
