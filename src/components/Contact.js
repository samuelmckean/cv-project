import React from 'react';

function Contact(props) {

  return (
    <div className="row">
      <div className="row">
        <h3 className="col-md-4">Email</h3>
        <h3 className="col-md-4">Phone</h3>
        <button className="col-md-1 offset-md-3 btn btn-primary" onClick={props.clickEdit}>Edit</button>
      </div>
      <div className="row">
        <p className="email col-md-4">{props.email}</p>
        <p className="phone col-md-4">{props.phone}</p>
      </div>
    </div>
  )
}

export default Contact;
