import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaLock, FaClock, FaPause, FaRunning } from 'react-icons/fa'
import FullOption from '../PieChart/FullOption'
import Loading from '../Loading/Loading'

function Summary({ dump }) {


  return (
    <div className='summary'>
        <h1>Thread Count Summary</h1>

        <h2>Total Thread count: <span>{dump.total}</span></h2>

        <div className="summary-container">
            <div className="card-container">
                <div className="card">
                    <FaLock className='icon' color='#D9534F' />
                    <h3 className='big-number'>{dump.blocked}</h3>
                    <p>Blocked</p>
                    <Link 
                        style={{ color: '#D9534F', background: '#F9DFDE' }} 
                        className='btn' 
                        target="_blank" 
                        rel="noopener noreferrer"
                        to='/blockedDetails'
                        state={{ blockedThreads: dump.blockedArray }}
                    >
                        View Details
                    </Link>

                </div>

                <div className="card">
                    <FaPause className='icon' color='#F0AD4E' />
                    <h3 className='big-number'>{dump.waiting}</h3>
                    <p>Waiting</p>
                    <button style={{ color: '#F0AD4E', background: '#F6E9DE' }} >View Details</button>
                </div>

                <div className="card">
                    <FaRunning className='icon' color='#00A99D' />
                    <h3 className='big-number'>{dump.runnable}</h3>
                    <p>Runnable</p>
                    <button style={{ color: '#00A99D', background: '#E5F5F5' }} >View Details</button>
                </div>

                <div className="card">
                    <FaClock className='icon' color='#337AB7' />
                    <h3 className='big-number'>{dump.timed}</h3>
                    <p>timed waiting</p>
                    <button style={{ color: '#337AB7', background: '#c4daec' }} >View Details</button>
                </div>
            </div>

            <div className="figure">
                <h1>Thread state %</h1>

                {dump.total > 0 ?
                    <FullOption 
                        data={[
                            { title: 'Blocked', value: dump.blocked, color: '#D9534F' },
                            { title: 'Waiting', value: dump.waiting, color: '#F0AD4E' },
                            { title: 'Runnable', value: dump.runnable, color: '#00A99D' },
                            { title: 'Timed_waiting', value: dump.timed, color: '#337AB7' },
                        ]}
                        radius={50}
                    />
                    :
                    <>
                        <h1 className="loading-title">
                            Waiting for thread dump data
                        </h1>
                        <Loading />
                    </>
                }
            </div>
        </div>
    </div>
  )
}

export default Summary