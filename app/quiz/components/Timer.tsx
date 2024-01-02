"use client";
import React, { useEffect, useState } from "react";
import { DURATION } from "../quiz.constants";

const Timer = () => {
  const [duration, setDuration] = useState(DURATION);
  const [isTimeExpired, setIsTimeExpired] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setDuration((prev) => {
        if (!prev) {
          setIsTimeExpired(true);
          return prev;
        } else return prev - 10;
      });
    }, 10);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-10 w-full mt-20 flex flex-col items-end gap-4">
      <div style={{ width: `${(duration * 100) / DURATION}%` }} className="h-4 rounded-full bg-themeOrange transition-all" />
      <div>
        <p className="text-3xl font-semibold text-themeOrange">{Math.ceil(duration / 1000)}</p>
      </div>
    </div>
  );
};

export default Timer;
