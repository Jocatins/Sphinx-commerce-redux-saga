import { all, call } from 'redux-saga/effects';

import myUserSagas from './User/userSagas';
export default function* rootSaga() {
  yield all([call(myUserSagas)]);
}
