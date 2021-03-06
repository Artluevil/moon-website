import React, { Component } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import OnlySpace from './Images/OnlySpace.jpg'
import OnlyMoon from './Images/OnlyMoon.png'
import MoonLayers from './Images/MoonLayers.png'
import { Link } from 'react-router-dom'

export default class Discover extends Component {

    componentDidMount(){
        document.body.style.backgroundColor = "black"
    }

    render() {
        return (
            <div className="container-discover">
                <div>
                    <Link to={{pathname: '/'}} className="back-icon"><IoIosArrowBack className="icon" /> <p className="back">BACK</p></Link>
                    <h1 className="page-name">INFORMATIONS</h1>
                    <div>
                        <p id="size" className="option">SIZE</p>
                        <p id="layers" className="option">LAYERS</p>
                        <Link to={{pathname: '/discover/facts'}} className="option">FACTS</Link>
                        <Link to={{pathname: '/discover/phases'}} className="option">PHASES</Link>
                        <div className="hidden-info">
                            <p className="size-header">MOON SIZE</p>
                            <p className="size-description1">The diameter of the Moon is only 3,474 km (2159 mi) across.
                            Just for comparison, the diameter of the Earth at the equator is 12,756 km (7926 mi).
                            That’s only 27% the diameter of the Earth. 
                            The Moon is also the 5th largest moon in the Solar System, 
                            after Ganymede, Titan, Callisto and Io.</p>
                            <p className="size-description2">The surface area of the Moon is 3.793 x 107 km2.
                            That’s about the same size as Russia, Canada and the United States combined.</p>
                         </div>
                        <img className="img-space" src={OnlySpace} alt="space"/>
                        <img className="img-moonLayers" src={MoonLayers} alt="moon-layers"/>
                        <img className="img-moon" src={OnlyMoon} alt="only-moon"/>
                    </div>
                </div>
            </div>
        )
    }
}
