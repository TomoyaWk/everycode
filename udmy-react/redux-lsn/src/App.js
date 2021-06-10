import logo from './logo.svg';
import React, {useReducer} from 'react'
import './App.css';
import rootReducer from "./reducers/index";
import {SELL_MEAT, SELL_VEGETABLE} from "./reducers/actionTypes";

function App() {
  const intialState = {
    reducerMeat : {numOfMeat: 30},
    reducerVegetable : {numOfVege: 25}
  };

  const [state, dispatch] = useReducer(rootReducer, intialState);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>MEAT: {state.reducerMeat.numOfMeat}</p>
        <p>VEGITABLE: {state.reducerVegetable.numOfVege}</p>


        <button onClick={() => dispatch({type: SELL_MEAT})}>SELL MEAT</button>
        <button onClick={() => dispatch({type: SELL_VEGETABLE})}>SELL VEGETABLE</button>

      </header>
    </div>
  );
}

export default App;

