import React, { Component } from 'react'
import MainPage from './components/MainPage'
import Discover from './components/Discover'
import Size from './components/Size'
import DataFacts from './components/DataFacts'
import FactsPage from './components/FactsPage'
import Phases from './components/Phases'
import {BrowserRouter as Router, Route} from 'react-router-dom'

export default class Main extends Component {
    state = {
        facts: DataFacts
    }
    onClickDiscover = () => {
        window.location.assign('/discover')
    }

    onClickFact = () => {
        window.location.assign('/discover/facts')
    }

    onClickPhases = () => {
        window.location.assign('/discover/phases')
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
                    <Route exact path="/discover" render={(routeProps) => (<Discover {...routeProps} onClickPhases={this.onClickPhases} onClickFact={this.onClickFact} onClickSize={this.onClickSize} />)} />
                    <Route exact path="/discover/facts" render={(routeProps) => (<FactsPage {...routeProps} data={this.state.facts}/>)} />
                    <Route exact path="/discover/phases" component={Phases} />
                </div>
            </Router>
        )
    }
}