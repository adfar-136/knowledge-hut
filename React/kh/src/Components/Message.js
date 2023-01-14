import React, { useState } from "react";

export default function Message() {
    const [text,setText] = useState("")
    
    const onChange =(event)=>{
       setText(event.target.value)
    }
    const onUpper = ()=>{
        setText(text.toUpperCase())
    }
    const onLower =()=>{
        setText(text.toLocaleLowerCase())
    }
    const onReset=()=>{
        setText("")
    }
  return (
    <>
        <div className="container">
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Text App
            </label>
            <textarea placeholder="Enter your text here" onChange={onChange} className="form-control" id="exampleFormControlTextarea1"rows="9" value={text}></textarea>
        </div>
        <button onClick={onUpper} className="btn btn-primary mx-3">upper</button>
        <button onClick={onLower} className="btn btn-primary mx-3">Lower</button>
        <button onClick={onReset} className="btn btn-primary mx-3">Reset</button>
        <button  className="btn btn-primary mx-3">remove whitespaces</button>
        

        </div>
        <div>
            <h1>Text summary</h1>
            <p>{text.split(" ").length} words and {text.length} letters are present</p>
        </div>
    </>
  );
}
