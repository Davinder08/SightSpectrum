import {all, fork} from 'redux-saga/effects';

import {saveUserName} from './UserDetailSaga';

export default function* root_saga() {
  yield all([fork(saveUserName)]);
}
