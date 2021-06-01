import React, {useContext}from 'react';
import AppContext from "../context/AppContext";

function C() {
  const value = useContext(AppContext);
  return (
    <div>
      { value }
    </div>
  )
}

export default C;
