import React from 'react';

class GeneralInfo extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      phone: '',
    }
  }

  render() {
    return (
      <section>
        <header>
          <h1>{this.state.name}</h1>
        </header>
        TODO: fill in GeneralInfo
      </section>
    )
  }
}

export default GeneralInfo;
