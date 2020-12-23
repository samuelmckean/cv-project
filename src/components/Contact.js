import React from 'react';

function Contact(props) {

  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <div className="email">
        {props.email}
      </div>
      <div className="phone">
        {props.phone}
      </div>
      <button className="edit" onClick={props.clickEdit}>Edit</button>
    </div>
  )
}

export default Contact;
