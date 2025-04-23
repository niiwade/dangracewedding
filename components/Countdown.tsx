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

  // Use the provided deadline prop instead of hardcoded date
  const targetDate = deadline.getTime();

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0 && !completed) {
        setCompleted(true);
        setShowConfetti(true);
        // Keep confetti running longer for the wedding celebration
        const confettiEnd = now + 7 * 24 * 60 * 60 * 1000; // 7 days from now
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
  }, [targetDate, completed, confettiEndTime]);

  return (
    <div className="text-center py-4">
      {completed ? (
        <div className="space-y-4">
          <h2 className="text-white text-3xl font-serif italic animate-pulse">We are happily married!</h2>
          <p className="text-white text-lg">Thank you for celebrating with us</p>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full gap-2 sm:gap-4 count-down-main">
          {Object.entries(timeLeft).map(([unit, value], index, array) => (
            <React.Fragment key={unit}>
              <div className="timer w-14 sm:w-20">
                <div className="bg-white/20 backdrop-blur-sm py-3 px-1 rounded-lg overflow-hidden border border-white/30">
                  <h3 className="countdown-element font-serif font-semibold text-xl sm:text-3xl text-white text-center">
                    {String(value).padStart(2, '0')}
                  </h3>
                </div>
                <p className="text-sm sm:text-lg font-serif font-normal text-white mt-1 text-center w-full capitalize">
                  {unit}
                </p>
              </div>
              {index !== array.length - 1 && (
                <h3 className="font-serif font-semibold text-xl sm:text-3xl text-white">
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
          recycle={true}
          numberOfPieces={800}
          gravity={0.15}
          colors={['#FFD700', '#FF4081', '#FF8A65', '#BA68C8', '#64B5F6', '#4CAF50']}
        />
      )}
    </div>
  );
};

export default CountdownTimer;
