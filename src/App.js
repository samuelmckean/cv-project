import React from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';

import './App.css';
import './styles/dark.css';
import ThemeChange from './components/ThemeChange';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: 'normal',
    };

    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme(theme) {
    this.setState(() => {
      return {
        theme,
      }
    });
  }

  render() {
    return (
      <div className="App container">
        <div className="row">
          <GeneralInfo />
        </div>
        <div className="row">
          <Education />
        </div>
        <div className="row">
          <WorkExperience />
        </div>
        <div className="row">
          <ThemeChange changeTheme={this.changeTheme} />
        </div>
      </div>
    );
  }
}

export default App;
