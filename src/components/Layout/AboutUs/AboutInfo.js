import React from 'react';
import '../MainPage/MainCategories/index.css';

class AboutInfo extends React.Component {

  render() {
    return (
      <main className="about-main">
        <section>
          <h1 className="cat-title">About Us</h1>
          <h3 className="cat-descr">The beaches of Sagres are simple stunning. There are four beaches within walking distance of the town: Praia da Mareta, Praia do Tonel. Praia da Mareta is the most popular one, offering medium surfing waves, a large sandy beach and shelter from the almost constant breeze.</h3>
          <div className="about-container">
            <div className="about-section">
              <h3>Our Mission</h3>
              <div className="about-text">
                <div>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>

                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p><br />
                </div> 
              </div>
            </div>

            <div className="about-section">
              <h3>Our Mission</h3>
              <div className="about-text">
                <div>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                </div> 
              </div>
            </div>
          </div>
        </section>

        <section className="about-work">
          <h2>Why Work With Us</h2>
          <div className="about-work-items">
            <div className="about-work-item">
              <img src="images/icons/about-icon.png" />
              <div>
                <h4>10.000 HAPPY CUSTOMER</h4>
                <span>It has survived not only five centuries, remaining essentially unchanged.</span>
              </div>
            </div>

            <div className="about-work-item">
              <img src="images/icons/about-icon.png" />
              <div>
                <h4>10.000 HAPPY CUSTOMER</h4>
                <span>It has survived not only five centuries, remaining essentially unchanged.</span>
              </div>
            </div>

            <div className="about-work-item">
              <img src="images/icons/about-icon.png" />
              <div className="info-pad">
                <h4>10.000 HAPPY CUSTOMER</h4>
                <span>It has survived not only five centuries, remaining essentially unchanged.</span>
              </div>
            </div>
          </div>
        </section>
        
      </main>
    )
  }
}

export default AboutInfo;