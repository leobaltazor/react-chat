import React, { Component } from "react";
import { CircularProgress } from '@material-ui/core';
class Preloader extends Component {
	render() {
		return (
			<div className="preloader">
				<CircularProgress
					size={100}
					color="primary" 
					className="loader" />
			</div>
		)
	}
}

export default Preloader;