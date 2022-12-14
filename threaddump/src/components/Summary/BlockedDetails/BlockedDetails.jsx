import React from 'react'
import { useLocation } from 'react-router-dom'

function BlockedDetails() {

    const location = useLocation()
    const details = location.state.details

  return (
    <div className='blockedDetails'>
        {details.length > 0 ?
            <>
                
                    <div className='card-container'>
                        {details.map((thread) => (
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