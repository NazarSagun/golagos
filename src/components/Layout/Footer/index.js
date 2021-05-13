import React from 'react';

import {Link} from 'react-router-dom';

import './index.css';

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div className="footer-container">
        <div>
          <div className="footer-f-title">
            <h5>Get in Touch</h5>
          </div>
          <div className="footer-info">
            <div>
              <img />
              <span>Address</span>
            </div>
            <div>Av. Infarte Hetrique, s/n 8650-355 Sagres, Portugal</div>
          </div>
          <div className="footer-info">
            <span>Phone</span>
            <img />
            <div>+351 920 515 674</div>
          </div>
          <div className="footer-info">
            <span>Email</span>
            <img />
            <div>info@gosagres.pt</div>
          </div>
        </div>
        <div className="mob-margin">
          <div className="footer-s-title">
            <h5>Usefull Links</h5>
          </div>
          <div>
            <Link to="/AboutUs">
              <img src="images/icons/arrow-footer.png" />
              <span>About Us</span>
            </Link>
          </div>
          <div>
            <Link to="/">
              <img src="images/icons/arrow-footer.png" />
              <span>Welcome Page</span>
            </Link>
          </div>
          <div>
            <Link to="/Lagos">
              <img src="images/icons/arrow-footer.png" />
              <span>Lagos</span>
            </Link>
          </div>
          <div>
            <Link to="/Testimonials">
              <img src="images/icons/arrow-footer.png" />
              <span>Testimonials</span>
            </Link>
          </div>
          <div className="footer-social">
            <a href="#"><img src="images/icons/facebook-footer.png" /></a>
            <a href="#"><img src="images/icons/dribbble-footer.png" /></a>
            <a href="#"><img src="images/icons/vimeo-footer.png" /></a>
            <a href="#"><img src="images/icons/twitter-footer.png" /></a>
            <a href="#"><img src="images/icons/behance-footer.png" /></a>
            
          </div>
        </div>
      </div>
      <div className="footer-rights">GO Sagres 2021 @ All Right Reserved</div>
      </React.Fragment>
    )
  }
}

export default Footer;