import React, { Component } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import MoonColored from './Images/MoonColored.jpg'

export default class Discover extends Component {
    render() {
        return (
            <div className="container-discover">
                <div>
                    <a href="/" className="back-icon"><IoIosArrowBack style={{fontSize: '3em'}} /> <p className="back">BACK</p></a>
                    <h1 className="page-name">INFORMATIONS</h1>
                    <div className="options">
                        <p className="option">SIZE</p>
                        <p className="option">COMPOSITE</p>
                        <p className="option">FACTS</p>
                        <p className="option">PHASES</p>
                    </div>
                </div>
                <img className="img-moon" src={MoonColored}/>
            </div>
        )
    }
}
