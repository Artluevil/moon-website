import React, { Component } from 'react'
import MainPage from './components/MainPage'
import Discover from './components/Discover'
import {BrowserRouter as Router, Route} from 'react-router-dom'

export default class Main extends Component {
    onClickDiscover = () => {
        window.location.assign('/discover')
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
                    <Route exact path="/discover" component={Discover} />
                </div>
            </Router>
        )
    }
}