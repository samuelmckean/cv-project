import React from 'react';
import WorkExperienceDisplay from './WorkExperienceDisplay';
import WorkExperienceForm from './WorkExperienceForm';

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
          editing: false
        }),
        adding: false,
      }
    });
    event.preventDefault();
  }

  clickEdit() {
    // TODO: allow the user to edit the contents of the selected job
    this.setState({ editing: true });
  }

  render() {
    return (
      <section className="col-md-12">
        <h2 className="row">Work Experience</h2>
        {this.state.adding
          ? <WorkExperienceForm handleSubmit={this.handleSubmit}/>
          : <WorkExperienceDisplay jobs={this.state.jobs}/>
        }
        {!this.state.adding
          ? <button className="col-md-1 btn btn-primary" onClick={() => this.setState({ editing: true })}>Add</button>
          : null
        }
      </section>
    )
  }
}

export default WorkExperience;
