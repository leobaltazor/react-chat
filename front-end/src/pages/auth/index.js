import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';
import { TextField, Button, Snackbar } from '@material-ui/core';
import { connect } from "react-redux";
import { setAuthParams, okError } from "../../actions";
import Preloader from "../../component/preloader.js";
import { push } from "react-router-redux"
import { setInterval, setTimeout } from "timers";


class Auth extends Component {
	constructor(props) {
		super(props);
		this.state = {
			login: "",
			password: ""
		}
	}

	onInput = (val, key) => this.setState({ [key]: val });

	auth = e => {
		e.preventDefault();
		const { login, password } = this.state;
		this.props.setAuthParams(login, password);
		this.props.handleClose();
	}

	componentDidMount() {
		if (this.props.token) {
			this.props.redirect("/");
		}
	}

	componentWillReceiveProps(props) {
		if (props.errorMessage) {
			setTimeout(() => this.props.handleClose(), 5000);
		}
	}

	render() {
		const { login, password } = this.state;
		const { status } = this.props;

		return <section className="auth-form">
			{status ? <Preloader /> : ""}
			<TextField
				label="email"
				margin="normal"
				value={login}
				onChange={e => this.onInput(e.target.value, "login")}
			/>
			<TextField
				label="password"
				type="password"
				margin="normal"
				value={password}
				onChange={e => this.onInput(e.target.value, "password")}
			/>
			<Button variant="contained" color="primary" onClick={this.auth}>
				AUTH
      </Button>

			<Snackbar
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				open={!!this.props.errorMessage}
				autoHideDuration={6000}
				ContentProps={{
					'aria-describedby': 'message-id',
				}}
				message={<span id="message-id">{this.props.errorMessage}</span>}
				action={[
					<Button key="undo" color="secondary" size="small" onClick={this.props.handleClose}>
						OK
					</Button>]}
			/>
		</section>
	}
}

const mapStateToProps = state => ({
	status: state.auth.status,
	token: state.auth.token,
	errorMessage: state.auth.errorMsg
});

const mapDispatchToProps = dispatch => ({
	setAuthParams: (login, password) => dispatch(setAuthParams(login, password)),
	redirect: url => dispatch(push(url)),
	handleClose: () => dispatch(okError())
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
