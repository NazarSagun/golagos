import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import axios from '../../../../api';

import Loader from '../../../HOC/Loader';

class RenderCategories extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cats: [],
      loading: true
    }
  }

  componentDidMount() {

    axios.post('/category', {lang: this.props.locale})
    .then(data => {
      this.setState({cats: data.data, loading: false})
    })
    .catch(err => {
      console.log(err)
    }) 
  }

  componentDidUpdate(prevProps) {
    
    if (prevProps.locale !== this.props.locale) {

      axios.post('/category', {lang: this.props.locale})
      .then(data => {
        this.setState((state, props) => ({
          cats: data.data,
          loading: false
        }))
      })
      .catch(err => {
        console.log(err)
      })
     
    }
  }

    render() {
      if (this.state.loading) {
        return <Loader />
      }

      return (
            <section className="cards">
        
                {this.state.cats.map(i => (
                  <Link key={i.id} to={`/${i.title}`}>
                  <article className="main-page-article">
                    <img src={`images/categories/${i.img}`} />
                    <div className="article-title">
                      <div>
                        <h1>{i.title}</h1>
                      </div>
                    </div>
                    
                  </article>
                  </Link>
                ))}
            
            </section>
      )
    }
  
}

const mapStateToProps = (state) => {
  return {
    locale: !localStorage.lang ? state.i18n.locale : localStorage.lang
  }
}

export default connect(mapStateToProps, null)(RenderCategories);