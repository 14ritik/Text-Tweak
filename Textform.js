import React,{useState} from 'react'



export default function Textform(props) {
  const [text , setText/*Function*/]=useState("");
  const handleUpclick=()=>{
    let newtext=text.toUpperCase()
    setText(newtext);
    props.showAlert("Converted to Uppercase","success");
  }
  const handleLowclick=()=>{
    let newtext=text.toLowerCase()
    setText(newtext);
    props.showAlert("Converted to Lowercase","success");
  }
  const handleClearclick=()=>{
    let newtext=''
    setText(newtext);
  }
  const handleOnclick=(event)=>{//an event object is returned here
    setText(event.target.value)//helps to make change in textarea box
  }
  const handleSpaces=()=>{
     let newtext=text.split(/[ ]+/)
     setText(newtext.join(' '))
  }
  return (
    <>
    <div className='container' style={{color:props.mode==="dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="form-floating">
        <label htmlFor="mybox" className="form-label"></label>
        <textarea className="form-control" value={text} id="mybox" onChange={handleOnclick} rows="8" style={{backgroundColor:props.mode==="light"?"white":"grey",color:props.mode==="dark"?"white":"black"}}></textarea>
        </div>

        <button className="btn btn-success my-2 mx-1" disabled={text.length===0} onClick={handleUpclick}>Convert To UpperCase</button>
        <button className="btn btn-success my-2 mx-1 " disabled={text.length===0} onClick={handleLowclick}>Convert To LowerCase</button>
        <button className="btn btn-success mx-2 my-1" disabled={text.length===0} onClick={handleSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-success my-2 mx-1" disabled={text.length===0} onClick={handleClearclick}>Clear</button>
    </div>
    <div className='container my-3' style={{color:props.mode==="dark"?"white":"black"}}>
        <h2 >Your text summary</h2>
        <p ><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</b></p>
        <p >{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h2 >Preview</h2>
        <p >{text.length>0?text:"Enter your text to preview"}</p>
    </div>
    </>
  )
}
