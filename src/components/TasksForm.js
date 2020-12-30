import React from 'react';
import FormInput from './FormInput';

function TaskForm(props) {

  return (
    <form>
      <div className="row">
        <div className="col-md-6">
          <FormInput fieldName="task" value='' />
        </div>
        <div className="col-md-1 d-flex align-items-end">
          <input type="submit" value="Add Task" className="btn btn-primary"></input>
        </div>
      </div>
    </form>
  )
}

export default TaskForm;
