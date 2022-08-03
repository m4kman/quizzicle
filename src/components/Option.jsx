import React from "react";

export default function Option(props) {
  const [selected, setSelected] = React.useState({ id: "", answer: "" });
  // const [answers, setAnswers] = React.useState([{ id: "", choice: "" }]);

  // console.log(props);

  // function checkSelected(received) {
  //   setAnswers((prev) => {
  //     let newArray = prev.map((x) => {
  //       if (x.id === received.qid) {
  //         return { ...x, choice: received.choice };
  //       } else {
  //         return null;
  //       }
  //     });
  //     if (prev.some((x) => x.id !== received.qid)) {
  //       newArray.push({ id: received.qid, choice: received.choice });
  //     }
  //     console.log(newArray);
  //     return newArray.filter((x) => x !== null);
  //   });
  // }

  // console.log(answers);

  function handleClick(e, id, option, qid) {
    setSelected({ id: id, answer: option });
    props.change({ id: id, choice: option, qid: qid });
    // }
    // console.log(e);
    // if (checked) {
    //   setSelected({ id: id, answer: option });
    //   setAnswers((prev) => {
    //     if (prev.length < 1) {
    //       return [{ option, name: props.question }];
    //     } else {
    //       return prev.map((c) => {
    //         if (c.name !== props.question && c.option !== option) {
    //           return { option, name: props.question };
    //         } else if (c.name === props.quesiton && c.option !== option) {
    //           return { ...c, option: option };
    //         } else {
    //           return c;
    //         }
    //       });
    //     }
    //   });
    // }
    // if (checked) {
    // }

    //   props.change((prev) => {
    //     // return prev.map((c) => {
    //     //   if (qid === c.id) {
    //     //     return { ...c, choice: option };
    //     //   }
    //     //   return null;
    //     //   // else if (qid !== c.id) {
    //     //   //   if (prev.length === 1) {
    //     //   //     return { id: qid, choice: option };
    //     //   //   } else {
    //     //   //     return { id: qid, choice: option };
    //     //   //   }
    //     //   // }
    //     // [{}]
    //     // [...prev, {new value}] - when qid does not exist
    //     // {}
    //     // });
    //     // prev.forEach(x => x.id === qid)
    //     // for (let i=0; i < prev.length; i++) {
    //     //   if (prev[i].id !==)
    //     // }

    //     /* .map(x.id === qid {choice:option}, prev.every(x) => x.id !== qid, [...prev, {new value}] )
    //     1. If all of the items dont have qid, simply add the new item
    //     2. If qid exists, update the object
    //   */
    //     // if (
    //     //   prev.every((x, index) => {
    //     //     if (x.id !== qid) {
    //     //       ind = index;
    //     //       return true;
    //     //     }
    //     //   })
    //     // ) {
    //     //   return [...prev, { id: qid, choice: option }];
    //     // } else {
    //     // }
    //     let newArray = prev.map((x) => {
    //       if (x.id === qid) {
    //         return { ...x, choice: option };
    //       } else {
    //         isNotFound = true;
    //         return null;
    //       }
    //     });
    //     if (prev.some((c) => c.id !== qid)) {
    //       newArray.push({ id: qid, choice: option });
    //     }

    //     const xd = newArray.filter((x) => x !== null);
    //     console.log(xd);
    //     console.log("Arrived");
    //     return xd;
    //   });
    // }
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
