import React from "react";
import "tachyons";

const SearchBar = ({ searchfield, searchChange }) => {
	return (
		<div>
			<input
				className="fl w-25 pa3 ba br3 b--silver bw2 bg-white tc"
				type="search"
				placeholder="Search Directory"
				value={searchfield}
				onChange={searchChange}
			/>
		</div>
	);
};

export default SearchBar;
