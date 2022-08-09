import { combineReducers } from 'redux';
import authReducers from '../features/auth/login/store/authReducers';
import { createRouterReducer } from '@lagunovsky/redux-react-router';
import { browserHistory } from './history';
import signUpReducers from '../features/auth/signup/store/signUpReducers';

const rootReducer = combineReducers({
  router: createRouterReducer(browserHistory),
  auth: authReducers,
  signUp: signUpReducers,
})

export default rootReducer;