import React from 'react';
import FormInput from './FormInput';
import TaskForm from './TasksForm';

function WorkExperienceForm(props) {

  return (
    <div>
      <form name="work-experience-form" onSubmit={props.handleSubmit}>
        <div className="row">
          <div className="col-md-4">
            <FormInput fieldName="company" value={''} />
          </div>
          <div className="col-md-4">
            <FormInput fieldName="title" value={''} />
          </div>
          <div className="col-md-2">
            <FormInput type="date" fieldName="startDate" value={new Date()} />
          </div>
          <div className="col-md-2">
            <FormInput type="date" fieldName="endDate" value={new Date()} />
          </div>
        </div>
        <div className="row">
          <input type="submit" value="Submit" className="btn btn-primary col-md-1"></input>
        </div>
      </form>
      <TaskForm />
    </div>
  )
}

export default WorkExperienceForm;
