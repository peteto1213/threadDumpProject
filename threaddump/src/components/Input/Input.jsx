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

        // Temporary store of dump file info
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
            blockedArray: []
        }

        // split by empty line
        let splitted = textValue.split(/\n\s*\n/)

        splitted.forEach((capture, i) => {
            if(capture.startsWith('"')){
                console.log(`line ${i}: ${capture}`);
                temp.total++

                if(capture.includes('BLOCKED')){
                    temp.blocked++
                    temp.blockedArray.push(capture)
                }
                if(capture.includes('State: WAITING')){
                    temp.waiting++
                }
                if(capture.includes('RUNNABLE') || capture.includes('runnable')){
                    temp.runnable++
                }
                if(capture.includes('TIMED_WAITING')){
                    temp.timed++
                }
                if(capture.includes('daemon')){
                    temp.daemon++
                }else{
                    temp.nonDaemon++
                }
            }else if(capture.includes('Locked')) {
                splitted[i-1] += capture
                splitted[i] = ''
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