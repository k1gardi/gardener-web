import {useState, useEffect, useContext, createContext} from "react";
import type {FunctionComponent, ReactNode} from "react";

export interface TimerContextType {
  getSeconds: () => number;
  getMinutes: () => number;
  isTimerActive: boolean;
  startTimer: () => void;
  stopTimer: () => void;
  setTimer: (time: number) => void;
}
const TimerContext = createContext<TimerContextType | undefined>(undefined);

export const TimerProvider: FunctionComponent<{children: ReactNode}> = ({
  children,
}) => {
  const [totalSeconds, setTotalSeconds] = useState<number>(0);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);

  const startTimer = () => {
    setIsTimerActive(true);
  };

  const stopTimer = () => {
    setIsTimerActive(false);
  };

  const setTimer = (minutes: number) => {
    setTotalSeconds(minutes * 60);
  };

  const getSeconds = () => {
    return totalSeconds % 60;
  };
  const getMinutes = () => {
    return Math.floor(totalSeconds / 60);
  };

  const updateTime = () => {
    if (totalSeconds === 0) {
      setTotalSeconds(0);
      setIsTimerActive(false);
    } else {
      setTotalSeconds((totalSeconds) => totalSeconds - 1);
    }
  };

  useEffect(() => {
    if (isTimerActive) {
      const token = setTimeout(updateTime, 1000);

      return function cleanUp() {
        clearTimeout(token);
      };
    }
  }, [isTimerActive, totalSeconds, updateTime]);

  const context = {
    getSeconds,
    getMinutes,
    isTimerActive,
    startTimer,
    stopTimer,
    setTimer,
  };

  return (
    <TimerContext.Provider value={context}>{children}</TimerContext.Provider>
  );
};

export const useTimer = () => {
  const context = useContext(TimerContext);

  if (context === undefined) {
    throw new Error("useTimer must be used within a TimerContext");
  }
  return context;
};
