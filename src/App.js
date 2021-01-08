import React from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';

import './App.css';
import './styles/dark.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: 'normal',
    };
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
      </div>
    );
  }
}

export default App;
