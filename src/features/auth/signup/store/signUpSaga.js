import { put, takeLatest, all, call, fork, delay } from 'redux-saga/effects';
import { SIGNUP_ACTIONS } from './signUpActions';
import { push } from '@lagunovsky/redux-react-router';
import { authApis } from '../../../../services/authApis';

function* handleSignUp(payload) {
  try {
    console.log(payload);
    yield delay(1000)
    const { username, password } = payload.payload;
    //call api sign up
    const result = yield call(authApis.signUp, username, password)
    console.log("response register api ", result);
    //put sign up success
    yield put({ type: SIGNUP_ACTIONS.SIGNUP_SUCCESS, result })
    yield put(push('/login'))
    console.log('pushed /login');
  } catch (error) {
    yield put({ type: SIGNUP_ACTIONS.SIGNUP_FAILED, error })
  }
}

function* watchSignUpFlow() {
  console.log('watch sign up flow');
  yield takeLatest(SIGNUP_ACTIONS.SIGNUP_REQUEST, handleSignUp)

}

export default function* signUpSaga() {
  yield fork(watchSignUpFlow);
}
