import * as types from '../types';

const initialState = {
  clickButton: false,
};

// eslint-disable-next-line default-param-last
export default function (state = initialState, action) {
  switch (action.type) {
    case types.CLICK_BUTTON_SUCCESS: {
      console.log('SUCCESS');
      const newState = { ...state };
      newState.clickButton = !newState.clickButton;
      return newState;
    }
    case types.CLICK_BUTTON_REQUEST: {
      console.log('MEKING REQUEST');
      return state;
    }
    case types.CLICK_BUTTON_FAILURE: {
      console.log('FAILURE');
      return state;
    }
    default:
      return state;
  }
}
