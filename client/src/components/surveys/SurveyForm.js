import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
    {label: 'Survey Title', name: 'title'},
    {label: 'Subject Line', name: 'subject'},
    {label: 'Email Body', name: 'body'},
    {label: 'Recipient List', name: 'emails'},
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field key={name} component={SurveyField} type="text" label={label} name={name}/>
      );
    });
  }

  render() {
    return (
      <div>
      <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
        {this.renderFields()}
        <Link to="/surveys" className="red btn-flat white-text">
        Cancel
        </Link>
        <button className="teal btn-flat right white-text" type="submit">Next<i className="material-icons right">arrow_forward</i></button>
      </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.emails = validateEmails(values.emails || '');
  
  _.each(FIELDS, ({ name }) => {
    if (!values[name]) {
      errors[name] = `Your must provide a ${name}`;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm);
