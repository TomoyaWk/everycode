import React, {useReducer} from 'react'


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

const BasicReducer = () => {
  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <div>
      <div>state : {count}</div>
      <button onClick={() => dispatch('add_1') } >add +1</button>
      <button onClick={() => dispatch('multiple_3') } >multiple 3</button>
      <button onClick={() => dispatch('reset') } >reset</button>
    </div>
  )
}

export default BasicReducer;
