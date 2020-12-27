import React from 'react';
import FormInput from './FormInput';

class JobEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    return (
      <div className="row">
        <form>
          <div className="col-md-3">
            <FormInput fieldName="company" value={this.props.company} />
          </div>
          <div className="col-md-3">
            <FormInput fieldName="title" value={this.props.title} />
          </div>
          <div className="col-md-3">
            <FormInput fieldName="startDate" value={this.props.startDate} />
          </div>
          <div className="col-md-2">
            <FormInput fieldName="endDate" value={this.props.endDate} />
          </div>
          <div className="col-md-1">
            <input type="submit" value="Submit" className="btn btn-secondary"></input>
          </div>
        </form>
      </div>
    )
  }
}

export default JobEdit;
