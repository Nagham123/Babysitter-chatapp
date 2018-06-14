import React from 'react';
import { render } from 'react-dom'
import { Link } from 'react-router-dom';


class Signup extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      FullName: " ",
      Location: " ",
      Experience: " ",
      email: " ",
      password: " "
    }

    this.handleBabysitterSubmit = this.handleBabysitterSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this)
  }

  handleBabysitterSubmit(event) {
    event.preventDefault();
    const form = event.target
    let image = form.photo.files
    const imageExists = !!image.length // undefined | File(filename, data, )
    if (!imageExists) {
      return image = null;
    }
    const name = form.Fullname.value
    const location = form.Location.value
    const experience = form.Experience.value
    const email = form.Email.value
    const password = form.Password.value
    const commandType = 'signup_image'
    const signupData = { name, location, experience, email, password, commandType }
    // this.props.socket.emit('signup:info',signupData)
    this.props.addMessage(signupData, imageExists && image)
    this.props.history.push('/')
    // console.log('name: ',name,'location: ',location,'email: ',email,'experience: ',experience,password)
  }

  // handleChange(event){
  //   console.log(event.target.value)
  //   this.setState({FullName:event.target.value})
  // }
  render() {
    return (

      <div className="layer signup">
        <a href="/">Back</a>
        <h1>Sign up</h1>
        <div className="main-agile1">
          <div className="w3layouts-main">
            <h2>Babysitter</h2>
            <div className="social_icons agileinfo">
              <ul className="top-links">
                {/* <li><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#"><i className="fa fa-linkedin" /></a></li> */}
              </ul>
            </div>
            {/* <span>(or)</span>
              <h3>Have an account?</h3> */}
            <form onSubmit={this.handleBabysitterSubmit}>
              <div className="email">
                <div className="upload-photo">
                  <input type="file" id="photo" name="photo" />
                </div>
                <div className="email">
                  <input placeholder="FullName" name="Fullname" type="text" /*value={this.state.FullName}*/ onChange={this.handleChange} required />
                  <span className="icons i1"><i aria-hidden="true" /></span>
                </div>

                <div className="email">
                  <input placeholder="Location" name="Location" type="text" /*value={this.state.Location}*/ onChange={this.handleChange} required />
                  <span className="icons i1"><i aria-hidden="true" /></span>
                </div>
                <div className="email">
                  <input placeholder="Experience" name="Experience" type="text" /*value={this.state.Experience}*/ onChange={this.handleChange} required />
                  <span className="icons i1"><i aria-hidden="true" /></span>
                </div>
                <input placeholder="E-Mail" name="Email" type="email" /*value={this.state.email}*/ onChange={this.handleChange} required />
                <span className="icons i1"><i className="fa fa-envelope" aria-hidden="true" /></span>
              </div>
              <div className="email">
                <input placeholder="Password" name="Password" type="password" /*value={this.state.password}*/ onChange={this.handleChange} required />
                <span className="icons i2"><i className="fa fa-unlock" aria-hidden="true" /></span>
              </div>
              <input type="submit" defaultValue="Submit" name="babysitterSignup" />
            </form>
          </div>



          <div className="main-agile">
            {/* <div className="alert-close"> </div> */}
            <div className="content-wthree">
              {/* <i className="fa fa-paper-plane-o" aria-hidden="true" /> */}
              <h2>Guardian</h2>
              <form onSubmit={this.handleMomSubmit}>
                <div className="email">
                  <input type="email" className="email" name="eamil" placeholder="E-mail" required />
                  <span className="icons i1"><i className="fa fa-envelope" aria-hidden="true" /></span>
                </div>
                <div className="email">
                  <input type="email" className="email" name="eamil" placeholder="Password" required />
                  <span className="icons i2"><i className="fa fa-unlock" aria-hidden="true" /></span>
                  <span className="icons i1"><i className="fa fa-unloc" aria-hidden="true" /></span>
                </div>
                <input type="submit" defaultValue="Submit" name="motherSignuo" />
              </form>
            </div>
          </div>
          <div className="clear" />
        </div>
        <div className="footer-w3l">
          {/* <p className="agileinfo"> © 2017 Sign Up and Subscribe Form. All Rights Reserved | Design by <a href="http://w3layouts.com">W3layouts</a></p> */}
        </div>
      </div>

    )
  }
}

export default Signup;