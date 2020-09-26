import React from "react";
import { StyledImageCard } from "./StyledImageCard";

export default function ImageCard(props) {
	return (
		<StyledImageCard>
			<img className="ImageStyles" src={props.image} alt="Loading"></img>
		</StyledImageCard>
	);
}
