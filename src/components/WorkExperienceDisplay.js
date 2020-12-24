import React from 'react';
import uniqid from 'uniqid';

function WorkExperienceDisplay(props) {
  const jobs = props.jobs.map((job) => 
    <li key={uniqid()}>
      <div className="job-container">
        <div className="company">
          <h3>Company</h3>
          <div>{job.company}</div>
        </div>
        <div className="title">
          <h3>Title</h3>
          <div>{job.title}</div>
        </div><div className="start-date">
          <h3>Start Date</h3>
          <div>{job.startDate}</div>
        </div><div className="end-date">
          <h3>End Date</h3>
          <div>{job.endDate}</div>
        </div>
      </div>
    </li>
  )

  return (
    <ul>{jobs}</ul>
  )
}

export default WorkExperienceDisplay;
