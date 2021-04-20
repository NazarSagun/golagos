import React from "react";
import "./index.css";
import {changeLanguage} from '../../../actions';

import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import SelectContainer from './SelectContainer';


class NavBar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      opacity: ''
    }
  }

  onScroll = (e) => {
    if(window.scrollY > 100) {
      return this.setState({opacity: 'set-opacity'})
    } else {
      this.setState({opacity: ''})
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
        <div className="nav-logo"><Link to={'/'}>LOGO</Link></div>
        {/* <div className="nav-space" /> */}
        <div className="nav-items">
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/login'}>Lagos</Link></li>
            <li><Link to={'/admin'}>Services</Link></li>
            <li><Link to={'/admin'}>Real Estate</Link></li>
            <li><Link to="/aboutUs">Contacts</Link></li>
          </ul>
          
          
        </div>
        <SelectContainer onChange={this.props.onChange} value={this.props.value} />

       
        <div onClick={this.props.open} className="nav-icon">
          <img src={require('../../../assets/icons/baseline_dehaze_black_18dp.png').default} />
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language.lang
  }
}

export default connect(mapStateToProps, {changeLanguage})(NavBar);