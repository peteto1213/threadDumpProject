import React from 'react'
import { FaFileUpload } from 'react-icons/fa'
import { useState, useRef } from 'react';
import ReactFileReader from 'react-file-reader'

function Input() {

    const [textValue, setTextValue] = useState('')

    const handleFiles = (files) => {
        let file = files[0]
        let fileReader = new FileReader();
        fileReader.readAsText(file)
        fileReader.onloadend = () => {
            let content = fileReader.result
            setTextValue(content)
        }
    }

    const handleTextChange = (event) => {
        const { value } = event.target

        setTextValue(value)
        console.log(textValue)
    }

    const reset = () => {
        setTextValue('')
    }

    

  return (
    <div className='input'>
        <h1>Paste your dump here</h1>
        <textarea 
            cols="115" 
            rows="10" 
            id="TEXTAREA"
            value={textValue}
            onChange={handleTextChange}
        />
        
        <div className="buttons">
            <button className='btn'>Submit</button>
            <button className='btn' onClick={reset} >Reset</button>
            
            <div className='uploadLabel'>
                <ReactFileReader 
                    fileTypes={'*'}
                    handleFiles={handleFiles}
                >
                    <FaFileUpload /> 
                    Upload
                </ReactFileReader>
            </div>  
        </div>
    </div>
  )
}

export default Input