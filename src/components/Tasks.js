import React from 'react';

function Tasks(props) {
  const tasks = props.tasks.map((item) => {
      return <li key={item.key}>{item.value}</li>
    });

  return <ul>{tasks}</ul>
}

export default Tasks;
