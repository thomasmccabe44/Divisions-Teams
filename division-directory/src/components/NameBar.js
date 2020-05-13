import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../containers/App.css";

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
				<div className="mt-3">
					<form className="m-3" onSubmit={this.handleSubmit}>
						<Container>
							<Row className="justify-content-md-center">
								<Col xs={6} md={4} className="">
									<input
										type="text"
										className="form-control text-center"
										placeholder="Team Name"
										value={this.state.input}
										onChange={this.handleChange}
									/>
								</Col>
								<Button variant="secondary" type="submit">
									Create Name
								</Button>
							</Row>
						</Container>
					</form>
				</div>
			);
		} else {
			return (
				<div className="mt-3">
					<h1 className="">{this.state.submit}</h1>
				</div>
			);
		}
	}
}

export default NameBar;
