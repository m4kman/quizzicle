import React from "react";
import Option from "./Option";

export default function Question(props) {
	return (
		<div className="question-container">
			<h1 className="question">{props.question}</h1>

			<Option options={props.options} />
		</div>
	);
}
