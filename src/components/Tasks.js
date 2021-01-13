import React from 'react';

function Tasks(props) {
  const tasks = props.tasks.map((item) => {
      return (
        <li className="task" key={item.key}>
          {item.value}
          {props.deleteButton
            ? <button 
                className="btn btn-secondary" 
                onClick={(e) => props.deleteTask(e, item.key)}>
                Delete
              </button>
            : null
          }
        </li>
      )
    });

  return <ul>{tasks}</ul>
}

export default Tasks;
