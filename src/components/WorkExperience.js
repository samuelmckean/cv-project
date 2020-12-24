import React from 'react';
import WorkExperienceDisplay from './WorkExperienceDisplay';
import WorkExperienceForm from './WorkExperienceForm';

class WorkExperience extends React.Component {
  constructor() {
    super();

    this.state = {
      company: '',
      title: '',
      startDate: new Date(),
      endDate: new Date(),
      jobs: [],
      editing: true,
    };
  }

  render() {
    return (
      <section>
        <h2>Work Experience</h2>
        {this.state.editing
          ? <WorkExperienceForm 
              company={this.state.company}
              title={this.state.title}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
            />
          : <WorkExperienceDisplay />
        }
        <button id="add-work-experience">Add</button>
      </section>
    )
  }
}

export default WorkExperience;
