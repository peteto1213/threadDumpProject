import React from 'react'

function IgnoredText({ dump }) {
  return (
    <div className="ignoredText">
        <h1>Ignored Input Lines</h1>
        {dump.ignoredText.map((line) => (
            <>
                <p>{line}</p>
                <br />
            </>
        ))}
    </div>
  )
}

export default IgnoredText