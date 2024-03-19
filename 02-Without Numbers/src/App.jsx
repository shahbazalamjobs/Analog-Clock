import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourRotation = (hours % 12) * 30 + minutes / 2;
  const minuteRotation = minutes * 6 + seconds / 10;
  const secondRotation = seconds * 6;

  return (
    <div className="container">
      <div className="clock">
        <div
          className="hour-hand"
          style={{ transform: `rotate(${hourRotation}deg)` }}
        ></div>
        <div
          className="minute-hand"
          style={{ transform: `rotate(${minuteRotation}deg)` }}
        ></div>
        <div
          className="second-hand"
          style={{ transform: `rotate(${secondRotation}deg)` }}
        ></div>
        <div className="center-circle"></div>
      </div>
    </div>
  );
}

export default App;
