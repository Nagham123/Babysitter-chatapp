import React from 'react';
import { render } from 'react-dom'

class Portfolios extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (


      <section className="portfolio" id="portfolio">
        <div className="container">
          <h2 className="baby">BABTSITTER PORTFOLIOS</h2>
          <hr className="star-dark mb-5" />
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-1">
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fa fa-search-plus fa-3x" />
                  </div>
                </div>
                <img className="img-1" src="img/portfolio/cabin.png" alt />
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-2">
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fa fa-search-plus fa-3x" />
                  </div>
                </div>
                <img className="img-2" src="img/portfolio/cake.png" alt />
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-3">
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fa fa-search-plus fa-3x" />
                  </div>
                </div>
                <img className="img-3" src="img/portfolio/circus.png" alt />
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-4">
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fa fa-search-plus fa-3x" />
                  </div>
                </div>
                <img className="img-4" src="img/portfolio/game.png" alt />
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-5">
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fa fa-search-plus fa-3x" />
                  </div>
                </div>
                <img className="img-5" src="img/portfolio/safe.png" alt />
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-6">
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fa fa-search-plus fa-3x" />
                  </div>
                </div>
                <img className="img-6" src="img/portfolio/submarine.png" alt />
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Portfolios;