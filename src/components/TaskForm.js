import React from 'react';
import FormInput from './FormInput';
import Tasks from './Tasks';

function TaskForm(props) {

  return (
    <div>
      <Tasks tasks={props.tasks} />
      <div className="row">
        <div className="col-md-6">
          <FormInput fieldName="task" value='' />
        </div>
        <div className="col-md-2 d-flex align-items-end">
          <button className="btn btn-secondary" onClick={props.addTask}>Add Task</button>
        </div>
      </div>
    </div>
  )
}

export default TaskForm;
