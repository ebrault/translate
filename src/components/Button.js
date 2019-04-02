import React from 'react'
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {

  static contextType = LanguageContext;

  render() {
    const buttonText = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return (
      <button className="ui button primary">
        {buttonText}
      </button>
    );
  }
}

export default Button
