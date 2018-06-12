import React from 'react';
import { render } from 'react-dom'
import { Link } from 'react-router-dom';

class Signin extends React.Component {
  constructor(props) {
    super(props)
  }
  onFormSubmit = (e) => {
      e.preventDefault()
      const name = e.target.full_name.value
      console.log(name)
  }
  render() {
    return (
      
    <div className="layer signup">
    <a href="/">Back</a>
          <h1>SignIn Form</h1>
            <div className="w3layouts-main sign-in-form">
            <h2> Signin </h2>
              <div className="social_icons agileinfo">
                <ul className="top-links">
                  {/* <li><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#"><i className="fa fa-linkedin" /></a></li> */}
                </ul>
              </div>
              {/* <span>(or)</span>
              <h3>Have an account?</h3> */}
              <form action="#" method="post" onSubmit={this.onFormSubmit}>
                <div className="email">
                {/* <div className="email">
                  <input placeholder="Full-Name" name="full_name" type="text" required />
                  <span className="icons i1"><i aria-hidden="true" /></span>
                </div> */}
                {/* <div className="email">
                  <input placeholder="Location" name="Location" type="text" required />
                  <span className="icons i1"><i aria-hidden="true" /></span>
                </div> */}
                {/* <div className="email">
                  <input placeholder="Experience" name="Experience" type="text" required />
                  <span className="icons i1"><i aria-hidden="true" /></span>
                </div> */}
                  <input placeholder="E-Mail" name="Email" type="email" required />
                  <span className="icons i1"><i className="fa fa-envelope" aria-hidden="true" /></span>
                </div>
                <div className="email">
                  <input placeholder="Password" name="Password" type="password" required />
                  <span className="icons i2"><i className="fa fa-unlock" aria-hidden="true" /></span>
                </div>
                <div className="email">
                  <input placeholder="Retype-Password" name="Password" type="password" required />
                  <span className="icons i2"><i className="fa fa-unlock" aria-hidden="true" /></span>
                </div>
                <input type="submit" defaultValue="Submit" name="login" />
              </form>
            </div>
           
            <div className="clear" />
         
          <div className="footer-w3l">
            {/* <p className="agileinfo"> © 2017 Sign Up and Subscribe Form. All Rights Reserved | Design by <a href="http://w3layouts.com">W3layouts</a></p> */}
          </div>
        </div>

    )
  }
}

export default Signin;