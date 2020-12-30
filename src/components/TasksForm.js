import React from 'react';
import FormInput from './FormInput';
import Tasks from './Tasks';
import uniqid from 'uniqid';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tasks: []
    };

    this.addTask = this.addTask.bind(this);
  }

  addTask(event) {
    const task = document.getElementsByName('task')[0].value;
    this.setState((state) => {
      return {
        tasks: state.tasks.concat([{
          value: task,
          key: uniqid(),
        }]),
      }
    },
    () => {
      // reset input value
      document.getElementsByName('task')[0].value = '';
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Tasks tasks={this.state.tasks} />
          <div className="row">
            <div className="col-md-6">
              <FormInput fieldName="task" value='' />
            </div>
            <div className="col-md-2 d-flex align-items-end">
              <button className="btn btn-secondary" onClick={this.addTask}>Add Task</button>
            </div>
          </div>
      </div>
    )
  }
}

export default TaskForm;
