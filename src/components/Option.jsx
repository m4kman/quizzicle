import React from "react";

export default function Option(props) {
	const [selected, setSelected] = React.useState({ id: "", answer: "" });

	function handleClick(e, id, option, qid) {
		setSelected({ id: id, answer: option });
		props.change({ id: id, choice: option, qid: qid });
	}

	return (
		<div className="choices-container">
			<label
				className={
					props.checked && props.correct === props.options[0].option
						? "correct selected option"
						: selected.answer !== props.correct &&
						  props.checked &&
						  selected.id === props.options[0].id
						? "wrong selected option"
						: selected.id === props.options[0].id
						? "selected option"
						: "option"
				}
			>
				<input
					onClick={(e) =>
						handleClick(
							e,
							props.options[0].id,
							props.options[0].option,
							props.qid
						)
					}
					type="radio"
					id={props.options[0].id}
					value={props.options[0].id}
					name={props.question}
				/>{" "}
				{props.options[0].option}
			</label>
			<label
				className={
					props.checked && props.correct === props.options[1].option
						? "correct selected option"
						: selected.answer !== props.correct &&
						  props.checked &&
						  selected.id === props.options[1].id
						? "wrong selected option"
						: selected.id === props.options[1].id
						? "selected option"
						: "option"
				}
			>
				<input
					onClick={(e) =>
						handleClick(
							e,
							props.options[1].id,
							props.options[1].option,
							props.qid
						)
					}
					type="radio"
					id={props.options[1].id}
					value={props.options[1].id}
					name={props.question}
				/>{" "}
				{props.options[1].option}
			</label>
			<label
				className={
					props.checked && props.correct === props.options[2].option
						? "correct selected option"
						: selected.answer !== props.correct &&
						  props.checked &&
						  selected.id === props.options[2].id
						? "wrong selected option"
						: selected.id === props.options[2].id
						? "selected option"
						: "option"
				}
			>
				<input
					onClick={(e) =>
						handleClick(
							e,
							props.options[2].id,
							props.options[2].option,
							props.qid
						)
					}
					type="radio"
					id={props.options[2].id}
					value={props.options[2].id}
					name={props.question}
				/>{" "}
				{props.options[2].option}
			</label>
			<label
				className={
					props.checked && props.correct === props.options[3].option
						? "correct selected option"
						: selected.answer !== props.correct &&
						  props.checked &&
						  selected.id === props.options[3].id
						? "wrong selected option"
						: selected.id === props.options[3].id
						? "selected option"
						: "option"
				}
			>
				<input
					onClick={(e) =>
						handleClick(
							e,
							props.options[3].id,
							props.options[3].option,
							props.qid
						)
					}
					type="radio"
					id={props.options[3].id}
					value={props.options[3].id}
					name={props.question}
				/>{" "}
				{props.options[3].option}
			</label>
		</div>
	);
}
