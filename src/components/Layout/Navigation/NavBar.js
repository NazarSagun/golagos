import React from "react";
import "./index.css";

import {NavLink, Link} from 'react-router-dom';
import { connect } from "react-redux";
import Select from './Select';

//i18

import { supportedLocales } from "../../../110n/config";


const nav = [
  {id: 1, link: '/Lagos', name: 'Lagos'},
  {id: 2, link: '/Services', name: 'Services'},
  {id: 3, link: '/Real Estate', name: 'Real Estate'},
  {id: 4, link: '/AboutUs', name: 'About Us'},
];

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

        <Select language={this.props.locale} supportedLocales={supportedLocales} />

        <div onClick={this.props.open} className="nav-icon">
          <img className={`${this.state.menu}`} width="20px" src='images/icons/menu.svg' />
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    locale: state.i18n.locale
  }
}

export default connect(mapStateToProps, null)(NavBar);