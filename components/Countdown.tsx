
import React, { useState, useEffect } from 'react';
import { CountdownTime } from '../types';

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 md:gap-8 justify-center lg:justify-start">
      {[
        { val: timeLeft.days, label: 'Days' },
        { val: timeLeft.hours, label: 'Hours' },
        { val: timeLeft.minutes, label: 'Mins' },
        { val: timeLeft.seconds, label: 'Secs' },
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="text-3xl md:text-5xl font-black font-mont tabular-nums text-white flex items-baseline">
            {String(item.val).padStart(2, '0')}
            {i < 3 && <span className="text-yellow-500 ml-2 md:ml-4 opacity-30">:</span>}
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-2">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
