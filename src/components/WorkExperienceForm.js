import React from 'react';
import FormInput from './FormInput';
import TaskForm from './TaskForm';
import uniqid from 'uniqid';

class WorkExperienceForm extends React.Component {
  constructor(props) {
    super(props);

    const { 
      company,
      title,
      startDate,
      endDate,
      tasks,
      id, } = this.props.job;

    this.state = {
      company,
      title,
      startDate,
      endDate,
      tasks,
      id,
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
          },
          () => {
            // reset input value
            document.getElementsByName('task')[0].value = '';
          });
        }
      });
      event.preventDefault();
    }

  render() {
    return (
      <form onSubmit={(e) => this.props.handleSubmit(e, this.state.tasks, this.state.id)}>
        <div className="row">
          <div className="col-md-3">
            <FormInput fieldName="company" value={this.state.company} />
          </div>
          <div className="col-md-3">
            <FormInput fieldName="title" value={this.state.title} />
          </div>
          <div className="col-md-2">
            <FormInput type="date" fieldName="startDate" value={this.state.startDate} />
          </div>
          <div className="col-md-2">
            <FormInput type="date" fieldName="endDate" value={this.state.endDate} />
          </div>
          <div className="col-md-1 d-flex align-items-end">
            <input type="submit" value="Submit" className="btn btn-primary"></input>
          </div>
        </div>
        <TaskForm 
          tasks={this.state.tasks} 
          addTask={this.addTask} 
          deleteTask={this.deleteTask}
        />
      </form>
    )
  }
}

export default WorkExperienceForm;
