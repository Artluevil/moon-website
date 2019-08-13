import React, { Component } from 'react'
import MainPage from './components/MainPage'
import Discover from './components/Discover'
import DataFacts from './components/DataFacts'
import FactsPage from './components/FactsPage'
import Phases from './components/Phases'
import About from './components/About'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

export default class Main extends Component {
    state = {
        facts: DataFacts
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
            <Router basename={process.env.PUBLIC_URL}>
                <div>
                    <Route exact path="/about" component={About} />
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/discover" component={Discover} />
                    <Route exact path="/discover/facts" render={(routeProps) => (<FactsPage {...routeProps} data={this.state.facts}/>)} />
                    <Route exact path="/discover/phases" component={Phases} />
                </div>
            </Router>
        )
    }
}