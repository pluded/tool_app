import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER, AUTH_ERROR } from './types';
import setAuthToken from '../../utils/setAuthToken';

export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post('/api/auth/register', userData)
    .then((res) => history.push('/login'))
    .catch((err) => dispatch({ type: AUTH_ERROR, payload: err.response.data }));
};

export const loginUser = (userData) => (dispatch) => {
  axios
    .post('/api/auth/login', userData)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      const decoded = jwtDecode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => dispatch({ type: AUTH_ERROR, payload: err.response.data }));
};

export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};
