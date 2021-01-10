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
    this.clickEdit = this.clickEdit.bind(this);
  }

  handleSubmit(event) {
    const school = event.target.school.value;
    const study = event.target.study.value;
    const gradDate = event.target.gradDate.value;
    
    this.setState({
      school,
      study,
      gradDate,
      editing: false,
    });

    event.preventDefault();
  }

  clickEdit() {
    this.setState({ editing: true });
  }

  render() {
    return (
      <section className="col-md-12">
        <h2 className="row">Education</h2>
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
              clickEdit={this.clickEdit}
            />
        }
      </section>
    )
  }
}

export default Education;
