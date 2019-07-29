import React, { Component } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import OnlySpace from './Images/OnlySpace.jpg'
import OnlyMoon from './Images/OnlyMoon.png'
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
                        <p className="option">COMPOSITE</p>
                        <p className="option">FACTS</p>
                        <p className="option">PHASES</p>
                        <p className="size-header">MOON SIZE</p>
                        <img className="img-space" src={OnlySpace}/>
                        <img className="img-moon" src={OnlyMoon}/>
                    </div>
                </div>
            </div>
        )
    }
}
