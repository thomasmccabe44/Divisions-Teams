import React from "react";
import faker from "faker";
import "../containers/App.css";

const Cards = ({ id, name, email }) => {
	return (
		<div className="bg-silver tc dib br3 pa3 ma2 grow bw2 shadow-5">
			<div>
				<img
					className="avatarImg"
					src={faker.image.avatar(id)}
					alt="Avatar"
				/>
			</div>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Cards;
