// import { authActions } from './authReducers';
import { AUTH_ACTIONS } from './authActions';
import { call, cancel, fork, put, take } from 'redux-saga/effects';
import { push } from '@lagunovsky/redux-react-router';
import { authApis } from '../../../../services/authApis';

function* handleLogin(payload) {
  try {
    console.log('handle login')
    const { username, password } = payload.payload
    //call api login
    const result = yield call(authApis.login, username, password)
    console.log("result response login ", result)
    localStorage.setItem('username', result);
    yield put({ type: AUTH_ACTIONS.LOGIN_SUCCESS, result })
    yield put(push('/admin'))

  } catch (error) {
    yield put({ type: AUTH_ACTIONS.LOGIN_FAILED, error })
  }
  //set access_token to localStogare
  //redirect to admin page

}

function* handleLogout() {
  console.log('handle logout')
  //remove access_token from localStogare
  localStorage.removeItem('username')
  //redirect to login page
  yield put(push('/login'))
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = localStorage.getItem('username');
    if (!isLoggedIn) {
      const action = yield take(AUTH_ACTIONS.LOGIN_REQUEST);
      yield fork(handleLogin, action);
    }
    yield take([AUTH_ACTIONS.LOGOUT_REQUEST, AUTH_ACTIONS.LOGIN_FAILED]);
    yield call(handleLogout);
  }
}


export default function* authSaga() {
  yield fork(watchLoginFlow);
}