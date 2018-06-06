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

      </Switch>
    )
  }

}


// class App extends Component {
//   render() {
//     return (
//       <Router>

//       <div className="App">

//           <Route exact path="/" component={Header} />
//           <Route exact path="/Signup" component={Signup} />

//         <Menu />
//         {/* <Header /> */}
//         <Portfolios />






//         {/* 
//         <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
//           <div className="container">
//             <a className="navbar-brand js-scroll-trigger" href="#page-top">BABTSITTER FINDER</a>
//             <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
//               Menu
//               <i className="fa fa-bars" />
//             </button>
//             <div className="collapse navbar-collapse" id="navbarResponsive">
//               <ul className="navbar-nav ml-auto">
//                 <li className="nav-item mx-0 mx-lg-1">
//                   <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Babysitters Portfolios</a>
//                 </li>
//                 <li className="nav-item mx-0 mx-lg-1">
//                   <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">login</a>
//                 </li>
//                 <li className="nav-item mx-0 mx-lg-1">
//                   <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Signup </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav> */}


//         {/* 
//         <header className="masthead bg-primary text-white text-center">
//           <div className="container">
//             <img className="pic" src="img/profile.png" alt />
//             <h1 className="text-uppercase mb-0">Babysitter chat app</h1>
//             <hr className="star-light" />
//             <h2 className="font-weight-light mb-0">Find your best babysitter - Meet new Babysitters - Click and chat</h2>
//           </div>
//         </header> */}



//         {/* 
//         Portfolio Grid Section
//         <section className="portfolio" id="portfolio">
//           <div className="container">
//             <h2 className="baby">BABTSITTER PORTFOLIOS</h2>
//             <hr className="star-dark mb-5" />
//             <div className="row">
//               <div className="col-md-6 col-lg-4">
//                 <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-1">
//                   <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
//                     <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
//                       <i className="fa fa-search-plus fa-3x" />
//                     </div>
//                   </div>
//                   <img className="img-1" src="img/portfolio/cabin.png" alt />
//                 </a>
//               </div>
//               <div className="col-md-6 col-lg-4">
//                 <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-2">
//                   <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
//                     <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
//                       <i className="fa fa-search-plus fa-3x" />
//                     </div>
//                   </div>
//                   <img className="img-2" src="img/portfolio/cake.png" alt />
//                 </a>
//               </div>
//               <div className="col-md-6 col-lg-4">
//                 <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-3">
//                   <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
//                     <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
//                       <i className="fa fa-search-plus fa-3x" />
//                     </div>
//                   </div>
//                   <img className="img-3" src="img/portfolio/circus.png" alt />
//                 </a>
//               </div>
//               <div className="col-md-6 col-lg-4">
//                 <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-4">
//                   <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
//                     <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
//                       <i className="fa fa-search-plus fa-3x" />
//                     </div>
//                   </div>
//                   <img className="img-4" src="img/portfolio/game.png" alt />
//                 </a>
//               </div>
//               <div className="col-md-6 col-lg-4">
//                 <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-5">
//                   <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
//                     <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
//                       <i className="fa fa-search-plus fa-3x" />
//                     </div>
//                   </div>
//                   <img className="img-5" src="img/portfolio/safe.png" alt />
//                 </a>
//               </div>
//               <div className="col-md-6 col-lg-4">
//                 <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-6">
//                   <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
//                     <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
//                       <i className="fa fa-search-plus fa-3x" />
//                     </div>
//                   </div>
//                   <img className="img-6" src="img/portfolio/submarine.png" alt />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section> */}




//       </div>
//       </Router>
//     );
//   }
// }

export default App;
