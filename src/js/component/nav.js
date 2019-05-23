import React from "react";
//create your first component
export default class Nav extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light">
				<h1>
					<a className="navbar-brand">sTillSport |</a>
				</h1>
				<form className="form-inline">
					<input
						className="form-control mr-sm-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
					/>
					<button
						className="btn btn-outline-success my-2 my-sm-0"
						type="submit">
						Search
					</button>
				</form>
			</nav>
		);
	}
}
