import React from 'react';
import FormInput from './FormInput';

function WorkExperienceForm(props) {

  return (
    <div className="row">
      <form name="work-experience-form" onSubmit={props.handleSubmit}>
        <div className="col-md-4">
          <FormInput fieldName="company" value={''} />
        </div>
        <div className="col-md-4">
          <FormInput fieldName="title" value={''} />
        </div>
        <div className="col-md-4">
          <FormInput type="date" fieldName="startDate" value={new Date()} />
        </div>
        <div className="col-md-4">
          <FormInput type="date" fieldName="endDate" value={new Date()} />
        </div>
        <input type="submit" value="Submit" className="btn btn-primary"></input>
      </form>
    </div>
  )
}

export default WorkExperienceForm;
