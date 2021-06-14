import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';

import { setLocaleWithFallback } from "../../../actions";


class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showItems: false,
      selectedItem: this.props.language
    }
  }
  
  dropDown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems
    }));
  };

  selectItem = item => {
    this.setState({
      selectedItem: item,
      showItems: false
    });
  };

  handleLanguageLinkClick = (e, code) => {
    e.preventDefault();
    this.props.setLocaleWithFallback(code);
  };

  render() {

    console.log(window.location.href)

    return (
      <div className="select-box--box side">
        <div className="select-box--container">
          <div  onClick={this.dropDown} className="select-box--selected-item">
            <img style={{width: '20px', height: '20px'}} src={`images/icons/${this.props.language + ".png"}`} />
          </div>

          <div
            style={{ display: this.state.showItems ? "block" : "none" }}
            className={"select-box--items"}
            
          >
            {Object.values(this.props.supportedLocales).map(code => (
              <div
                key={code}
                
                onClick={e => this.handleLanguageLinkClick(e, code)}
                className={code === this.props.language ? "selected" : ""}
              >
                <div id={code}>
                  {/* <a href={`${window.location.href}lang=${code}`}> */}
                    <img onClick={() => this.selectItem(code)} style={{width: '20px', height: '20px'}} src={`images/icons/${code + ".png"}`} />
                  {/* </a> */}
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    language: !localStorage.lang ? state.i18n.locale : localStorage.lang
  }
}

const mapDispatchToProps =  { setLocaleWithFallback };

export default connect(mapStateToProps, mapDispatchToProps)(Select);