import React from 'react'
import CrescentLeftMoon from './Images/CrescentLeftMoon.png'
import QuarterLeftMoon from './Images/QuarterLeftMoon.png'
import FullMoon from './Images/FullMoon.png'
import QuarterRightMoon from './Images/QuarterRightMoon.png'
import CrescentMoon from './Images/CrescentMoon.png'

export default function Phases() {
    return (
        <div className="phases-container">
            <div className="phases-name">
                <p>FULL MOON</p>
            </div>
            <img className="img-moonPhase" src={CrescentLeftMoon} />
            <img className="img-moonPhase" src={QuarterLeftMoon} />
            <img className="img-moonPhase" src={FullMoon} />
            <img className="img-moonPhase" src={QuarterRightMoon} />
            <img className="img-moonPhase" src={CrescentMoon} />
        </div>
    )
}
