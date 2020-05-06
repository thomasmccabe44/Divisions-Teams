import React from "react";

const Scroll = (props) => {
	return (
		<div
			style={{
				overflowY: "scroll",
				border: "3px solid white",
				borderRadius: "5px",
				height: "80vh",
			}}
		>
			{props.children}
		</div>
	);
};

export default Scroll;
