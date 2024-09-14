import { combineReducers } from 'redux';
import authReducer from './authReducer';
import toolReducer from './toolReducer';
import bookingReducer from './bookingReducer';
import messageReducer from './messageReducer';

export default combineReducers({
  auth: authReducer,
  tools: toolReducer,
  bookings: bookingReducer,
  messages: messageReducer,
});
