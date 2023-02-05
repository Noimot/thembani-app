import React, { useState, useEffect } from "react";

const Timer = () => {
  const [counter, setcounter] = useState(59);
  useEffect(() => {
    const timer =
      counter > 0 &&
      setInterval(() => {
        setcounter(counter - 1);
      }, 1000);
    return () => clearInterval(timer);
  }, [counter]);
  return <div>Timer</div>;
};

export default Timer;
