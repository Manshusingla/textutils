import React,{useState} from 'react'


export default function TextForm(props) {
const handleUpClick=()=>{
let newText=text.toUpperCase()
setText(newText)
props.showAlert("Convert To Upper Case","success")
}
const handleLoClick=()=>{
let newText=text.toLowerCase()
setText(newText)
props.showAlert("Convert To Lower Case","success")

}
const copyText=()=>{
    navigator.clipboard.writeText(text);
props.showAlert("Your text has been copied","success")

}
const clearText=()=>{
    setText("")
props.showAlert("Your text is clear","success")

}
const removeExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
props.showAlert("Extra spaces has been removed form your text","success")

}
const makeFirstLetterSpaces=()=>{
    let arr=text.split(" ");
    for (let index = 0; index < arr.length; index++) {
       arr[index]=arr[index].charAt(0).toUpperCase()+arr[index].slice(1)
    }  
      setText(arr.join(" "))
props.showAlert("Every first letter of your string is capital","success")

}

const handleOnChange=(event)=>{
setText(event.target.value)
}
const [text, setText] = useState("");
return (
<>
    <div className="container"  style={{backgroundColor:props.mode===`light`?`white`:`black`,color:props.mode==="light"?"black":"white"}}>
        <div className="mt-4 mb-3">
            <label htmlFor="myBox" className="form-label">
                <h3>{props.heading}</h3>
            </label>
            <textarea  style={{backgroundColor:props.mode===`light`?`white`:`black`,color:props.mode==="light"?"black":"white"}} className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
        </div>
        <div className='buttons'>
        <button onClick={handleUpClick} className="btn btn-primary">Convert To Upper Case</button>
        <button onClick={handleLoClick} className="btn btn-primary">Convert To Lower Case</button>
        <button onClick={copyText} className="btn btn-primary">Copy Text</button>
        <button onClick={clearText} className="btn btn-primary">Clear Text</button>
        <button onClick={removeExtraSpaces} className="btn btn-primary">Remove Extra Spaces</button>
        <button onClick={makeFirstLetterSpaces} className="btn btn-primary">Every First Letter Capital</button>
        </div>
    </div>
    <div className="container my-3 " style={{backgroundColor:props.mode===`light`?`white`:`black`,color:props.mode==="light"?"black":"white"}}>
        <h3>Your Text Summary Are:</h3>
        <p>{text.split(" ").length-1}Words and Character  {text.length}</p>
        <p>{0.008 * text.split(" ").length} Minutes for reading</p>
    </div>
</>
)
}