import React from 'react';
import FormInput from './FormInput';

function EducationForm(props) {

  return (
    <div>
      <form name="education-form" onSubmit={props.handleSubmit}>
        <div className="row">
          <div className="col-md-4">
            <FormInput fieldName="school" value={props.school} />
          </div>
          <div className="col-md-4">
            <FormInput fieldName="study" value={props.study} />
          </div>
          <div className="col-md-3">
            <FormInput type="date" fieldName="gradDate" value={props.gradDate} />
          </div>
          <div className="col-md-1 d-flex align-items-end">
            <input type="submit" value="Submit" className="btn btn-primary"></input>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EducationForm;
