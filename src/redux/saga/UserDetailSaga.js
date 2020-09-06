import * as constants from '../../utils/Constants';
import {put, takeLatest} from 'redux-saga/effects';

export function* saveUserName() {
  yield takeLatest(constants.UPDATING_NAME, saveUserDetail);
}

function* saveUserDetail(action) {
  try {
    console.log(action);
    yield put({
      type: constants.NAME_UPDATED,
      payload: action.payload,
    });
  } catch (e) {
    console.log(e);
  }
}
