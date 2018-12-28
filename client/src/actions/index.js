import axios from 'axios';
import { FETCH_USER } from './types';

// get user information
//redux-thunk sees this returning a function instead of an action, and delays dispatching the action until promise is resolved.
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
};

// send updated user info and get back updated info.
export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
}

export const submitSurvey = (values, history) => async dispatch => {
  console.log('history: ', history);
  const res = await axios.post('/api/surveys', values);
  // following will navigate to /surveys after action is taken:
  history.push('/surveys');
  dispatch( { type: FETCH_USER, payload: res.data });
};

// same as:
// export const fetchUser = () => {
//   return function(dispatch) {
//     axios.get('/api/current_user')
//     .then(res => dispatch({ type: FETCH_USER, payload: res }));
//   }
// };
