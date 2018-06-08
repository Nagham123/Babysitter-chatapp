import React from 'react';
import { render } from 'react-dom'
import './css/freelancer.min.css'
class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (

      
        <header className="header-pg">
        <div  className="container">
          <img className="pic4" src="img\tumblr_inline_p7itok0HDP1qc3261_500.gif" alt />
          <h1 style={{color:"black"}} className="text-uppercase mb-0">Babysitter chat app</h1>
          <hr className="star-light" />
          {/* <h2 style={{color:"black"}} className="font-weight-light mb-0">Find your best babysitter - Meet new Babysitters - Click and chat</h2> */}
        </div>
      </header>

    )
  }
}

export default Header;