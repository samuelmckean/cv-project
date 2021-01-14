import React from 'react';
import WorkExperienceForm from './WorkExperienceForm';
import Tasks from './Tasks';
import { format } from 'date-fns';

function WorkExperienceDisplay(props) {
  // takes a date string and displays the date in a human-readable format
  function formatDate(dateString) {
    // return empty string if given empty string
    if (dateString === '') {
      return ''
    }
    return format(new Date(dateString + 'T00:00:00'), 'MM/dd/yyyy');
  }

  const jobs = props.jobs.map((job) => {
    if (job.editing) {
      return (
        <li key={job.id}>
          <WorkExperienceForm
            job={job} 
            handleSubmit={props.handleSubmit}
          />
        </li>
      )
    }
    return (
      <li className="job" key={job.id}>
        <div className="row">
          <div className="row">
            <h3 className="col-md-4">Company</h3>
            <h3 className="col-md-4">Title</h3>
            <h3 className="col-md-3">Dates Worked</h3>
            <button className="col-md-1 btn btn-secondary" onClick={() => props.clickEdit(job.id)}>Edit</button>
          </div>
          <div className="row">
            <p className="col-md-4">{job.company}</p>
            <p className="col-md-4">{job.title}</p>
            <p className="col-md-4">
              {formatDate(job.startDate) + ' to ' + formatDate(job.endDate)}
            </p>
          </div>
          <div className="row">
            <Tasks tasks={job.tasks} />
          </div>
        </div>
      </li>
    )
  });

  return (
    <ul>{jobs}</ul>
  )
}

export default WorkExperienceDisplay;
