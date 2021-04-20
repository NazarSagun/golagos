import React from 'react';
import { connect } from 'react-redux';

import Beaches from './categoryLayout/Beaches/Beaches';
import Activities from './categoryLayout/Activities/Activities';

class Categories extends React.Component {

  // componentDidMount() {
  //   this.props.fetchSubCategories();
  // }

  renderCategory = () => {
    if (this.props.match.params.name === 'Beaches') {
      return <Beaches />
    } else if (this.props.match.params.name === 'Activities') {
      return <Activities />
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

// const mapStateToProps = (state) => {
//   return {subCategories: Object.values(state.categories)}
// }

export default connect(null)(Categories);