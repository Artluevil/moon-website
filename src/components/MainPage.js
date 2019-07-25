import React, { Component } from 'react'
import Moon from './Images/Moon.jpg'

export default class MainPage extends Component {
    render() {
        return (
            <div class="container">
                <h1 className="page-name">MOON</h1>
                <div className="quotation">
                    <p className="quote1">“We are going to the moon that is not very far.</p>
                    <p className="quote2"> Man has so much farther to go within himself.”</p>
                    <p className="author">― Anaïs Ni</p>
                </div>
                <div className="NavBtns">
                    <button className="discover-btn">DISCOVER</button>
                    <button className="about-btn">ABOUT</button>
                </div>
                <img className="img-moon" src={Moon}/>
            </div>
        )
    }
}
