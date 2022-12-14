import React from 'react'
import { GiGooeyDaemon, GiAngelWings } from 'react-icons/gi'
import FullOption from '../PieChart/FullOption'
import Loading from '../Loading/Loading'

function Daemon({ dump }) {
  return (
    <div className='daemon' >
        <h1>Daemon vs non-Daemon</h1>

        <div className="daemon-container">
            <div className="card-container">
                <div className="card">
                    <div className="icon-outer" style={{ background: '#E5F5F5' }} >
                        <GiAngelWings className='icon' color='#00A99D' />
                    </div>
                    <h3 className='big-number'>{dump.nonDaemon}</h3>
                    <p>Non-Daemon</p>
                    <button style={{ color: '#00A99D', background: '#E5F5F5' }} >View Details</button>
                </div>

                <div className="card">
                    <div className="icon-outer" style={{ background: '#F6E9DE' }} >
                        <GiGooeyDaemon className='icon' color='#F0AD4E' />
                    </div>
                    <h3 className='big-number'>{dump.daemon}</h3>
                    <p>Daemon</p>
                    <button style={{ color: '#F0AD4E', background: '#F6E9DE' }} >View Details</button>
                </div>
            </div>

            <div className="figure">
                <h1>Daemon vs non-Daemon</h1>

                {dump.total > 0 ?
                    <FullOption
                        data={[
                            { title: 'Non-daemon', value: dump.nonDaemon , color: '#00A99D' },
                            { title: 'Daemon', value: dump.daemon, color: '#F0AD4E' },
                        ]}
                        radius={45}
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

export default Daemon