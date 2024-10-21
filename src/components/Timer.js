// src/components/Timer.js
import React, { useEffect } from 'react';

const Timer = ({ timeLeft, onTimeout }) => {
  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        if (timeLeft === 1) {
          onTimeout();
        }
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [timeLeft, onTimeout]);

  return <div className="timer">Time Left: {timeLeft} seconds</div>;
};

export default Timer;
