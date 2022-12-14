import React from 'react'
import { FaFileUpload } from 'react-icons/fa'

function Input() {
  return (
    <div className='input'>
        <h1>Paste your dump here</h1>
        <textarea 
            cols="115" 
            rows="10" 
            id="TEXTAREA" 
        />
        
        <div className="buttons">
            <button>Submit</button>
            <button>Reset</button>
            <label class="uploadLabel">
                <FaFileUpload /> 
                <input type="file" class="uploadButton" id="FILE"/>
                Upload
            </label>
        </div>
    </div>
  )
}

export default Input