import React, {useState} from 'react'



export default function Textarea(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        }

        const handleDownClick = () => {
            let newText = text.toLowerCase();
            setText(newText);
            }

        const  handleClearText = () => {
            let newText = '';
            setText(newText);
            }
        
        
        const handleOnChange = (event)=>{
            setText(event.target.value)
        }

        const [text, setText] = useState('');

    return (  
        <>
    <div className='container'>
        <h1>{props.heading}</h1>
            <div className='mb-3'>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="textbox" rows="5"></textarea>
            </div>

         <button type="button" onClick={handleUpClick} className="btn btn-primary">UPPER-CASE</button>
         
         <button type="button" onClick={handleDownClick} className="btn btn-primary m-2">lower-case</button>

         <button type="button" onClick={handleClearText} className="btn btn-primary m-2">Clear</button>
    </div>

    <div className="container my-3">
        <h1>Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
    </div>

    <h2>Preview</h2>
    <p>{text}</p>
    </>
   )
    
}