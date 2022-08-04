import React from "react";
import { nanoid } from "nanoid";
import Option from "./Option";

export default function Quiz() {
	const [questions, setQuestions] = React.useState([]);
	const [selected, setSelected] = React.useState([{ id: "", choice: "" }]);
	const [count, setCount] = React.useState(0);
	const [check, setCheck] = React.useState(false);
	const [reset, setReset] = React.useState(false);

	React.useEffect(() => {
		setReset(false);
		let questionsArray;
		fetch("https://opentdb.com/api.php?amount=5&type=multiple&encode=url3986", {
			method: "GET",
		})
			.then((res) => res.json())
			.then((data) => {
				const dataArray = data.results;

				questionsArray = dataArray.map((qs) => {
					qs.incorrect_answers.push(qs.correct_answer);
					const shuffled = shuffle(qs.incorrect_answers);
					return {
						qid: nanoid(),
						question: decodeURIComponent(qs.question),
						correct: decodeURIComponent(qs.correct_answer),
						options: shuffled.map((o) => ({
							option: decodeURIComponent(o),
							id: nanoid(),
						})),
					};
				});
				setQuestions(questionsArray);
				setSelected([{ id: "", choice: "" }]);
				setCheck(false);
				setCount(0);
			});
	}, [reset]);

	function checkSelected(received) {
		setSelected((prev) => {
			let newArray = prev.map((x) => {
				if (x.id === received.qid) {
					return { ...x, choice: received.choice };
				} else {
					return x;
				}
			});
			if (prev.some((x) => x.id !== received.qid)) {
				newArray.push({ id: received.qid, choice: received.choice });
			}
			return newArray.filter(
				(value, index, self) =>
					index === self.findIndex((t) => t.id === value.id)
			);
		});
	}

	function shuffle(array) {
		let currentIndex = array.length,
			randomIndex;

		// While there remain elements to shuffle.
		while (currentIndex !== 0) {
			// Pick a remaining element.
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex],
				array[currentIndex],
			];
		}

		return array;
	}

	console.log(selected);

	function checkAnswers() {
		setSelected((prev) => {
			// console.log(prev.filter((x, index) => index !== 0));
			return prev.filter((x, index) => index !== 0);
		});
		selected.forEach((ans) => {
			questions.forEach((qs) => {
				if (ans.choice === qs.correct) {
					setCount((count) => count + 1);
				}
			});
		});
		setCheck(true);
	}

	function startOver() {
		setReset(true);
	}

	const questionsElements = questions.map((qs, index) => {
		return (
			<div key={index} className="question-container">
				<h1 className="question">{qs.question}</h1>
				<Option
					qid={qs.qid}
					selected={selected}
					change={checkSelected}
					options={qs.options}
					checked={check}
					question={qs.question}
					correct={qs.correct}
				/>
			</div>
		);
	});

	return (
		<div>
			<div className="wrapper">
				<img className="blob-tr" src="/images/top-right.png" alt="Blob" />
				<img className="blob-bl" src="/images/bottom-left.png" alt="Blob" />
			</div>
			<div>{questionsElements}</div>
			<div className="answers-container">
				{!check ? (
					<button onClick={checkAnswers} className="answers">
						Check answers
					</button>
				) : (
					<div className="score-container">
						<p>You scored {count}/5 correct answers</p>
						<button onClick={startOver} className="answers">
							Play Again
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
