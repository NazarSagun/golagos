import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

const categories = [
  {
    id: 1,
    cat_en_name: 'Beaches',
    cat_de_name: 'Beachesde',
    cat_pt_name: 'Praias',
    cat_img: 'main-page.jpg',
  },
  {
    id: 2,
    cat_en_name: 'Accomodations',
    cat_de_name: 'Accomodationsde',
    cat_pt_name: 'Accomodationspt',
    cat_img: 'main-page.jpg',
  },
  {
    id: 3,
    cat_en_name: 'Real Estate',
    cat_de_name: 'Real Estatede',
    cat_pt_name: 'Real Estatept',
    cat_img: 'main-page.jpg',
  },
  {
    id: 4,
    cat_en_name: 'To Learn',
    cat_de_name: 'To Learnde',
    cat_pt_name: 'To Learnpt',
    cat_img: 'main-page.jpg',
  },
  {
    id: 5,
    cat_en_name: 'Shopping',
    cat_de_name: 'Shoppingde',
    cat_pt_name: 'Shoppingpt',
    cat_img: 'main-page.jpg',
  },
  {
    id: 6,
    cat_en_name: 'Points of Interest',
    cat_de_name: 'Designde',
    cat_pt_name: 'Designpt',
    cat_img: 'main-page.jpg',
  },
  {
    id: 7,
    cat_en_name: 'Activities',
    cat_de_name: 'Activitiesde',
    cat_pt_name: 'Activitiespt',
    cat_img: 'main-page.jpg',
  },
  {
    id: 8,
    cat_en_name: 'Food & Drinks',
    cat_de_name: 'Food & Drinksde',
    cat_pt_name: 'Food & Drinkspt',
    cat_img: 'main-page.jpg',
  }
]

class RenderCategories extends React.Component {

  render() {

    return (
      <section className="cards">
        {categories.map(cat => {
          if (this.props.language === 'united-kingdom.png') {
            return (
              
              <article className="main-page-article" key={cat.id}>
                <Link to={`/${cat.cat_en_name}`}>
                <img src={`images/categories/${cat.cat_img}`} />
                <h1 className="article-title">{cat.cat_en_name}</h1>
                </Link>
              </article>
              
            )
          } else if (this.props.language === 'germany.png') {
            return (
              <article className="main-page-article" key={cat.id}>
                <img src={`images/categories/${cat.cat_img}`} />
                <Link to={`/${cat.cat_en_name}`}><h1 className="article-title">{cat.cat_de_name}</h1></Link>
              </article>
            )
          } else if (this.props.language === 'portugal.png') {
            return (
              <article className="main-page-article" key={cat.id}>
                <img src={`images/categories/${cat.cat_img}`} />
                <Link to={`/${cat.cat_en_name}`}><h1 className="article-title">{cat.cat_pt_name}</h1></Link>
              </article>
            )
          }
        })}
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language.selectedLanguage
  }
}

export default connect(mapStateToProps) (RenderCategories);