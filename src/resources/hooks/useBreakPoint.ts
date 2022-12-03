import { useEffect, useState } from 'react';

export const useBreakPoint = (breakPoint = 0) => {
  const [beforeBreakPoint, setBeforeBreakPoint] = useState(breakPoint >= window.innerWidth);

  useEffect(() => {
    const handler = () => setBeforeBreakPoint(breakPoint >= window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [breakPoint]);

  return beforeBreakPoint;
};