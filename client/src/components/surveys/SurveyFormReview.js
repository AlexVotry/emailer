// SurveyFormReview shows users their form inputs for review
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import formFields from './formFields';


const SurveyFormReview = ({ onCancel, formValues }) => {
    const reviewFields = _.map(formFields, ({ label, name }) => {
      return (
        <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
        </div>
      );
    });
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div>
        {reviewFields}
      </div>
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back<i className="material-icons left">arrow_back</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  console.log('state: ', state);
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps)(SurveyFormReview);
