import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function Tasks(props) {
  const tasks = props.tasks.map((item) => {
      return (
        <li className="task" key={item.key}>
          <div className="row">
            {item.value}
            <button className="btn">
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        </li>
      )
    });

  return <ul>{tasks}</ul>
}

export default Tasks;
