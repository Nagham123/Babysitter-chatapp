import React, { Component } from 'react'
import Menu from './Menu'
import Header from './Header'
import Portfolios from './Portfolios'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Menu history={this.props.history} />
                <Header />
                <Portfolios babySitterPortfolios={this.props.babySitterPortfolios} />
            </div>
        )
    }
}

export default Home