import React, { useState, useEffect } from 'react';

const Clock = ({ showSeconds }) => {
  const getTimeString = (showSeconds) => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return showSeconds ? `${hours}:${minutes}:${seconds}` : `${hours}:${minutes}`;
  };

  const [time, setTime] = useState(getTimeString(showSeconds));

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(getTimeString(showSeconds));
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [showSeconds]);

  return (
    <div id="clock">
      {time}
    </div>
  );
};

export default Clock;