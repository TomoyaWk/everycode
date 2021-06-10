import { SELL_VEGETABLE } from "./actionTypes";

const reducerVagetable = (state=[], action) => {
  switch (action.type) {
    case SELL_VEGETABLE: return {
      ...state,
      numOfVege: state.numOfVege - 1
    };
    default: return state;
  }
}

export default reducerVagetable;
