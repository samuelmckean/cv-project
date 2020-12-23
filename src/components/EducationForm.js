import React from 'react';
import FormInput from './FormInput';

function EducationForm(props) {

  return (
    <form name="education-form">
      <FormInput fieldName="school" value={props.school} />
      <FormInput fieldName="study" value={props.study} />
      <FormInput fieldName="graduationDate" value={props.gradDate} />
      <input type="submit" value="Submit"></input>
    </form>
  )
}

export default EducationForm;
