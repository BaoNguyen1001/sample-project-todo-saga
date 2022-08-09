import { all } from 'redux-saga/effects';
import authSaga from '../features/auth/login/store/authSaga';
import signUpSaga from '../features/auth/signup/store/signUpSaga';


export default function* rootSaga() {
  yield all([
    authSaga(),
    signUpSaga(),
  ]);
}