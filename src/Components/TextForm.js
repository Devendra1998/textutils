import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpclick=()=>{
        // console.log("UpperCase Was clicked "+text);
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handlelowclick=()=>{
        // console.log("UpperCase Was clicked "+text);
        let newText=text.toLowerCase();
        setText(newText);
    }

    const handleClearclick=()=>{
        // console.log("UpperCase Was clicked "+text);
        let newText='';
        setText(newText);
    }

    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const [text,setText]=useState('');
    return (
        <>
        <div className="container" style={{backgroundColor: props.mode==='light'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handlelowclick}>convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClearclick}>clear Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-2" style={{backgroundColor: props.mode==='light'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minute read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something in the textbox above to preview it"}</p>
        </div>
        </>
    )
}
