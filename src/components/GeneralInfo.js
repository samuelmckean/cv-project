import React from 'react';
import Contact from './Contact';

class GeneralInfo extends React.Component {
  constructor() {
    super();

    this.state = {
      name: 'Samuel McKean',
      email: 'samuel.mckean@gmail.com',
      phone: '6824652070',
    }
  }

  render() {
    return (
      <section>
        <header>
          <h1>{this.state.name}</h1>
        </header>
        <Contact email={this.state.email} phone={this.state.phone}/>
      </section>
    )
  }
}

export default GeneralInfo;
