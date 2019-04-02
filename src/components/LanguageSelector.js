import React from 'react';

class LanguageSelector extends React.Component {
  render() {
    return (
      <div>
        Select A Language:
        <i onClick={() => this.props.onChangeLanguage('english')} className="flag us" />
        <i onClick={() => this.props.onChangeLanguage('dutch')} className="flag nl" />
      </div>
    );
  }
}

export default LanguageSelector
