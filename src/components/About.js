import React from 'react'
import MoonWhite from './Images/MoonWhite.jpg'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div>
            <Link to={{pathname: '/'}} className="back-icon-about"><IoIosArrowBack style={{fontSize: '3em'}} /> <p className="back-about">BACK</p></Link>
            <div className="about-container">
                <h1>ABOUT</h1>
                <h2>Website designed with passion</h2>
                <h3>for the our beutifull moon.</h3>
                <p>Designed by: Artluevil</p>
                <img className="img-moonWhite" src={MoonWhite} alt="background"/>
            </div>
        </div>
    )
}
