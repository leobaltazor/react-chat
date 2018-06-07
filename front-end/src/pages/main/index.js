import React, { Component } from "react";
import { push } from "react-router-redux"
import { connect } from "react-redux";
import { Button } from '@material-ui/core';
import { logout } from "../../actions";

class Profiles extends Component {

	componentWillReceiveProps(props) {
		if (!props.token) {
			this.props.redirect("/auth");
		} else {
			localStorage.setItem("token", this.props.token);
		}
	}

	componentDidMount() {
		if (!this.props.token) {
			this.props.redirect("/auth");
		} else {
			localStorage.setItem("token", this.props.token);
		}
	}

	render() {
		return <div>Profile

			<Button onClick={this.props.logout}>Logout</Button>
		</div>
	}
}

const mapStateToProps = state => ({
	token: state.auth.token
});

const mapDisptchToProps = dispatch => {
	return {
		redirect: url => dispatch(push(url)),
		logout: () => dispatch(logout())
	}
}

export default connect(mapStateToProps, mapDisptchToProps)(Profiles);