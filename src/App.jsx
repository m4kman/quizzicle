import React from "react";
import Landing from "./components/Landing";
import Quiz from "./components/Quiz";

export default function App() {
  const [startQuiz, setStartQuiz] = React.useState(false);

  function start() {
    setStartQuiz(true);
  }

  return (
    <div>
      {startQuiz ? (
        <div className="quiz-container">
          <Quiz />
        </div>
      ) : (
        <Landing start={start} />
      )}
    </div>
  );
}
