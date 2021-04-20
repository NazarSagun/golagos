import React from 'react';
import { connect } from 'react-redux';

import {changeLanguage} from '../../../actions';

const languages = [
  { id: 1, value: 'en', label: 'en', icon: 'english-language.png' },
  { id: 2, value: 'de', label: 'de', icon: 'english-language.png' },
  { id: 3, value: 'pt', label: 'pt', icon: 'english-language.png' }
] 

class SelectContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLanguage: this.props.selectedLanguagem
    }
  }

  onChange = (e) => {
    const lang = this.props.changeLanguage(e.target.value)
    this.setState({currentLanguage: lang})
  }

  componentDidMount() {
    if (!localStorage.lang) {
      this.setState({currentLanguage: this.props.selectedLanguage})
    } else {
      this.setState({currentLanguage: localStorage.lang})
    }
  }

  render() {

    return (
      <div>
        <select className="lang-select" onChange={this.onChange} value={this.state.currentLanguage}>
          {languages.map((lang, index) => (
            <React.Fragment key={index}>
            <option value={lang.value} >{lang.label}</option>
            </React.Fragment>
          ))}
        </select>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language.lang
  }
}

export default connect(mapStateToProps, {changeLanguage})(SelectContainer);

