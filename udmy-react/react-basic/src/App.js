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

import {useReducer, useState, useCallback} from 'react'
import CompB from './components/CompB';
import Memo from './components/Memo';
import CountDisplay from './components/CountDisplay';
import CountClick from './components/CountClick';

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

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const AddCount1 = useCallback(() => {
    setCount1(prev => prev + 1);
  }, [count1]);

  const AddCount2 = useCallback(() => {
    setCount2(prev => prev + 1);
  }, [count2]);


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
          <br/>
          <CountDisplay name="count1" count={count1}/>
          <CountClick handleClick={ AddCount1 }>AddCount1</CountClick>

          <CountDisplay name="count2" count={count2}/>
          <CountClick handleClick={ AddCount2 }>AddCount2</CountClick>
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
