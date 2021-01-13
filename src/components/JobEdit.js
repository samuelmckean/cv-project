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
    this.deleteTask = this.deleteTask.bind(this);
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

  // deletes a task from the state when the delete button for that task is clicked
  deleteTask(event, id) {
    // get current tasks from state
    const prevTasks = this.state.tasks;
    // iterate through tasks
    prevTasks.forEach((item, index, array) => {
      // when id match found, set state to array except at the current index
      if (item.key === id) {
        this.setState({
          tasks: array.slice(0, index).concat(array.slice(index + 1)),
        });
      }
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
        <TaskForm tasks={this.state.tasks} addTask={this.addTask} deleteTask={this.deleteTask}/>
      </form>
    )
  }
}

export default JobEdit;
