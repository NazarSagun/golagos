import React from 'react';
import './index.css';

import {Link} from 'react-router-dom';

class AccomodationsItems extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <React.Fragment>
        
        <section className="category-cards">
          {this.props.accomodations.map(accomodation => {
            return (
              <Link key={accomodation.id} to={`/Accomodation/${accomodation.id}`}>
              <article className="category-cards-items">
                <div>
                  <img className="cards-img" src={`images/categories/${accomodation.img}`} />
                  <h1 className="category-cards-title">{accomodation.name}</h1>
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

export default AccomodationsItems;