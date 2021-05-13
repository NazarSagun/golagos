import React from "react";
import "./index.css";
import {fetchLanguage} from '../../../actions';

import {NavLink, Link} from 'react-router-dom';
import { connect } from "react-redux";
import Select from './Select';

const nav = [
  {id: 1, link: '/Lagos', name: 'Lagos'},
  {id: 2, link: '/Services', name: 'Services'},
  {id: 3, link: '/Real Estate', name: 'Real Estate'},
  {id: 4, link: '/AboutUs', name: 'About Us'},
];

const language = [
  { id: 0, value: 'en', icon: 'united-kingdom.png'},
  { id: 1, value: 'de', icon: 'germany.png'},
  { id: 2, value: 'pt', icon: 'portugal.png'}
]

class NavBar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      opacity: '',
      logo: '',
      menu: '',
      dropdawn: false
    };
    this.onClick = this.onClick.bind(this)
    
  }

  onClick = () => {
    if (this.state.dropdawn) {
      this.setState({dropdawn: false})
    } else {
      this.setState({dropdawn: true})
    }
  }

  onScroll = (e) => {
    if(window.scrollY > 100) {
      return this.setState({opacity: 'set-opacity', logo: 'logo-black', menu: 'menu-black'})
    } else {
      this.setState({opacity: '', logo: '', menu: ''})
    }
  }

  componentDidMount() {

    this.props.fetchLanguage()

    window.addEventListener('scroll', this.onScroll);

    return () => {
      window.removeEventListener('scroll', this.onScroll)
    }
  }

  render() {

   
    
    return (
      <nav className={`nav-bar ${this.state.opacity}`}>
        <Link to={'/'}>
          <div className="nav-logo">
          
            <img className={`${this.state.logo}`} src="images/icons/logo-lagos.svg" />
         
          </div>
        </Link>
        <div className="nav-items">
          {nav.map(i => {
            return (
              <div key={i.id}><NavLink exact className="link-hover" activeClassName="active" to={i.link}>{i.name}</NavLink></div> 
            )
          })}
        
        </div>

        <Select language={this.props.language} items={language} />

        <div onClick={this.props.open} className="nav-icon">
          <img className={`${this.state.menu}`} width="20px" src='images/icons/menu.svg' />
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language.selectedLanguage
  }
}

export default connect(mapStateToProps, {fetchLanguage})(NavBar);