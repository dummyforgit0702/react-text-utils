import React, {useState} from 'react'

export default function Textform(props) {
    const [text, setText]= useState('Enter the text here'); 
    const handleUpClick =()=>{
        console.log("Uppercase was click " + text)

        let upperCaseText= text.toUpperCase(); 
        setText(upperCaseText); 
        // setText("You have clicked on handleUpClicked")
        props.showAlert("UpperCase Sentences", "success"); 
    }
    const handleLoClick =()=>{
        console.log("Lowercase was click " + text)

        let lowerCaseText= text.toLowerCase(); 
        setText(lowerCaseText); 
        // setText("You have clicked on handleUpClicked")
        props.showAlert("LowerCase Sentences", "success"); 
    }
    const handleClearClick = ()=>{
        console.log('Clearnign the text from the textform'); 
        setText(''); 
        props.showAlert("Cleared Sentences", "success"); 
    }
    const handleOnChange= (event)=>{
        console.log("On change")
        setText(event.target.value)
    }
    const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Sentences are audible", "success"); 
    }   
    const handleAlternateCase = () => {
    let tempString = text; // Get the current text
    let result = '';
    let makeUpperCase = true; // Start with uppercase for the first letter

    for (let i = 0; i < tempString.length; i++) {
        const char = tempString[i];

        // Check if the character is an alphabet letter
        // A common way is to see if its uppercase and lowercase versions are different.
        // Or use a regex: char.match(/[a-z]/i)
        if (char.toLowerCase() !== char.toUpperCase()) {
            if (makeUpperCase) {
                result += char.toUpperCase();
            } else {
                result += char.toLowerCase();
            }
            makeUpperCase = !makeUpperCase; // Flip the flag for the next letter
        } else {
            // If it's not a letter (e.g., space, number, symbol), append it as is
            result += char;
        }
        props.showAlert("Case Sentences", "success"); 
    }
    setText(result); // Update the state with the new alternated string
    };
    return (
        <>
    <div>
        <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>  
            <textarea className="form-control" value={text} onChange = {handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea> 
        </div>
        
        <button className="btn btn-primary mx-2"  onClick={handleUpClick}>Convert to upper case</button>
        <button className="btn btn-primary mx-2"  onClick={handleLoClick}>Convert to Lower Case case</button>
        <button className="btn btn-primary mx-2"  onClick={handleClearClick}>Clear the Text</button>
        <button className="btn btn-primary mx-2"  onClick={handleAlternateCase}>Convert to alternate text</button>
        <button className="btn btn-primary mx-2"  onClick={speak}>Convert text into Speech</button>
    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <br />
        <h2>Here's your text preview</h2>
        <p><b>{text.length>0?text:"Enter something to preview"}</b></p>
    </div>
    </>
    )
}
