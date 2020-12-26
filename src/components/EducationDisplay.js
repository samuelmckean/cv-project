import React from 'react';

function EducationDisplay(props) {

  return (
    <div className="row">
      <div className="row">
        <h3 className="col-md-4">School</h3>
        <h3 className="col-md-4">Study</h3>
        <h3 className="col-md-3">Graduation Date</h3>
        <button className="col-md-1" onClick={props.clickEdit}>Edit</button>
      </div>
      <div className="row">
        <p className="col-md-4">{props.school}</p>
        <p className="col-md-4">{props.study}</p>
        <p className="col-md-4">{props.gradDate.toDateString()}</p>
      </div>
    </div>
  )
}

export default EducationDisplay;
