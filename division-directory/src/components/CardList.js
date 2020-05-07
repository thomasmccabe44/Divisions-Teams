import React from "react";
import Cards from "../components/Cards";

const CardList = ({ avatars }) => {
	return (
		<div>
			{avatars.map((user, i) => {
				return (
					<Cards
						key={i}
						id={avatars[i].id}
						name={avatars[i].name}
						email={avatars[i].email}
					/>
				);
			})}
		</div>
	);
};

export default CardList;
