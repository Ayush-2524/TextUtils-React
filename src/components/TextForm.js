import React,{useState} from 'react'


export default function TextForm(props) {
    const handleClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }
     const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
        props.showAlert("Text Changed!","success");
    }
    const [text, setText] = useState('');
    return (
        <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'light' , color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={() => setText('')}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={() => {navigator.clipboard.writeText(text); props.showAlert("Text copied to clipboard!", "success")}}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={() => {setText(text.split(' ').filter((element)=>{return element.length!==0}).join(" ")); props.showAlert("Extra spaces removed!", "success")}}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2 my-2" onClick={() => {setText(text.split(' ').reverse().join(" ")); props.showAlert("Words reversed!", "success")}}>Reverse Words</button>
    </div>
    <div className="conatainer my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element) => element !== "").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element) => element !== "").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}

