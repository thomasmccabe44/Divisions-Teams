import React from "react";

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
							className=""
							placeholder="Team Name"
							value={this.state.input}
							onChange={this.handleChange}
						/>
						<button className="  " type="submit">
							Create Name
						</button>
					</form>
					<h1>{this.state.submit}</h1>
				</div>
			);
		} else {
			return (
				<div className="">
					<h1 className="">{this.state.submit}</h1>
				</div>
			);
		}
	}
}

export default NameBar;
