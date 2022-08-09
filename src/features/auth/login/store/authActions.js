export const AUTH_ACTIONS = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILED: 'LOGIN_FAILED',
  LOGOUT_REQUEST: 'LOGOUT_REQUEST'
};

export const login = (payload) => ({
  type: AUTH_ACTIONS.LOGIN_REQUEST,
  payload
})


export const logout = (payload) => ({
  type: AUTH_ACTIONS.LOGOUT_REQUEST,
  payload
})
