import React from 'react';
import './index.css';

import {Link} from 'react-router-dom';

class BeachItems extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <React.Fragment>
        
        <section className="beach-cards">
          {this.props.beaches.map(beach => {
            return (
              <Link key={beach.beach_id} to={`/Beaches/${beach.beach_id}`}>
              <article className="b-cards-items">
                <div>
                  {/* <img className="beaches-plus" src="images/sub_categories/white-plus.png" /> */}
                  <img className="beaches-img" src={`images/categories/${beach.img}`} />
                  <h1 className="beach-cards-title">{beach.name}</h1>
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

export default BeachItems;