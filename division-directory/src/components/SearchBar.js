import React from "react";

const SearchBar = ({ searchfield, searchChange }) => {
	return (
		<div>
			<input
				className=""
				type="search"
				placeholder="Search Directory"
				value={searchfield}
				onChange={searchChange}
			/>
		</div>
	);
};

export default SearchBar;
