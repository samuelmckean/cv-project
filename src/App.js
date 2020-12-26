import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';

import './App.css';

function App() {
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

export default App;
