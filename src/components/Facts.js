import Fact from './Fact'
import React, { Component } from 'react'

export default class Facts extends Component {
    render() {
        return this.props.data.map(data => (
                <Fact data={data} key={data.id} />
        ))
    }
}

