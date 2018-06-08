import React from 'react';
import { render } from 'react-dom'

const SampleBabySitter = ({name,location,experience,email,image}) => {
  return(
    <div className="col-md-6 col-lg-4">
    {/* <h3 style = {{color: 'black'}}>{title}</h3> */}
    <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-1">
      <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
        <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
          <a href="/chat"><i className="fab fa-rocketchat" /></a>
        </div>
      </div>
      <img className="img-1" src={"//localhost:8080/images/"+ image} alt />
      <h2>{name}</h2>
      <p>{experience}</p>
      <p>{location}</p>
      <a>{email}</a>
    </a>
  </div>
  )
}


class Portfolios extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // images: [
      //   {
      //     title: "test1",
      //     source: "cabin.png"
      //   },
      //   {
      //     title: "test2",
      //     source: "cake.png"
      //   },{
      //     title: "test3",
      //     source: "circus.png"
      //   },{
      //     title: "test4",
      //     source: "game.png"
      //   },{
      //     title: "test5",
      //     source: "safe.png"
      //   },{
      //     title: "test6",
      //     source: "submarine.png"
      //   }
      // ]
    } 
  }
  render() {
    return (


      <section className="portfolio" id="portfolio">
        <div className="container">
          <h2 className="baby">BABTSITTER PORTFOLIOS</h2>
          <hr className="star-dark mb-5" />
          <div className="row">
            {this.props.babySitterPortfolios ? this.props.babySitterPortfolios.map((portfolio) => <SampleBabySitter {...portfolio} />) : null}
          </div>
        </div>
      </section>
    )
  }
}

export default Portfolios;