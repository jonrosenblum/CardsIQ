import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    // Update the countdown every second
    const timerId = setInterval(updateCountdown, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timerId);
  }, [targetDate]);

  return (
    <div className="flex items-end justify-center z-10">
      <div className="m-2 sm:m-5">
        <span className="text-indigo-600 font-bold text-4xl sm:text-7xl">
          {timeLeft.days}
        </span>
        <p>Days</p>
      </div>
      <div className="m-2 sm:m-5">
        <span className="text-indigo-600 font-bold text-4xl sm:text-7xl">
          {timeLeft.hours}
        </span>
        <p>Hours</p>
      </div>
      <div className="m-2 sm:m-5">
        <span className="text-indigo-600 font-bold text-4xl sm:text-7xl">
          {timeLeft.minutes}
        </span>
        <p>Minutes</p>
      </div>
      <div className="m-2 sm:m-5">
        <span className="text-indigo-600 font-bold text-4xl sm:text-7xl">
          {timeLeft.seconds}
        </span>
        <p>Seconds</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
