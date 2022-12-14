import React, { useState } from 'react'
import { FaLock, FaClock, FaPause, FaRunning } from 'react-icons/fa'
import FullOption from '../PieChart/FullOption'

function Summary() {

    

  return (
    <div className='summary'>
        <h1>Thread Count Summary</h1>

        <h2>Total Thread count: <span>2899</span></h2>

        <div className="summary-container">
            <div className="card-container">
                <div className="card">
                    <FaLock className='icon' color='#D9534F' />
                    <h3 className='big-number'>1419</h3>
                    <p>Blocked</p>
                    <button style={{ color: '#D9534F', background: '#F9DFDE' }} >View Details</button>
                </div>

                <div className="card">
                    <FaPause className='icon' color='#F0AD4E' />
                    <h3 className='big-number'>1334</h3>
                    <p>Waiting</p>
                    <button style={{ color: '#F0AD4E', background: '#F6E9DE' }} >View Details</button>
                </div>

                <div className="card">
                    <FaRunning className='icon' color='#00A99D' />
                    <h3 className='big-number'>89</h3>
                    <p>runnable</p>
                    <button style={{ color: '#00A99D', background: '#E5F5F5' }} >View Details</button>
                </div>

                <div className="card">
                    <FaClock className='icon' color='#337AB7' />
                    <h3 className='big-number'>57</h3>
                    <p>timed waiting</p>
                    <button style={{ color: '#337AB7', background: '#c4daec' }} >View Details</button>
                </div>
            </div>

            <div className="figure">
                <h1>Thread state %</h1>

                <FullOption 
                    data={[
                        { title: 'Blocked', value: 1419, color: '#D9534F' },
                        { title: 'Waiting', value: 1334, color: '#F0AD4E' },
                        { title: 'Runnable', value: 89, color: '#00A99D' },
                        { title: 'Timed_waiting', value: 57, color: '#337AB7' },
                    ]}
                    radius={50}
                />
            </div>
        </div>
    </div>
  )
}

export default Summary