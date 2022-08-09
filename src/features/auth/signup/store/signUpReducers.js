// import { createSlice } from '@reduxjs/toolkit';
import { SIGNUP_ACTIONS } from './signUpActions';

const initialState = {
  error: false,
  loading: false,
  user: undefined
}

const signUpReducers = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_ACTIONS.SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case SIGNUP_ACTIONS.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      }
    case SIGNUP_ACTIONS.SIGNUP_FAILED:
      return {
        ...state,
        loading: false,
        user: undefined,
        error: true
      }
    default:
      return state;
  }
}

export default signUpReducers;

// const signUpSlice = createSlice({
//   name: 'signUp',
//   initialState,
//   reducers: {
//     signUp(state, action) {
//       state.loading = true;
//     },
//     signUpSuccess(state, action) {
//       state.loading = false;
//       state.user = action.payload;
//     },
//     signUpFailed(state, action) {
//       state.loading = false;
//       state.user = undefined;
//       state.error = true;
//     }
//   }
// })


// https://stackoverflow.com/questions/68372311/need-help-to-implement-user-signup-in-redux-saga