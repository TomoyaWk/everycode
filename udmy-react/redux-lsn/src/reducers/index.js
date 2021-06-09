import { combineReducers } from "redux";
import reducerMeat from "./reducerMeat";
import reducerVegetable from "./reducerVegetable";

//reducerの結合
const rootReducer = combineReducers({
  reducerMeat,
  reducerVegetable
});

export default rootReducer;