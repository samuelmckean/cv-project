import React from 'react';
import { format } from 'date-fns';

function EducationDisplay(props) {
  // takes a date string and displays the date in a human-readable format
  function formatDate(dateString) {
    // return empty string if given empty string
    if (dateString === '') {
      return ''
    }
    return format(new Date(dateString + 'T00:00:00'), 'MM/dd/yyyy');
  }

  return (
    <div className="row">
      <div className="row">
        <h3 className="col-md-4">School</h3>
        <h3 className="col-md-4">Study</h3>
        <h3 className="col-md-3">Graduation Date</h3>
        <button className="col-md-1 btn btn-secondary" onClick={props.clickEdit}>Edit</button>
      </div>
      <div className="row">
        <p className="col-md-4">{props.school}</p>
        <p className="col-md-4">{props.study}</p>
        <p className="col-md-4">{formatDate(props.gradDate)}</p>
      </div>
    </div>
  )
}

export default EducationDisplay;
