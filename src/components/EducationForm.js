import React from 'react';
import FormInput from './FormInput';

function EducationForm(props) {

  return (
    <div className="row">
      <form name="education-form" onSubmit={props.handleSubmit}>
        <div className="col-md-4">
          <FormInput fieldName="school" value={props.school} />
        </div>
        <div className="col-md-4">
          <FormInput fieldName="study" value={props.study} />
        </div>
        <div className="col-md-4">
          <FormInput type="date" fieldName="gradDate" value={props.gradDate} />
        </div>
        <input type="submit" value="Submit" className="btn btn-primary"></input>
      </form>
    </div>
  )
}

export default EducationForm;
