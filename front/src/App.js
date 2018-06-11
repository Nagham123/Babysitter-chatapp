import React, { Component } from 'react';
import './App.css';
import "./vendor/bootstrap/css/bootstrap.min.css"
import "./vendor/font-awesome/css/font-awesome.min.css"
import "./vendor/magnific-popup/magnific-popup.css"
import "./css/freelancer.min.css"
import Menu from './Menu'
import Header from './Header'
import Portfolios from './Portfolios'
import Home from './Home'
import Signup from './Signup'
import Signin from './Signin'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import './css/style.css'
// import './css/font-awesome.css'
import io from "socket.io-client";
import SocketIOFileClient from "socket.io-file-client";
import Chat from './Chat'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      socket: '',
      babySitterPortfolios: [],
      uploader: '',
    }
  }

  componentDidMount = () => {
    const socket = io('http://localhost:8080')
    const uploader = new SocketIOFileClient(socket);
    this.setState({ socket })
    this.setState({ uploader })
    uploader.on('start', (fileInfo) => {
      console.log('Start uploading', fileInfo);
    });
    uploader.on('stream', (fileInfo) => {
      console.log('Streaming... sent ' + fileInfo.sent + ' bytes.');
    });
    uploader.on('complete', (fileInfo) => {
      console.log('Upload Complete', fileInfo);
    });
    uploader.on('error', (err) => {
      console.log('Error!', err);
    });
    uploader.on('abort', (fileInfo) => {
      console.log('Aborted: ', fileInfo);
    })


    socket.on('signup:success', (babySitterPortfolios) => {
      this.setState({ babySitterPortfolios })
    })
    socket.on('porfolio:list', (babySitterPortfolios) => {
      this.setState({ babySitterPortfolios })
    })
  }
  //image emit
  addMessage = (signupData, image) => {
    if (image) {
      this.state.uploader.upload(image, { data: signupData })
    } else {
      this.state.socket.emit('signup:info', signupData)
    }
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' render={(match) =>
          <Home
            babySitterPortfolios={this.state.babySitterPortfolios}
          />
        } />
        <Route exact path='/signup' render={(match) => <Signup
          history={match.history}
          socket={this.state.socket}
          addMessage={this.addMessage}
        />} />
        <Route exact path='/signin' render={(match) => <Signin history={match.history} />} />
        <Route exact path='/chat' render={(match) => <Chat />} />
      </Switch>
    )
  }

}

export default App;
