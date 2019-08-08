import React, { Component } from 'react'
import CrescentLeftMoon from './Images/CrescentLeftMoon.png'
import QuarterLeftMoon from './Images/QuarterLeftMoon.png'
import FullMoon from './Images/FullMoon.png'
import QuarterRightMoon from './Images/QuarterRightMoon.png'
import CrescentMoon from './Images/CrescentMoon.png'
import { Container, Row, Col } from 'react-bootstrap'
import { IoIosArrowBack } from "react-icons/io";

export default class Phases extends Component {

    componentDidMount(){
        document.body.style.backgroundColor = "#212121"
    }

    render() {
        return (
            <div>
                <a href="/discover" className="back-icon-phases"><IoIosArrowBack style={{fontSize: '3em'}} /> <p className="back-phases">BACK</p></a>
                <div className="container-fluid">
                    <div className="row justify-content-md-center">
                        <div style={{background: '#212121'}} className="col-lg-2 ">
                            <img className="img-moonPhase" src={CrescentLeftMoon} alt="CrescentLeftMoon"/>
                            <p className="phase-name">CRESCENT MOON LEFT</p>
                        </div>
                        <div style={{background: '#333333'}} className="col-lg-2">
                            <img className="img-moonPhase" src={QuarterLeftMoon} alt="QuarterLeftMoon"/>
                            <p className="phase-name">QUARTER MOON LEFT</p>
                        </div>
                        <div style={{background: '#3b3b3b'}} className="col-lg-2">
                            <img className="img-moonPhase" src={FullMoon} alt="FullMoon"/>
                            <p className="phase-name">FULL MOON</p>
                        </div>
                        <div style={{background: '#333333'}} className=" col-lg-2">
                            <img className="img-moonPhase" src={QuarterRightMoon} alt="QuarterRightMoon"/>
                            <p className="phase-name">QUARTER MOON RIGHT</p>
                        </div>
                        <div style={{background: '#212121'}} className="col-lg-2">
                            <img className="img-moonPhase" src={CrescentMoon} alt="CrescentMoon"/>
                            <p className="phase-name">CRESCENT MOON RIGHT</p>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-md-4 mt-5 mb-5">
                            <p className="phase-description">The phases of the Moon are the different ways the Moon looks from Earth over about a month.
                            As the Moon orbits around the Earth, the half of the Moon that faces the Sun will be lit up. The different shapes of the lit portion of the Moon that can be seen from Earth are known as phases of the Moon. Each phase repeats itself every 29.5 days.
                            The same half of the Moon always faces the Earth, because of tidal locking. So the phases will always occur over the same half of the Moon's surface.
                            A phase is an angle of the moon to the earth so it appears differently every day. </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

