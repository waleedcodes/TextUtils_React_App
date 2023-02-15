import React, { useState } from "react";

const Formtext = (props) => {
  const [Text, setText] = useState("");

  // ******************* //
  const handleupper = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    alert("convert into upper case")
    console.log("convert into upper case");
  };
  // ******************* //
  const handlelower = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    alert("convert into lower case")
    console.log("convert into lower case");
  };
  // ******************* //
  const handleclear = () => {
    let cl = " ";
    setText(cl);
    alert("Clear all text")
    console.log("Clear all text");
  };
  // ******************* //
  const handlecopy = () => {
    let cp = document.getElementById("myBox");
    cp.select();
    navigator.clipboard.writeText(cp.value);
    alert("Copied Text")
    console.log("Copied Text");
  };
  // ******************* //
  const handleRemove = () => {
    let remove = Text.split(/[ ]+/);
    setText(remove.join(" "));
    alert("Remove Extra Spaces")
    console.log("Remove Extra Spaces");
  };
  // ******************* //
  const handleTitlecase = () => {
    const arr1 = Text.split(" ");
    for (var i = 0; i < arr1.length; i++) {
      arr1[i] = arr1[i].charAt(0).toUpperCase() + arr1[i].slice(1);
    }
    const arr2 = arr1.join(" ");
    setText(arr2)

    alert("Convert Into Title Case")
    console.log("Convert Into Title Case");
  };
  // ******************* //
  const handleNumber = () => {
    const fromCharCodes = Text.toString().split('').map(x => +x + 97);
    const answer = String.fromCharCode(...fromCharCodes);
    setText(answer);
    alert("Convert Into fromCharCodes")
    console.log("Convert Into fromCharCodes");
  };

  // ******************* //
  function download(file, text) {

    var element = document.createElement('a');
    element.setAttribute('href',
      'data:text/plain;charset=utf-8, '
      + encodeURIComponent(text));
    element.setAttribute('download', file);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
  // Start file download.

  const handleDownload = () => {
    var text = document.getElementById("myBox").value;
    var filename = "GFG.txt";
    download(filename, text);
    alert("Download Text")
    console.log("Download Text");
  }
  // ******************* //
  const handleonchange = (event) => {
    console.log("text change");
    setText(event.target.value);
  };
  // ******************* //
  return (
    <div>
      {/* <form className={`mt-5 p-5 text-center bg-${props.mode}`}> */}
      <form className={`mt-5 p-1 p-lg-5 p-md-5 text-center text-${props.mode === 'light' ? 'dark' : 'white'}`}>
        <h2 htmlFor="exampleFormControlTextarea1" className="form-label mt-3">
          {props.heading}
        </h2>
        <textarea
          className={`form-control my-5 bg-${props.mode === 'light' ? 'dark' : 'white'} text-${props.mode === 'light' ? 'white' : 'dark'}`}
          onChange={handleonchange}
          value={Text}
          id="myBox"
          rows="8"
          placeholder="Enter text here!"
        ></textarea>
        {/* **************************************  */}
        <div className="d-block d-lg-flex justify-content-center text-start">
          <button
            type="button"
            className="btn btn-primary m-2"
            onClick={handleupper}
          >
            Upper Case
          </button>
          {/* **************************************  */}
          <button
            type="button"
            className="btn btn-secondary m-2"
            onClick={handlelower}
          >
            Lower Case
          </button>
          {/* **************************************  */}
          <button
            type="button"
            className="btn btn-success m-2"
            onClick={handleclear}
          >
            clear
          </button>
          {/* **************************************  */}
          <button
            type="button"
            className="btn btn-danger m-2"
            onClick={handlecopy}
          >
            Copy text
          </button>
          {/* **************************************  */}
          <button
            type="button"
            className="btn btn-warning m-2"
            onClick={handleRemove}
          >
            Remove Spaces
          </button>
          {/* **************************************  */}
          <button
            type="button"
            className="btn btn-info m-2"
            onClick={handleTitlecase}
          >
            Title Case
          </button>
          {/* **************************************  */}
          <button
            type="button"
            className="btn btn-primary m-2"
            onClick={handleNumber}
          >
            Number case
          </button>
          <button
            type="button"
            className="btn btn-dark m-2"
            onClick={handleDownload}
          >
            Download Text
          </button>
          {/* **************************************  */}
        </div>
        {/* **************************************  */}
        {/* **************************************  */}
        <div className="container py-4">
          <h1>Text Summary</h1>
          <p>
            {Text.split(" ").length} Words {Text.length} Characters
          </p>
          <h2>Preview</h2>
          <p>{Text}</p>
        </div>
      </form >
    </div >
  );
  // ******************* //
};

export default Formtext;
