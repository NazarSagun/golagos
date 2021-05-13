import React from 'react';
import RenderCategories from './renderCategories';
import './index.css';


class MainCategories extends React.Component {

  render() {
    
    return (
      <div>
        <h1 className="cat-title">Let us be your guide through the unique experience of Lagos</h1>
        <RenderCategories />
        <h3 className="cat-descr">Overlooking some of the Algarve’s most dramatic scenery, the small, elongated village of Sagres has an end-of-the-world feel, with its sea-carved cliffs high above the frothing ocean strung with wind-whipped fortresses that connect it to Portugal’s rich nautical past. It's the only place in the world where white storks are known to nest on cliff faces.</h3>
      </div>
    )
  }
}

export default MainCategories;