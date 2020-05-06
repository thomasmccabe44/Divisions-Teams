import React from "react";
import "tachyons";

const SearchBar = ({ searchfield, searchChange }) => {
	return (
		<div className="pa2">
			<input
				className="pa3 ba br3 b--dark-green bw2 bg-light-blue tc"
				type="search"
				placeholder="Search Directory"
				value={searchfield}
				onChange={searchChange}
			/>
		</div>
	);
};

export default SearchBar;
