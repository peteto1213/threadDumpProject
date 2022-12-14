import React from 'react'
import { GiGooeyDaemon, GiAngelWings } from 'react-icons/gi'
import FullOption from '../PieChart/FullOption'

function Daemon() {
  return (
    <div className='daemon' >
        <h1>Daemon vs non-Daemon</h1>

        <div className="daemon-container">
            <div className="card-container">
                <div className="card">
                    <div className="icon-outer" style={{ background: '#E5F5F5' }} >
                        <GiAngelWings className='icon' color='#00A99D' />
                    </div>
                    <h3 className='big-number'>2533</h3>
                    <p>Non-Daemon</p>
                    <button style={{ color: '#00A99D', background: '#E5F5F5' }} >View Details</button>
                </div>

                <div className="card">
                    <div className="icon-outer" style={{ background: '#F6E9DE' }} >
                        <GiGooeyDaemon className='icon' color='#F0AD4E' />
                    </div>
                    <h3 className='big-number'>366</h3>
                    <p>Daemon</p>
                    <button style={{ color: '#F0AD4E', background: '#F6E9DE' }} >View Details</button>
                </div>
            </div>

            <div className="figure">
                <h1>Daemon vs non-Daemon</h1>

                <FullOption
                    data={[
                        { title: 'Non-daemon', value: 2533, color: '#00A99D' },
                        { title: 'Daemon', value: 366, color: '#F0AD4E' },
                    ]}
                    radius={45}
                />
            </div>
        </div>
    </div>
  )
}

export default Daemon