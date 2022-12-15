import React, { useState, useEffect } from 'react'

function BlockedDetails() {

    const [blockedThreads, setBlockedThreads] = useState([])

    useEffect(() => {
        if(JSON.parse(localStorage.getItem('dump'))){
            console.log((JSON.parse(localStorage.getItem('dump'))));
            const dump = (JSON.parse(localStorage.getItem('dump')))
            setBlockedThreads(dump.blockedArray)
        }
    }, [])


  return (
    <div className='blockedDetails'>
        {blockedThreads.length > 0 ?
            <>
                
                    <div className='card-container'>
                        {blockedThreads.map((thread) => (
                            <div className='card'>
                                {thread}
                            </div>
                        ))}
                    </div>
                
            </>
            :
            <>
                <h1>You haven't given any input yet!</h1>
            </>
        }
    </div>
  )
}

export default BlockedDetails