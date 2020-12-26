import React from 'react';
import FormInput from './FormInput';

function ContactForm(props) {

  return (
    <div className="row">
      <form name="contact-form" onSubmit={props.handleSubmit}>
        <div className="col-md-4">
          <FormInput fieldName="name" value={props.name} />
        </div>
        <div className="col-md-4">
          <FormInput fieldName="email" value={props.email} />
        </div>
        <div className="col-md-4">
          <FormInput fieldName="phone" value={props.phone} />
        </div>
      <input type="submit" value="Submit" className="btn btn-primary"></input>
      </form>
    </div>
  )
}

export default ContactForm;
