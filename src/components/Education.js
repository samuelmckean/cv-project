import React from 'react';
import EducationDisplay from './EducationDisplay';
import EducationForm from './EducationForm';

class Education extends React.Component {
  constructor() {
    super();

    this.state = {
      school: '',
      study: '',
      gradDate: new Date(),
      editing: true,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const school = event.target.school.value;
    const study = event.target.study.value;
    const gradDate = new Date(event.target.gradDate.value);
    
    this.setState({
      school,
      study,
      gradDate,
      editing: false,
    });

    event.preventDefault();
  }

  render() {
    return (
      <section>
        <h2>Education</h2>
        {this.state.editing
          ? <EducationForm 
              school={this.state.school}
              study={this.state.study}
              gradDate={this.state.gradDate}
              handleSubmit={this.handleSubmit}
            />
          : <EducationDisplay 
              school={this.state.school}
              study={this.state.study}
              gradDate={this.state.gradDate}
            />
        }
      </section>
    )
  }
}

export default Education;
