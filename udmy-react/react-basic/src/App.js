import logo from './logo.svg';
import './App.css';
// import Basic from './components/Basic';
// import Basic2 from './components/Basic2';
// import  BasicUseEff from "./components/BasicUseEff";
// import TimerContainer from "./components/TimerContainer";
// import ApiFetch from "./components/ApiFetch";
import AppContext from "./context/AppContext";
// import B from './components/B';
// import BasicReducer from './components/BasicReducer';

import {useReducer} from 'react'
import CompB from './components/CompB';
import Memo from './components/Memo';

const initState = 0;
const reducer = (currentState, action) => {
    switch (action) {
      case 'add_1':
        return currentState + 1;
      case 'multiple_3':
        return currentState * 3;
      case 'reset':
        return initState;
      default:
          return currentState;
    }
};


function App() {
  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <AppContext.Provider value={{countProvided: count, dispatchProvided: dispatch }} >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Basic name="FOOO!"></Basic> */}
          {/* <Basic2></Basic2> */}
          {/* <BasicUseEff /> */}
          {/* <TimerContainer /> */}
          {/* <ApiFetch /> */}
          {/* <B /> */}
          {/* <BasicReducer /> */}
          <CompB />
          Count : {count}

          <Memo />
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
