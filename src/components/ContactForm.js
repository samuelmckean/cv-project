import React from 'react';

function ContactForm(props) {

  return (
    <form name="contact-form">
      <div>
        <label for="name">Name</label>
        <input type="text" name="name" value={props.name}></input>
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" name="email" value={props.email}></input>
      </div>
      <div>
        <label for="phone">Phone</label>
        <input type="tel" name="phone" value={props.phone}></input>
      </div>
      <input type="submit" value="Submit"></input>
    </form>
  )
}

export default ContactForm;
