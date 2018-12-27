// SurveyField contains logic to render a single label and input Field
import React from 'react';

// ({ input }) == (props.input)
export default ({ input, label }) => {
  // {...input} == all the properties on input object
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  )
}
