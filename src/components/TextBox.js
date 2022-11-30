import React, { useState } from 'react'

const TextBox = (props) => {
    const [text, setText] = useState("")
    const { showAlert, theme } = props


    const handleOnChange = (element) => {
        setText(element.target.value)
    }

    const handleUpperCase = () => {
        setText(text.toUpperCase());
        showAlert("Handled UpperCase", "success")
    };

    const handleLowerCase = () => {
        setText(text.toLowerCase());
        showAlert("Handled LowerCase", "success")
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        showAlert("Copied to Clipboard", "success")
    };

    const handleExtraSpaces = () => {
        let array = text.split(/[ ]+/)
        let string = array.join(" ")
        setText(string)
        showAlert("Handled ExtraSpaces", "success")
    };

    const handleClear = () => {
        setText("");
        showAlert("Text Box Cleared", "danger")
    };


    return (
        <div className='container my-2' style={theme === 'dark' ? { color: 'white' } : { color: 'black' }}>
            <h1>Text Toolkit</h1>
            <textarea style={theme === 'dark' ? { backgroundColor: 'grey', color: 'white', cursor: 'pointer' } : { backgroundColor: 'white', color: 'black', cursor: 'pointer' }} className='form-control shadow-sm mb-3' rows="6" value={text} onChange={handleOnChange}></textarea>
            <button disabled={text.length === 0} className='btn btn-sm btn-primary me-2 mb-2' onClick={handleUpperCase}>UpperCase</button>
            <button disabled={text.length === 0} className='btn btn-sm btn-primary me-2 mb-2' onClick={handleLowerCase}>LowerCase</button>
            <button disabled={text.length === 0} className='btn btn-sm btn-primary me-2 mb-2' onClick={handleCopy}>Copy</button>
            <button disabled={text.length === 0} className='btn btn-sm btn-primary me-2 mb-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length === 0} className='btn btn-sm btn-primary me-2 mb-2' onClick={handleClear}>Clear</button>
            <h3 className="mt-2 mb-2">Summar</h3>
            <div className='mb-3'>Word Count - {text.length === 0 ? 0 : text.split(" ").filter((word) => word !== "").length}</div>
            <div className='mb-3'>Charecters - {text.length - (text.match(/ /g) || []).length}</div>
            <div className='mb-3'>Read Time - {0.008 * text.split(" ").filter((word) => word !== "").length}</div>
            <h3 className="mt-2 mb-2">Preview</h3>
            <p className='mb-3'>{text.length !== 0 ? text : "Nothing to preview"}</p>
        </div>
    )
}

export default TextBox
