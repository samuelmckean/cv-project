import React from 'react';
import uniqid from 'uniqid';

function WorkExperienceDisplay(props) {
  const jobs = props.jobs.map((job) => 
    <li key={uniqid()}>
      <div className="container">
        <div className="company">
          <h3>Company</h3>
          <p>{job.company}</p>
        </div>
        <div className="title">
          <h3>Title</h3>
          <p>{job.title}</p>
        </div><div className="start-date">
          <h3>Start Date</h3>
          <p>{job.startDate}</p>
        </div><div className="end-date">
          <h3>End Date</h3>
          <p>{job.endDate}</p>
        </div>
      </div>
    </li>
  )

  return (
    <ul>{jobs}</ul>
  )
}

export default WorkExperienceDisplay;
