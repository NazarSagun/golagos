import React from 'react';
import './index.css';

import {fetchBeaches} from '../../../../../actions';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import Loader from '../../../../HOC/Loader';

class LagosBeach extends React.Component {

  _isMounted = false;
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._isMounted = true;
    this.props.fetchBeaches();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {

    if (this.props.isFetching) {
      return <Loader />
    } else {

    return (
      <React.Fragment>

        <section>
          <h1 className="cat-title">Beaches</h1>
          <h3 className="cat-descr">The beaches of Sagres are simple stunning. There are four beaches within walking distance of the town: Praia da Mareta, Praia do Tonel. Praia da Mareta is the most popular one, offering medium surfing waves, a large sandy beach and shelter from the almost constant breeze.</h3>
        </section>
        
        <section className="category-cards lagos">
          {this.props.beaches.map(beach => {
            return (
              <Link key={beach.beach_id} to={`/Beaches/${beach.beach_id}`}>
              <article className="category-cards-items">
                <div>
                  <img className="cards-img" src={`images/categories/${beach.img}`} />
                  <h1 className="category-cards-title">{beach.name}</h1>
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
}

const mapStateToProps = (state) => {
  return {
    beaches: Object.values(state.data.data),
    isFetching: state.data.isFetching
  }
}

export default connect(mapStateToProps, {fetchBeaches})(LagosBeach);