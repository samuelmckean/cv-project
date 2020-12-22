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
          {this.state.name}
        </header>
        TODO: fill in GeneralInfo
      </section>
    )
  }
}

export default GeneralInfo;
