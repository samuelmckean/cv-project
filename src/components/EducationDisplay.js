import React from 'react';

function EducationDisplay(props) {

  return (
    <div className="education-container">
      <div className="school">
        <h3>School</h3>
        <div>{props.school}</div>
      </div>
      <div className="study">
        <h3>Study</h3>
        <div>{props.study}</div>
      </div>
      <div className="grad-date">
        <h3>Graduation Date</h3>
        <div>{props.gradDate.toDateString()}</div>
      </div>
    </div>
  )
}

export default EducationDisplay;
