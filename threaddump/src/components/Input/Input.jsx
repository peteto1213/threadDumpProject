import React from 'react'
import { FaFileUpload } from 'react-icons/fa'
import { useState, useRef } from 'react';
import ReactFileReader from 'react-file-reader'

function Input(props) {

    const [textValue, setTextValue] = useState('')

    // Handle the uploaded dump file, retrieving the content and paste to textarea
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
        props.reset()
    }

    /**
     * Logic for handling the textarea thread dump content
     */

    const handleSubmit = () => {

        let temp = {
            total: 0,
            blocked: 0,
            waiting: 0,
            runnable: 0,
            timed: 0,
            daemon: 0,
            nonDaemon: 0,
            ignoredText: [],
            synchronizers: [],
        }

        // split by empty line
        let splitted = textValue.split(/\n\s*\n/)

        splitted.forEach((capture, i) => {
            if(capture.startsWith('"')){
                console.log(`line ${i}: ${capture}`);
                temp.total++

                if(capture.includes('wait()') || capture.includes('waiting')){
                    temp.waiting++
                }
                if(capture.includes('runnable')){
                    temp.runnable++
                }
                if(capture.includes('daemon')){
                    temp.daemon++
                }else{
                    temp.nonDaemon++
                }
            }else{
                // capture the ignored text
                temp.ignoredText.push(capture)
            }
        })

        console.log(temp);

        props.setDump(temp)
    }

    /**
     * End of the logic
     */

    

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
            <button className='btn' onClick={handleSubmit} >Submit</button>
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