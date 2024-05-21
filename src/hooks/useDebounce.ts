import { useRef } from "react";

export default function useDebounce(func: () => void, delay: number) {
  const funcTimer = useRef<number>(0);

  return function () {
    if (funcTimer.current !== 0) {
      clearTimeout(funcTimer.current);
    }
    const newTimer = setTimeout(() => {
      func();
      funcTimer.current = 0;
    }, delay);
    funcTimer.current = Number(newTimer);
  };
}
