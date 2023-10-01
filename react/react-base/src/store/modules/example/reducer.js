import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

// eslint-disable-next-line default-param-last
export default function (state = initialState, action) {
  switch (action.type) {
    case types.CLICK_BUTTON_SUCCESS: {
      const newState = { ...state };
      newState.clickButton = !newState.clickButton;
      return newState;
    }
    case types.CLICK_BUTTON_REQUEST: {
      console.log('fazendo requisição');
      return state;
    }
    case types.CLICK_BUTTON_FAILURE: {
      console.log('falhou');
      return state;
    }
    default:
      return state;
  }
}
