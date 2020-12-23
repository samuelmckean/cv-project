import React from 'react';
import Contact from './Contact';
import ContactForm from './ContactForm';

class GeneralInfo extends React.Component {
  constructor() {
    super();

    this.state = {
      name: 'Samuel McKean',
      email: 'samuel.mckean@gmail.com',
      phone: '6824652070',
      editing: true,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    this.setState({
      name,
      email,
      phone,
      editing: false,
    });

    event.preventDefault();
  }

  render() {
    return (
      <section>
        <header>
          <h1>{this.state.name}</h1>
        </header>
        {this.state.editing
          ? <ContactForm 
              name={this.state.name} 
              email={this.state.email} 
              phone={this.state.phone} 
              handleSubmit={this.handleSubmit}
            />
          : <Contact email={this.state.email} phone={this.state.phone}/>
        }
      </section>
    )
  }
}

export default GeneralInfo;
