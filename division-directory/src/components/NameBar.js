import React from "react";
import "tachyons";

class NameBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "",
			submit: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		this.setState({
			input: event.target.value,
		});
	}
	handleSubmit(event) {
		event.preventDefault();
		this.setState({
			submit: this.state.input,
		});
	}
	render() {
		const emptyInput = this.state.submit;
		if (emptyInput === "") {
			return (
				<div className="pa2">
					<form onSubmit={this.handleSubmit}>
						<input
							type="text"
							className="pa3 ba br3 b--silver bw2 bg-white tc"
							placeholder="Team Name"
							value={this.state.input}
							onChange={this.handleChange}
						/>
						<button
							className="pa3 ba br3 b--silver bw2 bg-white f-gray tc hover-bg-green hover-white pointer"
							type="submit"
						>
							Create Name
						</button>
					</form>
					<h1>{this.state.submit}</h1>
				</div>
			);
		} else {
			return (
				<div className="pa2">
					<h1 className="pa3">{this.state.submit}</h1>
				</div>
			);
		}
	}
}

export default NameBar;
