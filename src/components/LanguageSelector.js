import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {

  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select A Language:
        <i onClick={() => this.context.onChangeLanguage('english')} className="flag us" />
        <i onClick={() => this.context.onChangeLanguage('dutch')} className="flag nl" />
      </div>
    );
  }
}

export default LanguageSelector
