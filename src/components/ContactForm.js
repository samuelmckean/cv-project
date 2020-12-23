import React from 'react';
import FormInput from './FormInput';

function ContactForm(props) {

  return (
    <form name="contact-form" onSubmit={props.handleSubmit}>
      <FormInput fieldName="name" value={props.name} />
      <FormInput fieldName="email" value={props.email} />
      <FormInput fieldName="phone" value={props.phone} />
      <input type="submit" value="Submit"></input>
    </form>
  )
}

export default ContactForm;
