import React from 'react';
import JobEdit from './JobEdit';
import Tasks from './Tasks';

function WorkExperienceDisplay(props) {
  const jobs = props.jobs.map((job) => {
    if (job.editing) {
      return (
        <li key={job.id}>
          <JobEdit 
            company={job.company} 
            title={job.title} 
            startDate={job.startDate}
            endDate={job.endDate}
            id={job.id}
            editSubmit={props.editSubmit}
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
            <button className="col-md-1 btn btn-primary" onClick={() => props.clickEdit(job.id)}>Edit</button>
          </div>
          <div className="row">
            <p className="col-md-4">{job.company}</p>
            <p className="col-md-4">{job.title}</p>
            <p className="col-md-4">{job.startDate + ' to ' + job.endDate}</p>
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
