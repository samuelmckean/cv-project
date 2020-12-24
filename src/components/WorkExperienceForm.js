import React from 'react';
import FormInput from './FormInput';

function WorkExperienceForm(props) {

  return (
    <form name="work-experience-form" onSubmit={props.handleSubmit}>
      <FormInput fieldName="company" value={''} />
      <FormInput fieldName="title" value={''} />
      <FormInput type="date" fieldName="startDate" value={new Date()} />
      <FormInput type="date" fieldName="endDate" value={new Date()} />
      <input type="submit" value="Submit"></input>
    </form>
  )
}

export default WorkExperienceForm;
