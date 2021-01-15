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

  // sorts jobs by endDate using insertion sort
  jobSort(jobs) {
    for(let i = 1; i < jobs.length; i++) {
      // get element to insert
      const key = jobs[i];
      // loop backwards through sorted part of array
      let j = i - 1;
      while (j >= 0 && jobs[j].endDate <= key.endDate) {
        // shift elements by one space to the right to make room for new element
        jobs[j + 1] = jobs[j];
        j = j - 1;
      }
      jobs[j + 1] = key;
    }
    return jobs;
  }

  // updates the state when the user submits a new job
  handleSubmit(event, tasks, id) {
    const company = event.target.company.value;
    const title = event.target.title.value;
    const startDate = event.target.startDate.value;
    const endDate = event.target.endDate.value;
    // get current jobs in state
    const prevJobs = this.state.jobs;
    // iterate thru jobs and check if job with same id already exists
    for (let i = 0; i < prevJobs.length; i++) {
      // if it does exist, update the existing job
      if (id === prevJobs[i].id) {
        prevJobs[i] = {
          company,
          title,
          startDate,
          endDate,
          id,
          tasks,
        };
        this.setState({
          jobs: this.jobSort(prevJobs),
        });
        return;
      }
    }
    // if not, append a the new job to the list
    this.setState({
      jobs: this.jobSort(prevJobs.concat({
        company,
        title,
        startDate,
        endDate,
        id,
        tasks,
      })),
      adding: false,
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
        <WorkExperienceDisplay 
          jobs={this.state.jobs} 
          clickEdit={this.clickEdit} 
          handleSubmit={this.handleSubmit}
        />
        {this.state.adding
          ? <WorkExperienceForm 
              handleSubmit={this.handleSubmit} 
              job={{
                company: '',
                title: '',
                startDate: new Date(),
                endDate: new Date(),
                id: uniqid(),
                tasks: [],
              }}
            />
          : <button 
              className="col-md-1 btn btn-primary" 
              onClick={() => this.setState({ adding: true })}>
              Add
            </button> 
        }
      </section>
    )
  }
}

export default WorkExperience;
