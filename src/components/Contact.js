import React from 'react';

function Contact(props) {

  return (
    <div className="container">
      <p className="email">
        {props.email}
      </p>
      <p className="phone">
        {props.phone}
      </p>
      <button className="edit" onClick={props.clickEdit}>Edit</button>
    </div>
  )
}

export default Contact;
