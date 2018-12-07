import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'

import App from './components/App';
import reducers from './reducers';


const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

ReactDOM.render(
  // this Provider updates the App component with new state of store
  <Provider store={store}><App /></Provider>, document.querySelector('#root')

);
