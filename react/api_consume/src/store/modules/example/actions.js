import * as types from '../types';

export function clickButtonRequest() {
  return {
    type: types.CLICK_BUTTON_REQUEST,
  };
}

export function clickButtonSuccess() {
  return {
    type: types.CLICK_BUTTON_SUCCESS,
  };
}

export function clickButtonFailure() {
  return {
    type: types.CLICK_BUTTON_FAILURE,
  };
}
