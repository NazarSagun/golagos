import React from 'react';

import Beaches from './categoryLayout/Beaches/Beaches';
import Activities from './categoryLayout/Activities/Activities';
import Shops from './categoryLayout/Shop/Shops';
import RealEstate from './categoryLayout/RealEstate/RealEstate';
import Point from './categoryLayout/Points/Point';
import Learn from './categoryLayout/Learn/Learn';
import Accomodation from './categoryLayout/Accomodation/Accomodation';

class Categories extends React.Component {

  renderCategory = () => {
    if (this.props.match.params.name === 'Beaches') {
      return <Beaches />
    } else if (this.props.match.params.name === 'Activities') {
      return <Activities />
    } else if (this.props.match.params.name === 'Real Estate') {
      return <RealEstate />
    } else if (this.props.match.params.name === 'Points of Interest') {
      return <Point />
    } else if (this.props.match.params.name === 'To Learn') {
      return <Learn />
    } else if (this.props.match.params.name === 'Accomodations') {
      return <Accomodation />
    } else if (this.props.match.params.name === 'Shopping') {
      return <Shops />
    }
  }

  render() {
    return (
      <div>
        {this.renderCategory()}
      </div>
    )
  }
}

export default Categories;