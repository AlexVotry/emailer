import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'

import App from './components/App';
import reducers from './reducers';

// temporary to test emailer
import axios from 'axios';
window.axios = axios;
// in browser console:
// const survey = { title: 'my title', subject: 'my subject', recipients: 'alexvotry@gmail.com, me@alexvotry.info', body: 'the body of html' };
//axios.post('/api/surveys', survey);

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

ReactDOM.render(
  // this Provider updates the App component with new state of store
  <Provider store={store}><App /></Provider>, document.querySelector('#root')

);
