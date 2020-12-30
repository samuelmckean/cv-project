import React from 'react';
import FormInput from './FormInput';

function ContactForm(props) {

  return (
    <div>
      <form name="contact-form" onSubmit={props.handleSubmit}>
        <div className="row">
          <div className="col-md-4">
            <FormInput fieldName="name" value={props.name} />
          </div>
          <div className="col-md-4">
            <FormInput fieldName="email" value={props.email} />
          </div>
          <div className="col-md-3">
            <FormInput fieldName="phone" value={props.phone} />
          </div>
          <div className="col-md-1 d-flex align-items-end justify-items-end">
            <input type="submit" value="Submit" className="btn btn-primary"></input>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm;
