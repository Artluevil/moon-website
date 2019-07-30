import React, { Component } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import OnlySpace from './Images/OnlySpace.jpg'
import OnlyMoon from './Images/OnlyMoon.png'
import MoonLayers from './Images/MoonLayers.png'
import { whileStatement } from '@babel/types';

export default class Discover extends Component {
    render() {
        return (
            <div className="container-discover">
                <div>
                    <a href="/" className="back-icon"><IoIosArrowBack style={{fontSize: '3em'}} /> <p className="back">BACK</p></a>
                    <h1 className="page-name">INFORMATIONS</h1>
                    <div>
                        <p id="size" onClick={this.props.onClickSize} className="option">SIZE</p>
                        <p id="layers" className="option">LAYERS</p>
                        <p className="option">FACTS</p>
                        <p className="option">PHASES</p>
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
                        <img className="img-space" src={OnlySpace}/>
                        <img className="img-moonLayers" src={MoonLayers} />
                        <img className="img-moon" src={OnlyMoon}/>
                    </div>
                </div>
            </div>
        )
    }
}
