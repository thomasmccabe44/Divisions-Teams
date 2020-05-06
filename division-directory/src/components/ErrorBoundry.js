import React, { Component } from "react";
import { render } from "react-dom";

class ErrorBoundry extends Component {
	constructor(props) {
		super();
		this.state = {
			hasError: false,
		};
	}

	componentDidCatch(error, info) {
		this.ListeningStateChangedEvent({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <h1>Oooops. That is not good</h1>;
		}
		return this.props.children;
	}
}

export default ErrorBoundry;
