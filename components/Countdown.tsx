'use client';
import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';




interface CountdownTimerProps {
    deadline: Date;
    title: string;
  }
  

  const CountdownTimer: React.FC<CountdownTimerProps> = ({ deadline, title }) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<{ [key: string]: number }>({});
  const [completed, setCompleted] = useState<boolean>(false);
  const [confettiEndTime, setConfettiEndTime] = useState<number | null>(null);

  const targetDate = new Date('2024-09-28T23:59:59').getTime();
  const extraTime = 29 * 60 * 60 * 1000; // 29 hours in milliseconds
  const endDate = targetDate + extraTime;

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      if (distance < 0 && !completed) {
        setCompleted(true);
        setShowConfetti(true);
        const confettiEnd = now + 24 * 60 * 60 * 1000; // 24 hours from now
        setConfettiEndTime(confettiEnd);
      } else if (distance >= 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }

      if (confettiEndTime && now > confettiEndTime) {
        setShowConfetti(false);
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, [endDate, completed, confettiEndTime]);

  return (
    <div className="text-center py-10">
      {completed ? (
        <h2 className="text-white text-xl">Welcome to Our Big Day</h2>
      ) : (
        <div className="flex items-start justify-center w-full gap-4 count-down-main">
          {Object.entries(timeLeft).map(([unit, value], index, array) => (
            <React.Fragment key={unit}>
              <div className="timer w-16">
                <div className=" py-4 px-2 rounded-full overflow-hidden">
                  <h3 className="countdown-element font-Cormorant font-semibold text-2xl text-white text-center">
                    {Math.floor(value / 10)}
                    {Math.floor(value % 10)}
                  </h3>
                </div>
                <p className="text-lg font-Cormorant font-normal text-white mt-1 text-center w-full">
                  {unit}
                </p>
              </div>
              {index !== array.length - 1 && (
                <h3 className="font-manrope font-semibold text-2xl text-gray-900">
                  :
                </h3>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
        />
      )}
    </div>
  );
};

export default CountdownTimer;
