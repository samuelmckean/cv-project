import React from 'react';
import FormInput from './FormInput';
import TaskForm from './TaskForm';
import uniqid from 'uniqid';

class JobEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: this.props.tasks,
    };

    this.addTask = this.addTask.bind(this);
  }

  // adds a new task to the state when Add Task button is clicked
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
      <form onSubmit={(e) => this.props.editSubmit(e, this.props.id, this.state.tasks)}>
        <div className="row">
          <div className="col-md-3">
            <FormInput fieldName="company" value={this.props.company} />
          </div>
          <div className="col-md-3">
            <FormInput fieldName="title" value={this.props.title} />
          </div>
          <div className="col-md-3">
            <FormInput type="date" fieldName="startDate" value={this.props.startDate} />
          </div>
          <div className="col-md-2">
            <FormInput type="date" fieldName="endDate" value={this.props.endDate} />
          </div>
          <div className="col-md-1 d-flex align-items-end">
            <input type="submit" value="Submit" className="btn btn-primary"></input>
          </div>
        </div>
        <TaskForm tasks={this.props.tasks} addTask={this.addTask} />
      </form>
    )
  }
}

export default JobEdit;
