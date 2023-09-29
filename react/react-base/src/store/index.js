import { createStore } from 'redux';

// const initialState = {
//   clickButton: false,
// };

const reducer = (state, action) => {
  switch (action.type) {
    case 'CLICK_BUTTON': {
      const newState = { ...state };
      newState.clickButton = !newState.clickButton;
      return newState;
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
