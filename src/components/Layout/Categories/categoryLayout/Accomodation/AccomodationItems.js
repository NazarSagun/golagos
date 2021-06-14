import React from 'react';
import './index.css';

import {Link} from 'react-router-dom';

class AccomodationItems extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    console.log(this.props, "props")

    return (
      <React.Fragment>
        
        <section className="category-cards">
          {this.props.accomodation.map(acc => {
            return (
              <Link key={acc.id} to={`/Accomodation/${acc.name}`}>
              <article className="category-cards-items">
                <div>
                  <img className="cards-img" src={`images/categories/${acc.img}`} />
                  <h1 className="category-cards-title">{acc.name}</h1>
                </div>
              </article>
              </Link>
            )
          })}
        </section>
       
        
      </React.Fragment> 
    )
  }
}

export default AccomodationItems;