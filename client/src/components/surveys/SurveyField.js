// SurveyField contains logic to render a single label and input Field
import React from 'react';

// ({ input }) == (props.input)
export default ({ input, label, meta: { error, touched } }) => {
  // {...input} == all the properties on input object
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
        {touched && error}
    </div>
  )
}

// {touched && error} == if (touched && error) { error }
