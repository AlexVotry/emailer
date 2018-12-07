import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')

    dispatch({ type: FETCH_USER, payload: res.data });
};

// same as:
  //redux-thunk sees this returning a function instead of an action, and delays dispatching the action until promise is resolved.
// export const fetchUser = () => {
//   return function(dispatch) {
//     axios.get('/api/current_user')
//     .then(res => dispatch({ type: FETCH_USER, payload: res }));
//   }
// };
