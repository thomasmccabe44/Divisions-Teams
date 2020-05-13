import React from "react";
import Cards from "../components/Cards";
import "../containers/App.css";

const CardList = ({ avatars }) => {
	return (
		<div className="cardListLayout">
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
