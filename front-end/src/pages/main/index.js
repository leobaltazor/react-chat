import React, { Component } from "react";
import { push } from "react-router-redux"
import { connect } from "react-redux";

class Profiles extends Component {
	componentDidMount() {
		if (!this.props.token) {
			this.props.redirect("/auth");
		}
	}


	render() {
		return <div>Profile</div>
	}
}

const mapStateToProps = state => ({
	token: state.auth.token
});

const mapDisptchToProps = dispatch => {
	return {
		redirect: url => dispatch(push(url))
	}
}

export default connect(mapStateToProps, mapDisptchToProps)(Profiles);