import React from 'react';
import FormInput from './FormInput';

function TaskForm(props) {

  return (
    <form>
      <div className="row">
        <div className="col-md-6">
          <FormInput fieldName="task" value='' />
        </div>
        <div className="col-md-2 d-flex align-items-end">
          <button className="btn btn-secondary">Add Task</button>
        </div>
      </div>
    </form>
  )
}

export default TaskForm;
