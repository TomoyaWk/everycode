import { SELL_VEGETABLE } from "./actionTypes";

const reducerVagetable = (state=[], action) => {
  switch (action.type) {
    case SELL_VEGETABLE: return {
      ...state,
      numOfVege: state.numOfVege - 1
    };
    default: return state;
  }
  
  return (
    <div>
      
    </div>
  )
}

export default reducerVagetable;
