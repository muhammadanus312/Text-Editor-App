import React,{useState} from 'react'

export default function Textbox(props) {
    function clickuppercase(){
        console.log("upper cliked"+ text)
        let newtext=text.toUpperCase()
        setText(newtext)
    }
    function clicklowercase(){
        console.log("lower cliked"+ text)
        let newtext=text.toLowerCase()
        setText(newtext)
    }
    function changeuppercase(event){
        console.log("upper change");
        setText(event.target.value);
    }

    function clickreset(){
        setText("")
    }
    function removespecial(){
        let nospecial=text.replace(/[^a-zA-Z0-9]/g, '')
        setText(nospecial)
    }
    function removenumbers(){
        let nonumber=text.replace(/[0-9]/g, '')
        setText(nonumber)
    }
    function copytext(){
        var t=document.getElementById('box')
        t.select()
        t.backgroundcolor='red'  
        navigator.clipboard.writeText(t.value)
    }

    const[text,setText]=useState('enter text');
    // text="new text"  //wrong
    // setText('anas')  //correct ... we update text variable
    return (
        <>
        <div className="container">
            <h1>{props.title}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={changeuppercase} id="box" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={clickuppercase}  >conver to upper case</button>
            <button className="btn btn-primary mx-3" onClick={clicklowercase}  >conver to lower case</button>
            <button className="btn btn-primary mx-3" onClick={clickreset}  >Reset</button>
            <button className="btn btn-primary mx-3" onClick={removespecial}  >Remove special characters</button>
            <button className="btn btn-primary mx-3" onClick={removenumbers}  >Remove numbers</button>
            <button className="btn btn-primary mx-3" onClick={copytext}  >copytext</button>
        </div>
        <div className="container">
            <h1>Summary</h1>
            <p>words: {text.split(" ").length} characters:{text.length}</p>
            <p>special characters: {text.replace(/[a-zA-Z0-9 ]/g, '').length}</p>
        </div>
        <h2>Preview</h2>
        <p>{text}</p>
        </>
    )
}
