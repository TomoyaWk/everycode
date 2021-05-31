import React, {useState, useEffect} from 'react'

const Timer = () => {
  const [count, setCount] = useState(0);

  const time = () => {
    setCount(count => count + 1);
  };

  useEffect(() => {
    //カウント実行
    const interval = setInterval(time, 1000);

    return () => {
      //timer stop
      clearInterval(interval);
      console.log("clear");
    }
  }, [])

  return (
    <div>
      timer: {count}
    </div>
  )
}

export default Timer
