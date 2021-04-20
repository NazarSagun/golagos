import React from 'react';
import RenderCategories from './renderCategories';
import { connect } from 'react-redux';
import './index.css';

import {fetchCategories} from '../../../../actions';

import Loader from '../../../HOC/Loader';

class MainCategories extends React.Component {

  // _isMounted = false;

  // componentDidMount() {
  //   this._isMounted = false;
  //   this.props.fetchCategories();
  // }

  // componentWillUnmount() {
  //   this._isMounted = false;
  // }

  render() {
    
    return (
      <div>
        <h1 className="cat-title">Let us be your guide through the unique experience of Sagres</h1>
        <RenderCategories 
            categories={this.props.categories}
          />
        <h3 className="cat-descr">Overlooking some of the Algarve’s most dramatic scenery, the small, elongated village of Sagres has an end-of-the-world feel, with its sea-carved cliffs high above the frothing ocean strung with wind-whipped fortresses that connect it to Portugal’s rich nautical past. It's the only place in the world where white storks are known to nest on cliff faces.</h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language.lang
  }
}

export default connect(mapStateToProps, {fetchCategories})(MainCategories);