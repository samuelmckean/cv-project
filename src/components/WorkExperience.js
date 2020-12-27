import React from 'react';
import WorkExperienceDisplay from './WorkExperienceDisplay';
import WorkExperienceForm from './WorkExperienceForm';

import uniqid from 'uniqid';

class WorkExperience extends React.Component {
  constructor() {
    super();

    this.state = {
      jobs: [],
      adding: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clickEdit = this.clickEdit.bind(this);
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
          id: uniqid(),
          editing: false
        }),
        adding: false,
      }
    });
    event.preventDefault();
  }

  clickEdit(id) {
    // copy jobs from state
    const prevJobs = [...this.state.jobs];
    prevJobs.forEach((item, index, array) => {
      if (item.id === id) {
        array[index].editing = true;
      }
    });
    // set jobs in state as updated array with editing true for the edit clicked
    this.setState({ jobs: prevJobs });
  }

  render() {
    return (
      <section className="col-md-12">
        <h2 className="row">Work Experience</h2>
        <WorkExperienceDisplay jobs={this.state.jobs} clickEdit={this.clickEdit} />
        {this.state.adding
          ? <WorkExperienceForm handleSubmit={this.handleSubmit}/>
          : <button className="col-md-1 btn btn-primary" onClick={() => this.setState({ adding: true })}>Add</button> 
        }
      </section>
    )
  }
}

export default WorkExperience;
