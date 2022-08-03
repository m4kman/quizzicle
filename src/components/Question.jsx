import React from "react";
import Option from "./Option";

export default function Question(props) {
  //   const [selectedItem, setSelectedItem] = React.useState([]);

  //   function selectItem(id) {
  //     let selectedIDs = [];
  //     for (let i = 0; i < props.questions.length; i++) {
  //       props.questions[i].options.map((op) => {
  //         if (id === op.id) {
  //           selectedIDs.push(id);
  //         }
  //         return;
  //       });
  //     }
  //     setSelectedItem(selectedIDs);
  //   }
  //   console.log(props.selected);
  //   console.log(props.ids);
  return (
    <div className="question-container">
      <h1 className="question">{props.question}</h1>

      <Option options={props.options} />
      {/* <label
          className={
            selected === props.options[0].id ? "selected option" : "option"
          }
        >
          <input
            onChange={(e) => handleClick(e, props.options[0].id)}
            type="radio"
            value={props.options[0].id}
            name="option"
          />{" "}
          {props.options[0].option}
        </label>
        <label
          className={
            selected === props.options[1].id ? "selected option" : "option"
          }
        >
          <input
            onChange={(e) => handleClick(e, props.options[1].id)}
            type="radio"
            value={props.options[1].id}
            name="option"
          />{" "}
          {props.options[1].option}
        </label>
        <label
          className={
            selected === props.options[2].id ? "selected option" : "option"
          }
        >
          <input
            onChange={(e) => handleClick(e, props.options[2].id)}
            type="radio"
            value={props.options[2].id}
            name="option"
          />{" "}
          {props.options[2].option}
        </label>
        <label
          className={
            selected === props.options[3].id ? "selected option" : "option"
          }
        >
          <input
            onChange={(e) => handleClick(e, props.options[3].id)}
            type="radio"
            value={props.options[3].id}
            name="option"
          />{" "}
          {props.options[3].option}
        </label> */}
      {/* <p
          onClick={() => selectItem(props.ids[0].id)}
          className={
            selectedItem.some((id) => id === props.ids[1].id)
              ? "selected option"
              : "option"
          }
        >
          {props.a}
        </p>
        <p
          onClick={() => selectItem(props.ids[1].id)}
          className={
            selectedItem.some((id) => id === props.ids[1].id)
              ? "selected option"
              : "option"
          }
        >
          {props.b}
        </p>
        <p
          onClick={() => selectItem(props.ids[2].id)}
          className={
            selectedItem.some((id) => id === props.ids[1].id)
              ? "selected option"
              : "option"
          }
        >
          {props.c}
        </p>
        <p
          onClick={() => selectItem(props.ids[3].id)}
          className={
            selectedItem.some((id) => id === props.ids[1].id)
              ? "selected option"
              : "option"
          }
        >
          {props.d}
        </p> */}
      {/* </div> */}
    </div>
  );
}
