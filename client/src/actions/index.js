import axios from 'axios';
import { FETCH_USER } from './types';

// get user information
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
};

// send updated user info and get back updated info.
export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
}

// same as:
  //redux-thunk sees this returning a function instead of an action, and delays dispatching the action until promise is resolved.
// export const fetchUser = () => {
//   return function(dispatch) {
//     axios.get('/api/current_user')
//     .then(res => dispatch({ type: FETCH_USER, payload: res }));
//   }
// };
