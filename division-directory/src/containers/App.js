import React, { Component } from "react";
import CardList from "../components/CardList";
import NameBar from "../components/NameBar";
import SearchBar from "../components/SearchBar";
import CreateMember from "../components/CreateMember";
import "tachyons";
import "../containers/App.css";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

class App extends Component {
	constructor() {
		super();
		this.state = {
			avatars: [],
			searchfield: "",
			namefield: "",
		};
	}

	// Mounting

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ avatars: users }));
	}

	// OnChange

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	};

	render() {
		const { avatars, searchfield } = this.state;
		const filteredAvatars = avatars.filter((avatar) => {
			return avatar.name
				.toLowerCase()
				.includes(searchfield.toLowerCase());
		});
		return !avatars.length ? (
			<h1 className="tc">Loading</h1>
		) : (
			<div className="tc">
				<NameBar />
				<div className="fl w-100">
					<SearchBar searchChange={this.onSearchChange} />
					<CreateMember />
				</div>
				<Scroll>
					<ErrorBoundry>
						<CardList avatars={filteredAvatars} />
					</ErrorBoundry>
				</Scroll>
			</div>
		);
	}
}

export default App;
