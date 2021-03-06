import React from 'react';
import _ from 'lodash';

class FormInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.fieldName} className="form-label">
          {_.startCase(this.props.fieldName)}
        </label>
        <input 
          className="form-control"
          type={this.props.type || "text"} 
          name={this.props.fieldName} 
          value={this.state.value} 
          onChange={this.handleChange}>
        </input>
      </div>
    )
  }
}

export default FormInput;
