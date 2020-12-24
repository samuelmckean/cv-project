import React from 'react';

function EducationDisplay(props) {

  return (
    <div className="container">
      <div className="school">
        <h3>School</h3>
        <p>{props.school}</p>
      </div>
      <div className="study">
        <h3>Study</h3>
        <p>{props.study}</p>
      </div>
      <div className="grad-date">
        <h3>Graduation Date</h3>
        <p>{props.gradDate.toDateString()}</p>
      </div>
    </div>
  )
}

export default EducationDisplay;
