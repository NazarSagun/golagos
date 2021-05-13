import React from 'react';
import { connect } from 'react-redux';

import {changeLanguage} from '../../../actions';


class Select extends React.Component {
  constructor(props) {
    super(props);
    this.onLanguageChange = this.onLanguageChange.bind(this)
    this.state = {
      showItems: false,
      selectedItem: this.props.language
    }
  }
// this.props.items[0].icon
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

  onLanguageChange(e) {
    this.props.changeLanguage(e)
  }

  render() {

    // console.log(this.props.language)

    return (
      <div className="select-box--box side">
        <div className="select-box--container">
          <div  onClick={this.dropDown} className="select-box--selected-item">
            <img style={{width: '20px', height: '20px'}} src={`images/icons/${this.props.language}`} />
          </div>

          <div
            style={{ display: this.state.showItems ? "block" : "none" }}
            className={"select-box--items"}
            
          >
            {this.props.items.map(item => (
              <div
                key={item.id}
                onClick={() => this.selectItem(item.icon)}
                className={this.state.selectedItem === item ? "selected" : ""}
              >
              <img onClick={this.onLanguageChange} id={item.icon} style={{width: '20px', height: '20px'}} src={`images/icons/${item.icon}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguage: e => dispatch(changeLanguage(e)),
  }
}

export default connect(null, mapDispatchToProps)(Select);

