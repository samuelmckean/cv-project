import React from 'react';
import uniqid from 'uniqid';

function WorkExperienceDisplay(props) {
  const jobs = props.jobs.map((job) => 
    <li key={uniqid()}>
      <div className="row">
        <div className="row">
          <h3 className="col-md-4">Company</h3>
          <h3 className="col-md-4">Title</h3>
          <h3 className="col-md-3">Dates Worked</h3>
          <button className="col-md-1 btn btn-primary" onClick={props.clickEdit}>Edit</button>
        </div>
        <div className="row">
          <p className="col-md-4">{job.company}</p>
          <p className="col-md-4">{job.title}</p>
          <p className="col-md-4">{job.startDate + ' to ' + job.endDate}</p>
        </div>
      </div>
    </li>
  )

  return (
    <ul>{jobs}</ul>
  )
}

export default WorkExperienceDisplay;
