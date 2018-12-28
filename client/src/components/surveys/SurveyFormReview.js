// SurveyFormReview shows users their form inputs for review
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import formFields from './formFields';
import * as actions from '../../actions';


const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
    const reviewFields = _.map(formFields, ({ label, name }) => {
      return (
        <div key={name}>
        <label>{label}</label>
        <div style={{marginBottom: '5px'}}>{formValues[name]}</div>
        </div>
      );
    });
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div style={{marginBottom: '10px'}}>
        {reviewFields}
      </div>
      <button className="yellow darken-3 btn-flat white-text" onClick={onCancel}>
        Back<i className="material-icons left">arrow_back</i>
      </button>
      <button
        onClick={() => submitSurvey(formValues)}
        className="teal btn-flat right white-text">
        Send Survey<i className="material-icons right">done</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  console.log('state: ', state);
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(SurveyFormReview);
