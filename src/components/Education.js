import React from 'react';

class Education extends React.Component {
  constructor() {
    super();

    this.state = {
      school: '',
      study: '',
      gradDate: Date(),
    }
  }

  render() {
    return (
      <section>
        <h2>Education</h2>
        <div>
          TODO: fill in education section
        </div>
      </section>
    )
  }
}

export default Education;
