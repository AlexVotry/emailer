// index of reducers
import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveyReducer from './surveyRuducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveyReducer
});
