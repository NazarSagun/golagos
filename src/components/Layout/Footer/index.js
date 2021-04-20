import React from 'react';

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
            <img />
            <span>About Us</span>
          </div>
          <div>
            <img />
            <span>Welcome Page</span>
          </div>
          <div>
            <img />
            <span>Sagres</span>
          </div>
        </div>
      </div>
      <div className="footer-rights">GO Sagres 2021 @ All Right Reserved</div>
      </React.Fragment>
    )
  }
}

export default Footer;