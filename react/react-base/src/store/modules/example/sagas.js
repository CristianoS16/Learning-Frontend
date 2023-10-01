import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

const request = () =>
  // eslint-disable-next-line no-unused-vars
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

function* exampleRequest() {
  try {
    yield call(request);
    yield put(actions.clickButtonSuccess);
  } catch {
    toast.error('Error to make request.');
    yield put(actions.clickButtonFailure);
  }
}

export default all([takeLatest(types.CLICK_BUTTON_REQUEST, exampleRequest)]);
