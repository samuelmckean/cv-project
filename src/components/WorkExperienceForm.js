import React from 'react';
import FormInput from './FormInput';
import TaskForm from './TaskForm';
import uniqid from 'uniqid';

class WorkExperienceForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    }

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

  // TODO: add deleteTask function here or BETTER SOLUTION make components more reusable/composable

  render() {
    return (
      <div>
        <form name="work-experience-form" onSubmit={(e) => this.props.handleSubmit(e, this.state.tasks)}>
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
          <TaskForm tasks={this.state.tasks} addTask={this.addTask} />
        </form>
      </div>
    )
  }
}

export default WorkExperienceForm;
