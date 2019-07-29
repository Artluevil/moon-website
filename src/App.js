import React, { Component } from 'react'
import MainPage from './components/MainPage'
import Discover from './components/Discover'
import Size from './components/Size'
import {BrowserRouter as Router, Route} from 'react-router-dom'

export default class Main extends Component {
    onClickDiscover = () => {
        window.location.assign('/discover')
    }

    onClickSize = () => {
        setInterval(() => {
            window.location.assign('/discover/size')
        }, 3000)
    }

    componentDidMount() {
        setInterval(() => {
            console.log('hello')
        }, 3000)
    }


    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" render={(routeProps) => (<MainPage {...routeProps} onClickDiscover={this.onClickDiscover} />)} />
                    <Route path="/discover" render={(routeProps) => (<Discover {...routeProps} onClickSize={this.onClickSize} />)} />
                    <Route path="/discover/size" component={Size} />
                </div>
            </Router>
        )
    }
}