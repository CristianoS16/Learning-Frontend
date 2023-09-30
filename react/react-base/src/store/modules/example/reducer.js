const initialState = {
  botaoClicado: false,
};

// eslint-disable-next-line default-param-last
export default function (state = initialState, action) {
  switch (action.type) {
    case 'CLICK_BUTTON': {
      const newState = { ...state };
      newState.clickButton = !newState.clickButton;
      return newState;
    }
    default:
      return state;
  }
}
