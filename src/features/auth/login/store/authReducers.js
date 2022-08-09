// import { createSlice } from '@reduxjs/toolkit';
import { AUTH_ACTIONS } from './authActions';

const initialState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
  error: {
    status: false,
    msg: ""
  }
}

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN_REQUEST:
      return {
        ...state,
        logging: true
      }
    case AUTH_ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        logging: false,
        currentUser: action.payload,
        error: { status: false, msg: "" },
      }
    case AUTH_ACTIONS.LOGIN_FAILED:
      return {
        ...state,
        logging: false,
        error: { status: true, msg: action.payload },
      }
    case AUTH_ACTIONS.LOGOUT_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        logging: false,
        error: false,
        currentUser: undefined
      }
    default:
      return state;
  }
}

export default authReducers;

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     login(state, action) {
//       state.logging = true;
//     },
//     loginSuccess(state, action) {
//       state.isLoggedIn = true;
//       state.logging = false;
//       state.currentUser = action.payload;
//       state.error = false;
//     },
//     loginFailed(state, action) {
//       state.logging = false;
//       state.error = true;
//     },

//     logout(state) {
//       state.isLoggedIn = false;
//       state.logging = false;
//       state.error = false;
//       state.currentUser = undefined;
//     },
//   },
// })

// //Actions
// export const authActions = authSlice.actions

// //Selectors
// export const selectIsLoggedIn = (state) => state.auth.isLoggedIn
// export const selectIsLogging = (state) => state.auth.logging
// export const selectIsCurrentUser = (state) => state.auth.currentUser

// //Reducers
// export const authReducers = authSlice.reducer