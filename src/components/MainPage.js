import React, { Component } from 'react'
import Moon from './Images/Moon.jpg'
import { Link } from 'react-router-dom'

export default class MainPage extends Component {

    componentDidMount(){
        document.body.style.backgroundColor = "black"
    }

    render() {
        return (
            <div class="container-main">
                <h1 className="page-name">MOON</h1>
                <div className="quotation">
                    <p className="quote1">“We are going to the moon that is not very far.</p>
                    <p className="quote2"> Man has so much farther to go within himself.”</p>
                    <p className="author">― Anaïs Ni</p>
                </div>
                <div className="NavBtns">
                    <Link to={{pathname: '/discover'}} className="discover-btn">DISCOVER</Link>
                    <Link to={{pathname: '/about'}} className="about-btn">ABOUT</Link> 
                </div>
                <img className="img-background" src={Moon} alt="moon"/>
            </div>
        )
    }
}
