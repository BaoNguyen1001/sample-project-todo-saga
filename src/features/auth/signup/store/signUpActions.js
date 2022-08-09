export const SIGNUP_ACTIONS = {
  SIGNUP_REQUEST: 'SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SIGNUP_FAILED: 'SIGNUUP_FAILED'
}

export const signUp = (payload) => ({
  type: SIGNUP_ACTIONS.SIGNUP_REQUEST,
  payload,
})