import React from "react";
//create your first component
export default class Ad extends React.Component {
	render() {
		return (
			<div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
				<img
					src="https://sportsteamhistory.com/wp-content/uploads/2016/12/Miami-Heat-Logo-600x418.jpeg"
					className="img-fluid"
					alt="Responsive image"
				/>
			</div>
		);
	}
}
