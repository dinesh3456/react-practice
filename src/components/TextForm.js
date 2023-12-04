import React, { useState } from "react";

export default function TextForm(props) {
  const handleupClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleloClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleonChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const handleclearClick = () => {
    let newText = "";
    setText(newText);
  };
  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleonChange}
            rows="8"
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-2"
          onClick={handleupClick}
          style={{ color: "white" }}
        >
          Convert to uppercase
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleloClick}
          style={{ color: "white" }}
        >
          Clear the text
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleclearClick}
          style={{ color: "white" }}
        >
          Convert to lowerCase
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <p>{text.split("\n").length} Sentences</p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
