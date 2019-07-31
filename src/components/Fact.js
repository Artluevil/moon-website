import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class Fact extends Component {
    render() {
        return (
            <div className="container">
              <div className="fact-container">
                <h1 className="fact-title">{this.props.data.title}</h1>
                <p className="fact-description">{this.props.data.description}</p>
              </div>
            </div>
        )
    }
}
