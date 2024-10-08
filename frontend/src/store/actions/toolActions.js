import axios from 'axios';
import { GET_TOOLS, TOOLS_ERROR } from './types';

export const getTools = () => (dispatch) => {
  axios
    .get('/api/tools')
    .then((res) => dispatch({ type: GET_TOOLS, payload: res.data }))
    .catch((err) => dispatch({ type: TOOLS_ERROR, payload: err.response.data }));
};
