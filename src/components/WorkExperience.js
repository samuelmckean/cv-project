import React from 'react';
import WorkExperienceDisplay from './WorkExperienceDisplay';
import WorkExperienceForm from './WorkExperienceForm';

class WorkExperience extends React.Component {
  constructor() {
    super();

    this.state = {
      jobs: [],
      editing: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const company = event.target.company.value;
    const title = event.target.title.value;
    const startDate = event.target.startDate.value;
    const endDate = event.target.endDate.value;

    this.setState((state) => {
      return {
        jobs: state.jobs.concat({
          company,
          title,
          startDate,
          endDate,
        }),
        editing: false,
      }
    });
    event.preventDefault();
  }

  render() {
    return (
      <section>
        <h2>Work Experience</h2>
        {this.state.editing
          ? <WorkExperienceForm handleSubmit={this.handleSubmit}/>
          : <WorkExperienceDisplay jobs={this.state.jobs}/>
        }
        {!this.state.editing
          ? <button id="add-work-experience" onClick={() => this.setState({ editing: true })}>Add</button>
          : null
        }
      </section>
    )
  }
}

export default WorkExperience;
