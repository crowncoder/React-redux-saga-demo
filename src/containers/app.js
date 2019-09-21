import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import winResize from "util/windowResize";
import PropTypes from "prop-types";
import appStyle from "../styles/app.scss";
class App extends Component {
	constructor(props) {
		super(props);
		new winResize();
	}

	componentDidMount() {
		sessionStorage.setItem("loginStatus", "false");
	}

	render() {
		return (
			<div id="view" className={appStyle.view}>
				{this.props.children}
			</div>
		);
	}
}

App.propTypes = {
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	const props = {};
	return props;
}
function mapDispatchToProps(dispatch) {
	const actions = {};
	const actionMap = { actions: bindActionCreators(actions, dispatch) };
	return actionMap;
}

export default hot(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(App)
);
