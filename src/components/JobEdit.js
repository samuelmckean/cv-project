import React from 'react';
import FormInput from './FormInput';

function JobEdit(props) {

  return (
    <div className="row">
      <form onSubmit={(e) => props.editSubmit(e, props.id)}>
        <div className="col-md-3">
          <FormInput fieldName="company" value={props.company} />
        </div>
        <div className="col-md-3">
          <FormInput fieldName="title" value={props.title} />
        </div>
        <div className="col-md-3">
          <FormInput fieldName="startDate" value={props.startDate} />
        </div>
        <div className="col-md-2">
          <FormInput fieldName="endDate" value={props.endDate} />
        </div>
        <div className="col-md-1">
          <input type="submit" value="Submit" className="btn btn-secondary"></input>
        </div>
      </form>
    </div>
  )
}

export default JobEdit;
