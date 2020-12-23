import React from 'react';
import Contact from './Contact';
import ContactForm from './ContactForm';

class GeneralInfo extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      phone: '',
      editing: true,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clickEdit = this.clickEdit.bind(this);
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

  clickEdit() {
    this.setState({ editing: true });
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
          : <Contact email={this.state.email} phone={this.state.phone} clickEdit={this.clickEdit} />
        }
      </section>
    )
  }
}

export default GeneralInfo;
