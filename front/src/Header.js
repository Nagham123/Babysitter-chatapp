import React from 'react';
import { render } from 'react-dom'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (

      
        <header className="masthead bg-primary text-white text-center">
        <div className="container">
          <img className="pic" src="img\tumblr_inline_p7itok0HDP1qc3261_500.gif" alt />
          <h1 className="text-uppercase mb-0">Babysitter chat app</h1>
          <hr className="star-light" />
          <h2 className="font-weight-light mb-0">Find your best babysitter - Meet new Babysitters - Click and chat</h2>
        </div>
      </header>

    )
  }
}

export default Header;