import React from 'react'
import UserCreate from './UserCreate';

class App extends React.Component {
  state = { language: 'english' }

  onChangeLanguage = language => {
    this.setState({ language })
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select A Language:
          <i onClick={() => this.onChangeLanguage('english')} className="flag us" />
          <i onClick={() => this.onChangeLanguage('dutch')} className="flag nl" />
        </div>
        <UserCreate />
      </div>
    );
  }
}

export default App;
