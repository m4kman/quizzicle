import React from "react";

export default function Landing(props) {
  return (
    <div className="wrapper">
      <img className="blob-tr" src="/images/top-right.png" alt="Blob" />
      <img className="blob-bl" src="/images/bottom-left.png" alt="Blob" />
      <div className="hero">
        <h1 className="title">Quizzicle</h1>
        <p className="title-desc">A Quizzicle game built with React</p>
        <button className="start-quiz" onClick={props.start}>
          Start Quiz
        </button>
      </div>
    </div>
  );
}
