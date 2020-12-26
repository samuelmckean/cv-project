import React from 'react';

function Contact(props) {

  return (
    <div className="row">
      <div className="row">
        <h3 className="col-md-5">Email</h3>
        <h3 className="col-md-6">Phone</h3>
      </div>
      <div className="row">
        <p className="email col-md-5">{props.email}</p>
        <p className="phone col-md-6">{props.phone}</p>
        <button className="edit col-md-1" onClick={props.clickEdit}>Edit</button>
      </div>
    </div>
  )
}

export default Contact;
