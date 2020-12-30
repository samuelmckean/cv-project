import React from 'react';
import FormInput from './FormInput';
import TaskForm from './TasksForm';

function WorkExperienceForm(props) {

  return (
    <div>
      <form name="work-experience-form" onSubmit={props.handleSubmit}>
        <div className="row">
          <div className="col-md-3">
            <FormInput fieldName="company" value={''} />
          </div>
          <div className="col-md-3">
            <FormInput fieldName="title" value={''} />
          </div>
          <div className="col-md-2">
            <FormInput type="date" fieldName="startDate" value={new Date()} />
          </div>
          <div className="col-md-2">
            <FormInput type="date" fieldName="endDate" value={new Date()} />
          </div>
          <div className="col-md-1 d-flex align-items-end">
            <input type="submit" value="Submit" className="btn btn-primary"></input>
          </div>
        </div>
      </form>
      <TaskForm />
    </div>
  )
}

export default WorkExperienceForm;
