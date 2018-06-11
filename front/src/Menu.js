import React from 'react';
import { render } from 'react-dom'

class Menu extends React.Component {
  constructor(props) {
    super(props)
  }

  signup = () => {
    this.props.history.push('/signup')
  }
  render() {
    return (

      <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">HERA</a>
          <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
      <i className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/chat">Mothers chat room </a>
               </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Babysitters Portfolios</a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/signin">login</a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/signup">Signup </a>
                {/* <button onClick={this.signup}>SignUp</button> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Menu;