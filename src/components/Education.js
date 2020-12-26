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
    const gradDate = new Date(event.target.gradDate.value);
    
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
        <div className="row">
          <h2 className="col-md-12">Education</h2>
        </div>
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
